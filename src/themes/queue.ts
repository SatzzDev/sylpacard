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

const QueueList = async (options: QueueListOptions): Promise<Buffer> => {
    if (!options.title) options.title = "Queue List";
    if (!options.titleColor) options.titleColor = "#FFFFFF";
    if (!options.backgroundColor) options.backgroundColor = "#070707";
    if (!options.imageDarkness) options.imageDarkness = 10;

    const noImageSvg = generateSvg(`<svg width="613" height="837" viewBox="0 0 613 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="613" height="837" rx="50" fill="${options.backgroundColor}" />
    </svg>`);

    try {
        const canvas = createCanvas(690, 400);
        const ctx = canvas.getContext("2d");

        // Background
        if (options.backgroundImage) {
            try {
                const darknessSvg = generateSvg(`<svg width="690" height="400" viewBox="0 0 690 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="400" rx="30" fill="#070707" fill-opacity="${options.imageDarkness / 100}"/>
                </svg>`);

                const image = await cropImage({
                    //@ts-ignore
                    imagePath: options.backgroundImage,
                    width: 690,
                    height: 400,
                    borderRadius: 35,
                    cropCenter: true,
                });

                ctx.drawImage(await loadImage(image), 0, 0);
                ctx.drawImage(await loadImage(darknessSvg), 0, 0);
            } catch (_error) {
                const backgroundSvg = generateSvg(`<svg width="690" height="400" viewBox="0 0 690 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="690" height="400" rx="35" fill="${options.backgroundColor}"/>
                </svg>`);

                const backgroundColor = await loadImage(backgroundSvg);
                ctx.drawImage(backgroundColor, 0, 0);
            }
        } else {
            const backgroundSvg = generateSvg(`<svg width="690" height="400" viewBox="0 0 690 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="690" height="400" rx="35" fill="${options.backgroundColor}"/>
            </svg>`);

            const backgroundColor = await loadImage(backgroundSvg);
            ctx.drawImage(backgroundColor, 0, 0);
        }

        // Title
        ctx.font = "30px extrabold";
        ctx.fillStyle = options.titleColor;
        ctx.fillText(options.title, 20, 50);

        // Tracks
        const tracksToShow = options.tracks.slice(0, 5); // Show up to 5 tracks
        for (let i = 0; i < tracksToShow.length; i++) {
            const track = tracksToShow[i];
            const y = 80 + i * 60;

            // Thumbnail
            let thumbnail;
            try {
                thumbnail = await loadImage(
                    await cropImage({
                        //@ts-ignore
                        imagePath: track.thumbnailImage || noImageSvg,
                        borderRadius: 10,
                        width: 40,
                        height: 40,
                        cropCenter: true,
                    }),
                );
            } catch (_e) {
                thumbnail = await loadImage(
                    await cropImage({
                        imagePath: noImageSvg,
                        borderRadius: 10,
                        width: 40,
                        height: 40,
                        cropCenter: true,
                    }),
                );
            }
            ctx.drawImage(thumbnail, 20, y);

            // Track info
            ctx.font = "18px bold";
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(track.title.length > 25 ? `${track.title.slice(0, 25)}...` : track.title, 80, y + 15);

            ctx.font = "14px medium";
            ctx.fillStyle = "#CCCCCC";
            ctx.fillText(track.author.length > 20 ? `${track.author.slice(0, 20)}...` : track.author, 80, y + 35);

            // Index
            ctx.fillStyle = "#FF7A00";
            ctx.font = "16px bold";
            ctx.fillText(`${i + 1}`, canvas.width - 40, y + 25);
        }

        return canvas.toBuffer("image/png");
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export { QueueList };
