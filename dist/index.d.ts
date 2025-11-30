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
type QueueListOptions = {
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
type MostPlayedOptions = {
    /**
     * Title of the most played track
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
     * Play count of the track
     */
    playCount: number;
    /**
     * Color for play count text
     * @default #FF7A00
     */
    playCountColor?: string;
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
type AddedToQueueOptions = {
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
};

declare const Classic: (option: ClassicOption) => Promise<Buffer>;

declare const ClassicPro: (option: ClassicProOption) => Promise<Buffer>;

declare const Dynamic: (option: DynamicOption) => Promise<Buffer>;

declare const Mini: (option: MiniOption) => Promise<Buffer>;

declare const Upcoming: (options: UpcomingOptions) => Promise<Buffer>;

declare const QueueList: (options: QueueListOptions) => Promise<Buffer>;

declare const MostPlayed: (options: MostPlayedOptions) => Promise<Buffer>;

declare const AddedToQueue: (options: AddedToQueueOptions) => Promise<Buffer>;

export { AddedToQueue, type AddedToQueueOptions, Classic, type ClassicOption, ClassicPro, type ClassicProOption, Dynamic, type DynamicOption, Mini, type MiniOption, MostPlayed, type MostPlayedOptions, QueueList, type QueueListOptions, Upcoming, type UpcomingOptions };
