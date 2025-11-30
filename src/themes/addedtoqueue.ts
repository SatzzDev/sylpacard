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

const AddedToQueue = async (options: AddedToQueueOptions): Promise<Buffer> => {
    if (!options.titleColor) options.titleColor = "#FFFFFF";
    if (!options.authorColor) options.authorColor = "#FFFFFF";
    if (!options.message) options.message = "Added to Queue";
    if (!options.messageColor) options.messageColor = "#00FF00";
    if (!options.backgroundColor) options.backgroundColor = "#070707";
    if (!options.imageDarkness) options.imageDarkness = 10;

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
                const darknessSvg = generateSvg(`<svg width="500" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="150" rx="20" fill="#070707" fill-opacity="${options.imageDarkness / 100}"/>
                </svg>`);

                const image = await cropImage({
                    //@ts-ignore
                    imagePath: options.backgroundImage,
                    width: 500,
                    height: 150,
                    borderRadius: 25,
                    cropCenter: true,
                });

                ctx.drawImage(await loadImage(image), 0, 0);
                ctx.drawImage(await loadImage(darknessSvg), 0, 0);
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

        ctx.drawImage(thumbnail, 20, 25);

        ctx.font = "20px extrabold";
        ctx.fillStyle = options.titleColor;
        ctx.fillText(options.title, 140, canvas.height / 2 - 10);

        ctx.font = "16px medium";
        ctx.fillStyle = options.authorColor;
        ctx.fillText(options.author, 140, canvas.height / 2 + 15);

        // Message
        ctx.fillStyle = options.messageColor;
        ctx.font = "18px bold";
        ctx.fillText(options.message, canvas.width - 150, canvas.height - 20);

        return canvas.toBuffer("image/png");
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export { AddedToQueue };
