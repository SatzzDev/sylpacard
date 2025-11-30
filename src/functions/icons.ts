import { generateSvg } from "./generateSvg.js";

export interface IconOptions {
    color: string;
    size?: number;
}

export class Icons {
    /**
     * Calendar icon - untuk joined date
     */
    static calendar(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="34" height="30" rx="3" fill="none" stroke="${color}" stroke-width="3"/>
            <line x1="15" y1="8" x2="15" y2="16" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
            <line x1="35" y1="8" x2="35" y2="16" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
            <line x1="8" y1="22" x2="42" y2="22" stroke="${color}" stroke-width="3"/>
            <circle cx="17" cy="29" r="2" fill="${color}"/>
            <circle cx="25" cy="29" r="2" fill="${color}"/>
            <circle cx="33" cy="29" r="2" fill="${color}"/>
            <circle cx="17" cy="36" r="2" fill="${color}"/>
            <circle cx="25" cy="36" r="2" fill="${color}"/>
        </svg>`);
    }

    /**
     * Users icon - untuk member count
     */
    static users(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="18" r="8" fill="${color}"/>
            <path d="M12 42C12 34 17 30 25 30C33 30 38 34 38 42" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
        </svg>`);
    }

    /**
     * Clock icon - untuk waktu
     */
    static clock(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="18" stroke="${color}" stroke-width="3" fill="none"/>
            <line x1="25" y1="25" x2="25" y2="15" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
            <line x1="25" y1="25" x2="32" y2="25" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
            <circle cx="25" cy="25" r="2" fill="${color}"/>
        </svg>`);
    }

    /**
     * Star icon - untuk rank/level
     */
    static star(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 5L29.5 19H44L32.5 27.5L37 41.5L25 33L13 41.5L17.5 27.5L6 19H20.5L25 5Z" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
        </svg>`);
    }

    /**
     * Trophy icon - untuk achievement
     */
    static trophy(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8H35V20C35 25 30 28 25 28C20 28 15 25 15 20V8Z" stroke="${color}" stroke-width="3" fill="none"/>
            <line x1="25" y1="28" x2="25" y2="38" stroke="${color}" stroke-width="3"/>
            <rect x="18" y="38" width="14" height="4" rx="2" fill="${color}"/>
            <path d="M35 10H40C40 10 42 10 42 15" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
            <path d="M15 10H10C10 10 8 10 8 15" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
        </svg>`);
    }

    /**
     * Heart icon - untuk likes/favorites
     */
    static heart(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 42L7 24C4 21 4 16 7 13C10 10 15 10 18 13L25 20L32 13C35 10 40 10 43 13C46 16 46 21 43 24L25 42Z" fill="${color}"/>
        </svg>`);
    }

    /**
     * Message icon - untuk chat/messages
     */
    static message(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="10" width="38" height="28" rx="4" stroke="${color}" stroke-width="3" fill="none"/>
            <path d="M15 38L20 32H30L35 38" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="14" y1="20" x2="36" y2="20" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="14" y1="27" x2="28" y2="27" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        </svg>`);
    }

    /**
     * Shield icon - untuk security/verified
     */
    static shield(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 5L8 12V25C8 35 15 42 25 45C35 42 42 35 42 25V12L25 5Z" stroke="${color}" stroke-width="3" fill="none"/>
            <path d="M18 24L23 29L33 19" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`);
    }

    /**
     * Lightning icon - untuk boost/premium
     */
    static lightning(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 5L12 28H25L22 45L38 22H25L28 5Z" fill="${color}"/>
        </svg>`);
    }

    /**
     * Gift icon - untuk bonus/rewards
     */
    static gift(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="18" width="30" height="8" rx="2" stroke="${color}" stroke-width="3" fill="none"/>
            <rect x="12" y="26" width="26" height="18" rx="2" stroke="${color}" stroke-width="3" fill="none"/>
            <line x1="25" y1="18" x2="25" y2="44" stroke="${color}" stroke-width="3"/>
            <path d="M25 18C25 18 22 12 18 12C15 12 13 14 13 16C13 18 15 18 18 18H25Z" fill="${color}"/>
            <path d="M25 18C25 18 28 12 32 12C35 12 37 14 37 16C37 18 35 18 32 18H25Z" fill="${color}"/>
        </svg>`);
    }

    /**
     * Fire icon - untuk streak/hot
     */
    static fire(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 8C25 8 20 15 20 22C20 26 22 28 25 28C28 28 30 26 30 22C30 15 25 8 25 8Z" fill="${color}"/>
            <path d="M18 25C18 25 15 28 15 32C15 37 19 42 25 42C31 42 35 37 35 32C35 28 32 25 32 25" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
        </svg>`);
    }

    /**
     * Game controller icon
     */
    static gameController(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 22C8 18 11 15 15 15H35C39 15 42 18 42 22V28C42 32 39 35 35 35H15C11 35 8 32 8 28V22Z" stroke="${color}" stroke-width="3" fill="none"/>
            <circle cx="18" cy="25" r="2" fill="${color}"/>
            <circle cx="32" cy="22" r="2" fill="${color}"/>
            <circle cx="36" cy="26" r="2" fill="${color}"/>
            <line x1="12" y1="25" x2="16" y2="25" stroke="${color}" stroke-width="2.5"/>
            <line x1="14" y1="23" x2="14" y2="27" stroke="${color}" stroke-width="2.5"/>
        </svg>`);
    }

    /**
     * Crown icon - untuk VIP/premium
     */
    static crown(options: IconOptions): string {
        const { color, size = 50 } = options;
        return generateSvg(`<svg width="${size}" height="${size}" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 35L12 15L20 25L25 10L30 25L38 15L42 35H8Z" fill="${color}" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
            <rect x="8" y="35" width="34" height="5" rx="2" fill="${color}"/>
            <circle cx="12" cy="15" r="3" fill="${color}"/>
            <circle cx="25" cy="10" r="3" fill="${color}"/>
            <circle cx="38" cy="15" r="3" fill="${color}"/>
        </svg>`);
    }
}

// Helper function untuk quickly get icon
export function getIcon(name: keyof typeof Icons, color: string, size?: number): string {
    if (typeof Icons[name] !== 'function') {
        throw new Error(`Icon "${name}" not found`);
    }
    return (Icons[name] as any)({ color, size });
}