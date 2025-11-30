import type { loadImage } from "@napi-rs/canvas";

export type ClassicOption = {
    thumbnailImage?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    imageDarkness?: number;
    progress?: number;
    progressColor?: string;
    progressBarColor?: string;
    name?: string;
    nameColor?: string;
    author?: string;
    authorColor?: string;
    startTime?: string;
    endTime?: string;
    timeColor?: string;
};

export type ClassicProOption = {
    thumbnailImage?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    imageDarkness?: number;
    progress?: number;
    progressColor?: string;
    progressBarColor?: string;
    name?: string;
    nameColor?: string;
    author?: string;
    authorColor?: string;
    startTime?: string;
    endTime?: string;
    timeColor?: string;
};

export type DynamicOption = {
    thumbnailImage?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    imageDarkness?: number;
    progress?: number;
    progressColor?: string;
    progressBarColor?: string;
    name?: string;
    nameColor?: string;
    author?: string;
    authorColor?: string;
};

export type MiniOption = {
    thumbnailImage: string;
    backgroundColor: string;
    backgroundImage?: string;
    imageDarkness?: number;
    menuColor: string;
    progress: number;
    progressColor: string;
    progressBarColor: string;
    paused: boolean;
};

export type UpcomingOptions = {
    title: string;
    titleColor?: string;
    author: string;
    authorColor?: string;
    thumbnailImage?: Parameters<typeof loadImage>[0];
    trackIndex?: number;
    trackIndexTextColor?: string;
    trackIndexBackgroundColor?: string;
    trackIndexBackgroundRadii?: number | number[];
    backgroundColor?: string;
    backgroundImage?: Parameters<typeof loadImage>[0];
    imageDarkness?: number;
};

export type QueueListOptions = {
    tracks: Array<{
        title: string;
        author: string;
        thumbnailImage?: Parameters<typeof loadImage>[0];
    }>;
    title?: string;
    titleColor?: string;
    backgroundColor?: string;
    backgroundImage?: Parameters<typeof loadImage>[0];
    imageDarkness?: number;
    badgeBg?: string;
    badgeBorder?: string;
    badgeText?: string;
};



export type AddedToQueueOptions = {
    title: string;
    titleColor?: string;
    author: string;
    authorColor?: string;
    thumbnailImage?: Parameters<typeof loadImage>[0];
    message?: string;
    messageColor?: string;
    backgroundColor?: string;
    backgroundImage?: Parameters<typeof loadImage>[0];
    imageDarkness?: number;
    badgeBg?: string;
    badgeText?: string;
    badgeBorder?: string;

};

export type LyricsOptions = {
    title: string;
    titleColor?: string;
    author: string;
    authorColor?: string;
    thumbnailImage?: Parameters<typeof loadImage>[0];
    lyrics: string;
    lyricsColor?: string;
    backgroundColor?: string;
    backgroundImage?: Parameters<typeof loadImage>[0];
    imageDarkness?: number;
};

export interface GreetingOption {
    type: "welcome" | "goodbye";
    username: string;
    message?: string;
    memberCount?: string;
    avatarImage?: string | Buffer;
    backgroundImage?: string | Buffer;
    backgroundColor?: string;
    primaryColor?: string;
    textColor?: string;
    secondaryTextColor?: string;
    accentColor?: string;
    imageDarkness?: number;
}

export interface GreetingV2Option {
    type: "welcome" | "goodbye";
    username: string;
    message?: string;
    memberCount?: string;
    joinedAt?: string;
    avatarImage?: string | Buffer;
    backgroundImage?: string | Buffer;
    backgroundColor?: string;
    primaryColor?: string;
    textColor?: string;
    secondaryTextColor?: string;
    accentColor?: string;
    imageDarkness?: number;
}