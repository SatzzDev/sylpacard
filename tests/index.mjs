import { Classic, ClassicPro, Dynamic, Mini, Upcoming, QueueList, MostPlayed, AddedToQueue } from 'musicard';
import fs from 'fs';

// Common values
const thumbnailImage = 'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661';
const backgroundColor = '#2C2F33';
const progressColor = '#5865F2';
const progressBarColor = '#2C2F33';
const progress = 0;
const nameColor = '#5865F2';
const authorColor = '#B9BBBE';
const title = 'Berakhir di Aku - Original Soundtrack From "Home Sweet Loan"';
const author = 'Idgitaf';

// Test Classic
Classic({
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
    name: title,
    nameColor,
    author,
    authorColor,
    progress,
    progressColor,
    progressBarColor,
}).then(x => {
    fs.writeFileSync('../assets/output-classic.png', x);
});

// Test ClassicPro
ClassicPro({
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
    name: title,
    nameColor,
    author,
    authorColor,
    progress,
    progressColor,
    progressBarColor,
}).then(x => {
    fs.writeFileSync('../assets/output-classicpro.png', x);
});

// Test Dynamic
Dynamic({
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
    name: title,
    nameColor,
    author,
    authorColor,
    progress,
    progressColor,
    progressBarColor,
}).then(x => {
    fs.writeFileSync('../assets/output-dynamic.png', x);
});

// Test Mini
Mini({
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
    menuColor: progressColor,
    progress,
    progressColor,
    progressBarColor,
    paused: false,
}).then(x => {
    fs.writeFileSync('../assets/output-mini.png', x);
});

// Test Upcoming
Upcoming({
    title,
    author,
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
}).then(x => {
    fs.writeFileSync('../assets/output-upcoming.png', x);
});

// Test QueueList
QueueList({
    tracks: [
        { title: 'Song 1', author: 'Artist 1', thumbnailImage },
        { title: 'Song 2', author: 'Artist 2', thumbnailImage },
        { title: 'Song 3', author: 'Artist 3', thumbnailImage },
    ],
    title: 'Queue List',
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
}).then(x => {
    fs.writeFileSync('../assets/output-queue.png', x);
});

// Test MostPlayed
MostPlayed({
    title,
    author,
    thumbnailImage,
    playCount: 1000,
    backgroundColor,
    imageDarkness: 60,
}).then(x => {
    fs.writeFileSync('../assets/output-mostplayed.png', x);
});

// Test AddedToQueue
AddedToQueue({
    title,
    author,
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
}).then(x => {
    fs.writeFileSync('../assets/output-addedtoqueue.png', x);
});
