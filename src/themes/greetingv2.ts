import { createCanvas, loadImage, type Image } from "@napi-rs/canvas";
import { cropImage } from "cropify";

import { generateSvg } from "../functions/generateSvg.js";
import { registerFont } from "../functions/registerFont.js";
import { Icons } from "../functions/icons.js";
import type { GreetingV2Option } from "../typings/types.js";

registerFont("PlusJakartaSans-Bold.ttf", "bold");
registerFont("PlusJakartaSans-ExtraBold.ttf", "extrabold");
registerFont("PlusJakartaSans-ExtraLight.ttf", "extralight");
registerFont("PlusJakartaSans-Light.ttf", "light");
registerFont("PlusJakartaSans-Medium.ttf", "medium");
registerFont("PlusJakartaSans-Regular.ttf", "regular");
registerFont("PlusJakartaSans-SemiBold.ttf", "semibold");
registerFont("Blacklisted.ttf", "blacklisted");

const GreetingV2 = async (option: GreetingV2Option): Promise<Buffer> => {
    // Set defaults
    if (!option.type) option.type = "welcome";
    if (!option.username) option.username = "User";
    if (!option.message) {
        option.message = option.type === "welcome" 
            ? "Welcome to the server!" 
            : "Goodbye, we'll miss you!";
    }
    if (!option.memberCount) option.memberCount = "1";
    if (!option.joinedAt) {
        const now = new Date();
        option.joinedAt = now.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }

    // Color defaults - Blue/Cyan theme
    if (!option.backgroundColor) {
        option.backgroundColor = option.type === "welcome" ? "#0a192f" : "#112240";
    }
    if (!option.accentColor) {
        option.accentColor = option.type === "welcome" ? "#00d9ff" : "#64ffda";
    }
    if (!option.textColor) option.textColor = "#e6f1ff";
    if (!option.secondaryTextColor) option.secondaryTextColor = "#8892b0";
    if (!option.imageDarkness) option.imageDarkness = 40;

    // Default avatar SVG
    const noAvatarSvg = generateSvg(`<svg width="837" height="837" viewBox="0 0 837 837" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="837" height="837" fill="${option.accentColor}"/>
    <circle cx="418.5" cy="320" r="130" fill="${option.backgroundColor}"/>
    <ellipse cx="418.5" cy="680" rx="220" ry="160" fill="${option.backgroundColor}"/>
    </svg>`);

    if (!option.avatarImage) {
        option.avatarImage = noAvatarSvg;
    }

    let avatar: Image;

    try {
        avatar = await loadImage(
            await cropImage({
                imagePath: option.avatarImage as any,
                borderRadius: 50,
                width: 837,
                height: 837,
                cropCenter: true,
            }),
        );
    } catch {
        avatar = await loadImage(
            await cropImage({
                imagePath: noAvatarSvg,
                borderRadius: 50,
                width: 837,
                height: 837,
                cropCenter: true,
            }),
        );
    }

    if (option.imageDarkness < 0) {
        option.imageDarkness = 0;
    } else if (option.imageDarkness > 100) {
        option.imageDarkness = 100;
    }

    if (option.username.length > 18) {
        option.username = `${option.username.slice(0, 18)}...`;
    }

    if (option.message.length > 18) {
        option.message = `${option.message.slice(0, 18)}...`;
    }

    try {
        const canvas = createCanvas(2458, 837);
        const ctx = canvas.getContext("2d");

        // Draw background sections (MIRIP CLASSIC)
        if (option.backgroundImage) {
            try {
                const image = await cropImage({
                    imagePath: option.backgroundImage as any,
                    width: 1568,
                    height: 837,
                    cropCenter: true,
                });

                // Draw top section with blur
                await cropImage({
                    // @ts-ignore
                    imagePath: image,
                    x: 0,
                    y: -170,
                    width: 1568,
                    height: 512,
                    borderRadius: 50,
                }).then(async (x: any) => {
                    const img = await loadImage(x);
                    
                    ctx.filter = 'blur(10px)';
                    ctx.drawImage(img, 0, 0);
                    ctx.filter = 'none';
                });

                // Draw bottom section with blur
                await cropImage({
                    // @ts-ignore
                    imagePath: image,
                    x: 0,
                    y: -845,
                    width: 1568,
                    height: 272,
                    borderRadius: 50,
                }).then(async (x: any) => {
                    const img = await loadImage(x);
                    
                    ctx.filter = 'blur(10px)';
                    ctx.drawImage(img, 0, 565);
                    ctx.filter = 'none';
                });

                // Apply darkness overlay
                const darknessSvg = generateSvg(`<svg width="1568" height="837" viewBox="0 0 1568 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1568" height="512" rx="50" fill="#070707" fill-opacity="${option.imageDarkness / 100}"/>
                <rect y="565" width="1568" height="272" rx="50" fill="#070707" fill-opacity="${option.imageDarkness / 100}"/>
                </svg>`);

                ctx.drawImage(await loadImage(darknessSvg), 0, 0);
            } catch (_err) {
                const backgroundSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1568" height="512" rx="50" fill="${option.backgroundColor}"/>
                <rect y="565" width="1568" height="272" rx="50" fill="${option.backgroundColor}"/>
                </svg>`);

                const background = await loadImage(backgroundSvg);
                ctx.drawImage(background, 0, 0);
            }
        } else {
            const backgroundSvg = generateSvg(`<svg width="2458" height="837" viewBox="0 0 2458 837" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1568" height="512" rx="50" fill="${option.backgroundColor}"/>
            <rect y="565" width="1568" height="272" rx="50" fill="${option.backgroundColor}"/>
            </svg>`);

            const background = await loadImage(backgroundSvg);
            ctx.drawImage(background, 0, 0);
        }

        // Draw avatar (kanan seperti thumbnail di Classic)
        ctx.drawImage(avatar, 1621, 0);

        // Draw WELCOME/GOODBYE text (posisi seperti name di Classic)
        const titleText = option.type === "welcome" ? "WELCOME" : "GOODBYE";
        ctx.fillStyle = `${option.accentColor}`;
        ctx.font = "150px blacklisted";
        ctx.fillText(titleText, 113, 230);

        // Draw username (posisi seperti author di Classic)
        ctx.fillStyle = `${option.textColor}`;
        ctx.font = "100px extrabold";
        ctx.fillText(option.username, 113, 370);

        // Draw message
        ctx.fillStyle = `${option.secondaryTextColor}`;
        ctx.font = "80px medium";
        ctx.fillText(option.message, 113, 480);

        // ==================== BADGE 1: MEMBER COUNT ====================
        const memberText = option.type === "welcome" 
            ? `#${option.memberCount} MEMBER` 
            : `${option.memberCount} MEMBERS`;
        
        ctx.font = "45px blacklisted";
        const memberTextWidth = ctx.measureText(memberText).width;
        const memberBadgeWidth = memberTextWidth + 150;
        
        const memberBadgeSvg = generateSvg(`<svg width="${memberBadgeWidth}" height="76" viewBox="0 0 ${memberBadgeWidth} 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="memberBadgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:${option.accentColor};stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:${option.accentColor};stop-opacity:0.15" />
            </linearGradient>
        </defs>
        <rect width="${memberBadgeWidth}" height="76" rx="38" fill="url(#memberBadgeGrad)" stroke="${option.accentColor}" stroke-width="3"/>
        </svg>`);

        const memberBadge = await loadImage(memberBadgeSvg);
        ctx.drawImage(memberBadge, 113, 650);

        // Draw users icon FROM ICONS LIBRARY
        const usersIcon = await loadImage(Icons.users({ color: option.accentColor, size: 50 }));
        ctx.drawImage(usersIcon, 138, 660);

        // Draw member text
        ctx.fillStyle = `${option.accentColor}`;
        ctx.font = "45px blacklisted";
        ctx.fillText(memberText, 205, 710);

        // ==================== BADGE 2: JOINED DATE ====================
        const joinedText = option.type === "welcome" 
            ? `JOINED ${option.joinedAt}` 
            : `LEFT ${option.joinedAt}`;
        
        ctx.font = "45px blacklisted";
        const joinedTextWidth = ctx.measureText(joinedText).width;
        const joinedBadgeWidth = joinedTextWidth + 150;
        
        const joinedBadgeSvg = generateSvg(`<svg width="${joinedBadgeWidth}" height="76" viewBox="0 0 ${joinedBadgeWidth} 76" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="joinedBadgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:${option.accentColor};stop-opacity:0.3" />
                <stop offset="100%" style="stop-color:${option.accentColor};stop-opacity:0.15" />
            </linearGradient>
        </defs>
        <rect width="${joinedBadgeWidth}" height="76" rx="38" fill="url(#joinedBadgeGrad)" stroke="${option.accentColor}" stroke-width="3"/>
        </svg>`);
        
        const joinedBadge = await loadImage(joinedBadgeSvg);
        
        // Position badge after member badge
        const memberBadgeEnd = 113 + memberBadgeWidth + 350; // 30px gap
        ctx.drawImage(joinedBadge, memberBadgeEnd, 650);

        // Draw calendar icon FROM ICONS LIBRARY
        const calendarIcon = await loadImage(Icons.calendar({ color: option.accentColor, size: 50 }));
        ctx.drawImage(calendarIcon, memberBadgeEnd + 25, 660);

        // Draw joined text
        ctx.fillStyle = `${option.accentColor}`;
        ctx.font = "45px blacklisted";
        ctx.fillText(joinedText, memberBadgeEnd + 92, 710);

        return canvas.toBuffer("image/png");
    } catch (e: any) {
        throw new Error(e.message);
    }
};

export { GreetingV2 };