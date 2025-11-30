import { createCanvas, loadImage } from "@napi-rs/canvas";
import { cropImage } from "cropify";

import { generateSvg } from "../functions/generateSvg.js";
import { registerFont } from "../functions/registerFont.js";
import type { QueueListOptions } from "../typings/types.js";

registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("Blacklisted.ttf", "badge");

const QueueList = async (options: QueueListOptions): Promise<Buffer> => {
    if (!options.title) options.title = "Queue List";
    if (!options.titleColor) options.titleColor = "#FFFFFF";
    if (!options.backgroundColor) options.backgroundColor = "#070707";
    if (!options.imageDarkness) options.imageDarkness = 10;
    if (!options.badgeBg) options.badgeBg = "#5865F2";
    if (!options.badgeBorder) options.badgeBorder = "#FFFFFF";
    if (!options.badgeText) options.badgeText = "#FFFFFF";

    const noImageSvg = generateSvg(`<svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="613" height="837" rx="50" fill="${options.backgroundColor}" />
    </svg>`);

    try {
        const canvas = createCanvas(690, 700);
        const ctx = canvas.getContext("2d");

        // Background
        if (options.backgroundImage) {
            try {
                const darknessSvg = generateSvg(`<svg width="690" height="700" viewBox="0 0 690 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="700" rx="100" fill="#070707" fill-opacity="${options.imageDarkness / 100}"/>
                </svg>`);

                const image = await cropImage({
                    //@ts-ignore
                    imagePath: options.backgroundImage,
                    width: 690,
                    height: 700,
                    borderRadius: 20,
                    cropCenter: true,
                });

                ctx.drawImage(await loadImage(image), 0, 0);
                ctx.drawImage(await loadImage(darknessSvg), 0, 0);
            } catch (_error) {
                const backgroundSvg = generateSvg(`<svg width="690" height="700" viewBox="0 0 690 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="700" rx="100" fill="${options.backgroundColor}"/>
                </svg>`);

                const backgroundColor = await loadImage(backgroundSvg);
                ctx.drawImage(backgroundColor, 0, 0);
            }
        } else {
            const backgroundSvg = generateSvg(`<svg width="690" height="700" viewBox="0 0 690 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="690" height="700" rx="100" fill="${options.backgroundColor}"/>
            </svg>`);

            const backgroundColor = await loadImage(backgroundSvg);
            ctx.drawImage(backgroundColor, 0, 0);
        }

        // Title Badge - Menggunakan mekanisme kode yang diberikan
        // Set font badge
        ctx.font = "25px badge"; // Ukuran lebih besar untuk title
        const badgeText = options.title;

        // Padding badge
        const padX = 12;
        const padY = 8;

        // Hitung ukuran tulisan
        const textWidth = ctx.measureText(badgeText).width;
        const textHeight = 30;

        // Posisi kiri atas
        const badgeX = 20;
        const badgeY = 25;

        // Ukuran badge
        const badgeW = textWidth + padX * 2;
        const badgeH = textHeight + padY * 2;

        // Shadow effect
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Badge background (rounded rectangle manual path)
        ctx.fillStyle = options.badgeBg;
        ctx.beginPath();
        ctx.moveTo(badgeX + 12, badgeY);
        ctx.lineTo(badgeX + badgeW - 12, badgeY);
        ctx.quadraticCurveTo(badgeX + badgeW, badgeY, badgeX + badgeW, badgeY + 12);
        ctx.lineTo(badgeX + badgeW, badgeY + badgeH - 12);
        ctx.quadraticCurveTo(badgeX + badgeW, badgeY + badgeH, badgeX + badgeW - 12, badgeY + badgeH);
        ctx.lineTo(badgeX + 12, badgeY + badgeH);
        ctx.quadraticCurveTo(badgeX, badgeY + badgeH, badgeX, badgeY + badgeH - 12);
        ctx.lineTo(badgeX, badgeY + 12);
        ctx.quadraticCurveTo(badgeX, badgeY, badgeX + 12, badgeY);
        ctx.closePath();
        ctx.fill();

        // Badge border
        ctx.shadowColor = "transparent";
        ctx.lineWidth = 2;
        ctx.strokeStyle = options.badgeBorder;
        ctx.lineJoin = "round";
        ctx.stroke();

        // Reset shadow untuk text
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;

        // Title text di tengah badge
        ctx.fillStyle = options.badgeText;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(badgeText, badgeX + badgeW/2, 52);
        ctx.textAlign = "start";
        ctx.textBaseline = "alphabetic";

        const tracksToShow = options.tracks.slice(0, 10);
        for (let i = 0; i < tracksToShow.length; i++) {
            const track = tracksToShow[i];
            const y = 90 + i * 60; // Adjusted untuk badge height

            // Thumbnail
            let thumbnail;
            try {
                thumbnail = await loadImage(
                    await cropImage({
                        //@ts-ignore
                        imagePath: track.thumbnailImage || noImageSvg,
                        borderRadius: 10,
                        width: 48,
                        height: 48,
                        cropCenter: true,
                    })
                );
            } catch {
                thumbnail = await loadImage(
                    await cropImage({
                        imagePath: noImageSvg,
                        borderRadius: 10,
                        width: 48,
                        height: 48,
                        cropCenter: true,
                    })
                );
            }
            ctx.drawImage(thumbnail, 20, y);

            // Track Title
            ctx.font = "18px semibold";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(
                track.title.length > 28 
                    ? track.title.slice(0, 28) + "…" 
                    : track.title,
                80, 
                y + 20
            );

            // Author
            ctx.font = "14px regular";
            ctx.fillStyle = "#CCCCCC";
            ctx.fillText(
                track.author.length > 22 
                    ? track.author.slice(0, 22) + "…" 
                    : track.author,
                80, 
                y + 40
            );

            // Index
            ctx.fillStyle = "#5865F2";
            ctx.font = "16px bold";
            ctx.fillText(`${i + 1}`, canvas.width - 40, y + 28);

            // Separator
            ctx.beginPath();
            ctx.moveTo(20, y + 55);
            ctx.lineTo(canvas.width - 20, y + 55);
            ctx.strokeStyle = "rgba(255,255,255,0.15)";
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        return canvas.toBuffer("image/png");
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export { QueueList };
