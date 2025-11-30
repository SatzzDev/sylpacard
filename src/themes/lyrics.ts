import { createCanvas, loadImage } from "@napi-rs/canvas";
import { cropImage } from "cropify";

import { generateSvg } from "../functions/generateSvg.js";
import { registerFont } from "../functions/registerFont.js";
import type { LyricsOptions } from "../typings/types.js";

registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("DMSans-Medium.ttf", "lyrics");

const Lyrics = async (options: LyricsOptions): Promise<Buffer> => {
    if (!options.titleColor) options.titleColor = "#FFFFFF";
    if (!options.authorColor) options.authorColor = "#FFFFFF";
    if (!options.lyricsColor) options.lyricsColor = "#FFFFFF";
    if (!options.backgroundColor) options.backgroundColor = "#070707";
    if (!options.imageDarkness) options.imageDarkness = 10;

    const canvasWidth = 720;
    const canvasHeight = 1280;

    const noImageSvg = generateSvg(`<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="${options.backgroundColor}" />
    </svg>`);

    let thumbnail;

    try {
        thumbnail = await loadImage(
            await cropImage({
                //@ts-ignore
                imagePath: options.thumbnailImage || noImageSvg,
                borderRadius: 14,
                width: 100,
                height: 100,
                cropCenter: true,
            }),
        );
    } catch (_e) {
        thumbnail = await loadImage(
            await cropImage({
                imagePath: noImageSvg,
                borderRadius: 14,
                width: 100,
                height: 100,
                cropCenter: true,
            }),
        );
    }

    if (options.imageDarkness < 0) options.imageDarkness = 0;
    else if (options.imageDarkness > 100) options.imageDarkness = 100;

    const maxTitleWidth = canvasWidth - 200;
    const maxAuthorWidth = canvasWidth - 200;

    try {
        const canvas = createCanvas(canvasWidth, canvasHeight);
        const ctx = canvas.getContext("2d");

        // Background
        if (options.backgroundImage) {
            try {
                const bgImage = await loadImage(options.backgroundImage);

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
                // Rounded corners clip (radius 260 untuk match SVG path)
                ctx.beginPath();
                ctx.roundRect(0, 0, canvasWidth, canvasHeight, 50);
                ctx.clip();

                // blur
                ctx.filter = 'blur(10px)';
                ctx.drawImage(bgImage, offsetX, offsetY, drawWidth, drawHeight);
                ctx.filter = 'none';
                
                // darkness overlay
                ctx.fillStyle = `rgba(7, 7, 7, ${options.imageDarkness / 100})`;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            } catch (_error) {
                ctx.fillStyle = options.backgroundColor;
                ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            }
        } else {
            ctx.fillStyle = options.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        ctx.drawImage(thumbnail, 50, 50);

        ctx.font = "30px extrabold";
        ctx.fillStyle = options.titleColor;
        let title = options.title;
        let titleWidth = ctx.measureText(title).width;
        while (titleWidth > maxTitleWidth && title.length > 3) {
            title = title.slice(0, -4) + "...";
            titleWidth = ctx.measureText(title).width;
        }
        ctx.fillText(title, 180, 90);

        ctx.font = "20px medium";
        ctx.fillStyle = options.authorColor;
        let author = options.author;
        let authorWidth = ctx.measureText(author).width;
        while (authorWidth > maxAuthorWidth && author.length > 3) {
            author = author.slice(0, -4) + "...";
            authorWidth = ctx.measureText(author).width;
        }
        ctx.fillText(author, 180, 120);

        ctx.fillStyle = options.lyricsColor;
        ctx.font = "18px lyrics";

        const lyricsLines = options.lyrics.split('\n');
        const maxLyricsWidth = canvasWidth - 100;
        const lineHeight = 30;
        const startY = 200;
        const maxLines = Math.floor((canvasHeight - startY - 50) / lineHeight);

        let currentY = startY;
        let lineCount = 0;

        for (let i = 0; i < lyricsLines.length && lineCount < maxLines; i++) {
            let line = lyricsLines[i].trim();

            if (line === '') {
                currentY += lineHeight;
                lineCount++;
                continue;
            }

            let words = line.split(' ');
            let currentLine = '';

            for (let word of words) {
                let testLine = currentLine + (currentLine ? ' ' : '') + word;
                let testWidth = ctx.measureText(testLine).width;

                if (testWidth > maxLyricsWidth && currentLine) {
                    ctx.fillText(currentLine, 50, currentY);
                    currentY += lineHeight;
                    lineCount++;
                    currentLine = word;

                    if (lineCount >= maxLines) break;
                } else {
                    currentLine = testLine;
                }
            }

            if (currentLine && lineCount < maxLines) {
                ctx.fillText(currentLine, 50, currentY);
                currentY += lineHeight;
                lineCount++;
            }

            if (lineCount >= maxLines) break;
        }

        return canvas.toBuffer("image/png");
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export { Lyrics };
