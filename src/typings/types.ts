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
    /**
     * Title of the track
     * Title greater than 18 characters will not be displayed (will be splitted)
     */
    title: string;

    /**
     * Color For the Track Title
     * @default #FFFFFF(White)
     */
    titleColor?: string;

    /**
     * Author of the track
     * text provided greeter then 19 characters will be splitted/not displayed
     */
    author: string;

    /**
     * Color For the Track's Author
     * @default #FFFFFF(White)
     */
    authorColor?: string;

    /**
     * Thumbnail of the track (if none specified Default thumbnail will be displayed)
     */
    thumbnailImage?: Parameters<typeof loadImage>[0];

    /**
     * Index of the track to be displayed
     * @default 1
     */
    trackIndex?: number;

    /**
     * Color For the track's Index
     * @default #FFFFFF(White)
     */
    trackIndexTextColor?: string;

    /**
     * Background color for the Track's Index.
     * @default #FFFFFF(White)
     */
    trackIndexBackgroundColor?: string;

    /**
     * Background radii(radius) for the Track's Index
     * @default 10
     */

    trackIndexBackgroundRadii?: number | number[];

    /**
     * Background Color
     * @default #070707
     */
    backgroundColor?: string;

    /**
     * Background Image
     * @optional
     */
    backgroundImage?: Parameters<typeof loadImage>[0];

    /**
     * Darkness for the background Image.
     */
    imageDarkness?: number;
};

export type QueueListOptions = {
    /**
     * List of tracks in the queue
     */
    tracks: Array<{
        title: string;
        author: string;
        thumbnailImage?: Parameters<typeof loadImage>[0];
    }>;

    /**
     * Title for the queue list
     * @default "Queue List"
     */
    title?: string;

    /**
     * Color for the title
     * @default #FFFFFF
     */
    titleColor?: string;

    /**
     * Background Color
     * @default #070707
     */
    backgroundColor?: string;

    /**
     * Background Image
     * @optional
     */
    backgroundImage?: Parameters<typeof loadImage>[0];

    /**
     * Darkness for the background Image.
     */
    imageDarkness?: number;
};



export type AddedToQueueOptions = {
    /**
     * Title of the track added to queue
     */
    title: string;

    /**
     * Color For the Track Title
     * @default #FFFFFF(White)
     */
    titleColor?: string;

    /**
     * Author of the track
     */
    author: string;

    /**
     * Color For the Track's Author
     * @default #FFFFFF(White)
     */
    authorColor?: string;

    /**
     * Thumbnail of the track
     */
    thumbnailImage?: Parameters<typeof loadImage>[0];

    /**
     * Message to display
     * @default "Added to Queue"
     */
    message?: string;

    /**
     * Color for the message
     * @default #00FF00
     */
    messageColor?: string;

    /**
     * Background Color
     * @default #070707
     */
    backgroundColor?: string;

    /**
     * Background Image
     * @optional
     */
    backgroundImage?: Parameters<typeof loadImage>[0];

    /**
     * Darkness for the background Image.
     */
    imageDarkness?: number;
    /**
     * Badge Background Color
     * @default #ffffff33
     */
    badgeBg?: string;
    /**
     * Badge Border Color
     * @default #ffffff55
     * /
     * Badge Text Color
     * @default #fff
     */
    badgeText?: string;
    badgeBorder?: string;
    
};

export type LyricsOptions = {
    /**
     * Title of the track
     */
    title: string;

    /**
     * Color For the Track Title
     * @default #FFFFFF(White)
     */
    titleColor?: string;

    /**
     * Author of the track
     */
    author: string;

    /**
     * Color For the Track's Author
     * @default #FFFFFF(White)
     */
    authorColor?: string;

    /**
     * Thumbnail of the track
     */
    thumbnailImage?: Parameters<typeof loadImage>[0];

    /**
     * Lyrics of the track
     */
    lyrics: string;

    /**
     * Color for the lyrics
     * @default #FFFFFF(White)
     */
    lyricsColor?: string;

    /**
     * Background Color
     * @default #070707
     */
    backgroundColor?: string;

    /**
     * Background Image
     * @optional
     */
    backgroundImage?: Parameters<typeof loadImage>[0];

    /**
     * Darkness for the background Image.
     */
    imageDarkness?: number;
};
