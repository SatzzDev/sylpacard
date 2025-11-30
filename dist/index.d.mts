import { loadImage } from '@napi-rs/canvas';

type ClassicOption = {
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
type ClassicProOption = {
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
type DynamicOption = {
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
type MiniOption = {
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
type UpcomingOptions = {
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
type QueueListOptions = {
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
type AddedToQueueOptions = {
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
type LyricsOptions = {
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
interface GreetingOption {
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
interface GreetingV2Option {
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

declare const Classic: (option: ClassicOption) => Promise<Buffer>;

declare const ClassicPro: (option: ClassicProOption) => Promise<Buffer>;

declare const Dynamic: (option: DynamicOption) => Promise<Buffer>;

declare const Mini: (option: MiniOption) => Promise<Buffer>;

declare const Upcoming: (options: UpcomingOptions) => Promise<Buffer>;

declare const QueueList: (options: QueueListOptions) => Promise<Buffer>;

declare const AddedToQueue: (options: AddedToQueueOptions) => Promise<Buffer>;

declare const Lyrics: (options: LyricsOptions) => Promise<Buffer>;

declare const Greeting: (option: GreetingOption) => Promise<Buffer>;

declare const GreetingV2: (option: GreetingV2Option) => Promise<Buffer>;

export { AddedToQueue, type AddedToQueueOptions, Classic, type ClassicOption, ClassicPro, type ClassicProOption, Dynamic, type DynamicOption, Greeting, type GreetingOption, GreetingV2, type GreetingV2Option, Lyrics, type LyricsOptions, Mini, type MiniOption, QueueList, type QueueListOptions, Upcoming, type UpcomingOptions };
