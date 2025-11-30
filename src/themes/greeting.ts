import { createCanvas, loadImage, type Image } from "@napi-rs/canvas";
import { cropImage } from "cropify";

import { generateSvg } from "../functions/generateSvg.js";
import { registerFont } from "../functions/registerFont.js";
import type { GreetingOption } from "../typings/types.js";

registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("Blacklisted.ttf", "blacklisted");

const Greeting = async (option: GreetingOption): Promise<Buffer> => {
    // Set defaults
    if (!option.type) option.type = "welcome";
    if (!option.username) option.username = "User";
    if (!option.message) {
        option.message = option.type === "welcome" 
            ? "Welcome to the server!" 
            : "Goodbye, we'll miss you!";
    }
    if (!option.memberCount) option.memberCount = "1";

    // Color defaults based on type - Blue/Cyan theme
    if (!option.backgroundColor) {
        option.backgroundColor = option.type === "welcome" ? "#0a192f" : "#112240";
    }
    if (!option.primaryColor) {
        option.primaryColor = option.type === "welcome" ? "#172a45" : "#1e3a5f";
    }
    if (!option.accentColor) {
        option.accentColor = option.type === "welcome" ? "#00d9ff" : "#64ffda";
    }
    if (!option.textColor) option.textColor = "#e6f1ff";
    if (!option.secondaryTextColor) option.secondaryTextColor = "#8892b0";
    if (!option.imageDarkness) option.imageDarkness = 40;

    // Default avatar (user icon SVG)
    const noAvatarSvg = generateSvg(`<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="600" fill="${option.primaryColor}"/>
    <circle cx="300" cy="220" r="90" fill="${option.accentColor}"/>
    <ellipse cx="300" cy="480" rx="150" ry="110" fill="${option.accentColor}"/>
    </svg>`);

    if (!option.avatarImage) {
        option.avatarImage = noAvatarSvg;
    }

    let avatar: Image;

    try {
        avatar = await loadImage(
            await cropImage({
                imagePath: option.avatarImage as any,
                borderRadius: 300, // Circular
                width: 600,
                height: 600,
                cropCenter: true,
            }),
        );
    } catch {
        avatar = await loadImage(
            await cropImage({
                imagePath: noAvatarSvg,
                borderRadius: 300,
                width: 600,
                height: 600,
                cropCenter: true,
            }),
        );
    }

    if (option.imageDarkness < 0) {
        option.imageDarkness = 0;
    } else if (option.imageDarkness > 100) {
        option.imageDarkness = 100;
    }

    if (option.username.length > 22) {
        option.username = `${option.username.slice(0, 22)}...`;
    }

    if (option.message.length > 40) {
        option.message = `${option.message.slice(0, 40)}...`;
    }

    try {
        const canvas = createCanvas(2458, 837);
        const ctx = canvas.getContext("2d");

        // Draw main background
        if (option.backgroundImage) {
            try {
                const image = await cropImage({
                    imagePath: option.backgroundImage as any,
                    width: 2458,
                    height: 837,
                    cropCenter: true,
                    borderRadius: 50,
                });

                const img = await loadImage(image);
                
                // Apply blur effect
                ctx.filter = 'blur(10px)';
                ctx.drawImage(img, 0, 0);
                ctx.filter = 'none';

                // Apply darkness overlay with gradient effect
                const darknessSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#000000;stop-opacity:${option.imageDarkness / 100}" />
                        <stop offset="100%" style="stop-color:#000000;stop-opacity:${(option.imageDarkness / 100) * 0.6}" />
                    </linearGradient>
                </defs>
                <rect width="2458" height="837" rx="50" fill="url(#grad1)"/>
                </svg>`);

                ctx.drawImage(await loadImage(darknessSvg), 0, 0);
            } catch (_err) {
                const backgroundSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2458" height="837" rx="50" fill="${option.backgroundColor}"/>
                </svg>`);

                const background = await loadImage(backgroundSvg);
                ctx.drawImage(background, 0, 0);
            }
        } else {
            const backgroundSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:${option.backgroundColor};stop-opacity:1" />
                    <stop offset="100%" style="stop-color:${option.primaryColor};stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="2458" height="837" rx="50" fill="url(#bgGrad)"/>
            </svg>`);

            const background = await loadImage(backgroundSvg);
            ctx.drawImage(background, 0, 0);
        }

        // // Draw decorative shapes
        // const shapesSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <circle cx="2300" cy="100" r="150" fill="${option.accentColor}" opacity="0.1"/>
        // <circle cx="2150" cy="700" r="100" fill="${option.accentColor}" opacity="0.08"/>
        // <rect x="0" y="750" width="1500" height="87" rx="10" fill="${option.primaryColor}" opacity="0.3"/>
        // </svg>`);
        
        // ctx.drawImage(await loadImage(shapesSvg), 0, 0);

        // Draw avatar with modern border (smaller size)
        const borderSvg = generateSvg(`<svg width="650" height="650" viewBox="0 0 650 650" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="325" cy="325" r="325" fill="${option.primaryColor}" opacity="0.3"/>
        <circle cx="325" cy="325" r="315" fill="none" stroke="${option.accentColor}" stroke-width="8"/>
        </svg>`);
        
        const border = await loadImage(borderSvg);
        ctx.drawImage(border, 1783, 93);
        ctx.drawImage(avatar, 1808, 118);

        // Draw welcome/goodbye text with shadow
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;

        const titleText = option.type === "welcome" ? "WELCOME" : "GOODBYE";
        ctx.fillStyle = `${option.accentColor}`;
        ctx.font = "150px blacklisted";
        ctx.fillText(titleText, 113, 220);

        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;

        // Draw username with glow effect
        ctx.shadowColor = option.accentColor;
        ctx.shadowBlur = 15;
        ctx.fillStyle = `${option.textColor}`;
        ctx.font = "95px extrabold";
        ctx.fillText(option.username, 113, 360);

        ctx.shadowBlur = 0;

        // Draw message
        ctx.fillStyle = `${option.secondaryTextColor}`;
        ctx.font = "60px regular";
        ctx.fillText(option.message, 113, 470);

        // Draw accent line with gradient
        const accentLineSvg = generateSvg(`<svg width="1500" height="6" viewBox="0 0 1500 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="200%" y2="0%">
                <stop offset="0%" style="stop-color:${option.accentColor};stop-opacity:1" />
                <stop offset="100%" style="stop-color:${option.accentColor};stop-opacity:0" />
            </linearGradient>
        </defs>
        <rect width="1500" height="6" rx="3" fill="url(#lineGrad)"/>
        </svg>`);
        
        const accentLine = await loadImage(accentLineSvg);
        ctx.drawImage(accentLine, 113, 530);

        // Draw member count as badge
        const memberText = option.type === "welcome" 
            ? `Member #${option.memberCount}` 
            : `${option.memberCount} members`;
        
        // Calculate badge width based on text
        ctx.font = "35px blacklisted";
        const textWidth = ctx.measureText(memberText).width;
        const badgeWidth = textWidth + 140; // padding
        
        const memberBadgeSvg = generateSvg(`<svg width="${badgeWidth}" height="85" viewBox="0 0 ${badgeWidth} 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:${option.accentColor};stop-opacity:0.2" />
                <stop offset="100%" style="stop-color:${option.accentColor};stop-opacity:0.1" />
            </linearGradient>
        </defs>
        <rect width="${badgeWidth}" height="85" rx="42" fill="url(#badgeGrad)" stroke="${option.accentColor}" stroke-width="2"/>
        <circle cx="50" cy="42" r="16" fill="${option.accentColor}"/>
        <path d="M30 68C30 58 37 52 50 52C63 52 70 58 70 68" stroke="${option.accentColor}" stroke-width="4" stroke-linecap="round"/>
        </svg>`);
        
        const memberBadge = await loadImage(memberBadgeSvg);
        ctx.drawImage(memberBadge, 113, 650);

        ctx.fillStyle = `${option.accentColor}`;
        ctx.font = "35px blacklisted";
        ctx.fillText(memberText, 210, 710);

        return canvas.toBuffer("image/png");
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export { Greeting };