import { createCanvas, loadImage } from "@napi-rs/canvas";
import { cropImage } from "cropify";

import { generateSvg } from "../functions/generateSvg.js";
import { registerFont } from "../functions/registerFont.js";
import type { AddedToQueueOptions } from "../typings/types.js";

registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("Blacklisted.ttf", "badge");

const AddedToQueue = async (options: AddedToQueueOptions): Promise<Buffer> => {
    if (!options.titleColor) options.titleColor = "#FFFFFF";
    if (!options.authorColor) options.authorColor = "#FFFFFF";
    if (!options.message) options.message = "Added to Queue";
    if (!options.messageColor) options.messageColor = "#5865F2";
    if (!options.backgroundColor) options.backgroundColor = "#070707";
    if (!options.imageDarkness) options.imageDarkness = 10;
    if (!options.badgeBg) options.badgeBg = "#5865F2";
    if (!options.badgeBorder) options.badgeBorder = "#fff";
    if (!options.badgeText) options.badgeText = "#fff";

    const noImageSvg = generateSvg(`<svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="613" height="837" rx="50" fill="${options.backgroundColor}" />
    </svg>`);

    let thumbnail;

    try {
        thumbnail = await loadImage(
            await cropImage({
                //@ts-ignore
                imagePath: options.thumbnailImage || noImageSvg,
                borderRadius: 20,
                width: 100,
                height: 100,
                cropCenter: true,
            }),
        );
    } catch (_e) {
        thumbnail = await loadImage(
            await cropImage({
                imagePath: noImageSvg,
                borderRadius: 20,
                width: 100,
                height: 100,
                cropCenter: true,
            }),
        );
    }

    if (options.imageDarkness < 0) {
        options.imageDarkness = 0;
    } else if (options.imageDarkness > 100) {
        options.imageDarkness = 100;
    }

    if (options.title.length > 18) {
        options.title = `${options.title.slice(0, 18)}...`;
    }

    if (options.author.length > 19) {
        options.author = `${options.author.slice(0, 19)}...`;
    }

    try {
        const canvas = createCanvas(500, 150);
        const ctx = canvas.getContext("2d");

        // Background
        if (options.backgroundImage) {
            try {
                const bgImage = await loadImage(options.backgroundImage);

                const canvasWidth = 500;
                const canvasHeight = 150;
                const imgWidth = bgImage.width;
                const imgHeight = bgImage.height;
                const canvasRatio = canvasWidth / canvasHeight;
                const imgRatio = imgWidth / imgHeight;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (imgRatio > canvasRatio) {
                    drawHeight = canvasHeight;
                    drawWidth = imgWidth * (canvasHeight / imgHeight);
                    offsetX = (canvasWidth - drawWidth) / 2;
                    offsetY = 0;
                } else {
                    drawWidth = canvasWidth;
                    drawHeight = imgHeight * (canvasWidth / imgWidth);
                    offsetX = 0;
                    offsetY = (canvasHeight - drawHeight) / 2;
                }

                ctx.save();

                // Rounded corners clip
                ctx.beginPath();
                ctx.roundRect(0, 0, canvasWidth, canvasHeight, 25);
                ctx.clip();

                // Apply blur and draw background
                ctx.filter = 'blur(10px)';
                ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);
                ctx.filter = 'none';

                // Darkness overlay
                ctx.fillStyle = `rgba(7, 7, 7, ${options.imageDarkness / 100})`;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);

                ctx.restore();
            } catch (_error) {
                const backgroundSvg = generateSvg(`<svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="500" height="150" rx="25" fill="${options.backgroundColor}"/>
        </svg>`);

                const backgroundColor = await loadImage(backgroundSvg);
                ctx.drawImage(backgroundColor, 0, 0);
            }
        } else {
            const backgroundSvg = generateSvg(`<svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="150" rx="25" fill="${options.backgroundColor}"/>
    </svg>`);

            const backgroundColor = await loadImage(backgroundSvg);
            ctx.drawImage(backgroundColor, 0, 0);
        }

        ctx.drawImage(thumbnail, 20, 15); // thumbnail lebih besar & lebih center

        // Title
        ctx.font = "22px extrabold";
        ctx.fillStyle = options.titleColor;
        ctx.fillText(options.title, 150, 55);

        // Author
        ctx.font = "17px medium";
        ctx.fillStyle = options.authorColor;
        ctx.fillText(options.author, 150, 85);

        // Set font kecil biar badge vibes
        ctx.font = "15px badge";
        const badgeText = options.message;

        // Padding badge
        const padX = 10;
        const padY = 6;

        // Hitung ukuran tulisan
        const textWidth = ctx.measureText(badgeText).width;
        const textHeight = 20;

        // Posisi kanan atas
        const badgeX = canvas.width - textWidth - padX * 2 - 25;
        const badgeY = 20;

        // Bikin rounded badge
        const badgeW = textWidth + padX * 2;
        const badgeH = textHeight + padY * 2;

        // Path rounded rectangle
        ctx.beginPath();
        ctx.moveTo(badgeX + 10, badgeY);
        ctx.lineTo(badgeX + badgeW - 10, badgeY);
        ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + 10);
        ctx.lineTo(badgeX + badgeW, badgeY + badgeH - 10);
        ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - 10, badgeY + badgeH);
        ctx.lineTo(badgeX + 10, badgeY + badgeH);
        ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - 10);
        ctx.lineTo(badgeX, badgeY + 10);
        ctx.quadraticCurveTo(badgeX, badgeY, badgeX + 10, badgeY);
        ctx.closePath();

        // Badge background
        ctx.fillStyle = options.badgeBg
        ctx.fill();

        // Badge border (optional)
        ctx.strokeStyle = options.badgeBorder
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw text
        ctx.fillStyle = options.badgeText
        ctx.fillText(badgeText, badgeX + padX, badgeY + badgeH - padY - 2);


        return canvas.toBuffer("image/png");
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export { AddedToQueue };
