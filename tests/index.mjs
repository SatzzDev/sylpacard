import { Classic, ClassicPro, Dynamic, Mini, Upcoming, QueueList, AddedToQueue, Lyrics } from 'musicard';
import fs from 'fs';

// Common values
const thumbnailImage = 'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661';
const backgroundColor = '#2C2F33';
const progressColor = '#5865F2';
const progressBarColor = '#2C2F33';
const startTime = "00:00";
const endTime = "03:56";
const progress = 0;
const nameColor = '#5865F2';
const authorColor = '#B9BBBE';
const title = 'Berakhir di Aku';
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
    startTime,
    endTime,
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
    startTime,
    endTime,
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
        { title: 'Song 4', author: 'Artist 3', thumbnailImage },
        { title: 'Song 5', author: 'Artist 3', thumbnailImage },
        { title: 'Song 6', author: 'Artist 3', thumbnailImage },
        { title: 'Song 7', author: 'Artist 3', thumbnailImage },
        { title: 'Song 8', author: 'Artist 3', thumbnailImage },
        { title: 'Song 9', author: 'Artist 3', thumbnailImage },
        { title: 'Song 10', author: 'Artist 3', thumbnailImage },
    ],
    title: 'Queue List',
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
}).then(x => {
    fs.writeFileSync('../assets/output-queue.png', x);
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

// Test Lyrics
Lyrics({
    title,
    author,
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
    lyrics: `Ditekan dari sgala sisi
Seringkali hilang arti
Aku hidup untuk siapa?

Ku sudah tidak nyaman lagi
Bermimpi pun tahu diri
Apa sebaiknya pergi?

Jika semua bersandar padaku
Lalu aku bersandar kemana?

Mengalah
Walau bukan aku yang salah
Membisu
Saat semua sibuk beradu
Walau tak rela pun ku bantu
Berdoa ini semua
Berakhir di aku

Setiap hari ku mengais
Harta yang tak ku miliki
Apa yang aku miliki?

Jika semua bersandar padaku
Lalu aku bersandar kemana?

Mengalah
Walau bukan aku yang salah
Membisu
Saat semua sibuk beradu
Walau tak rela pun ku bantu
Berdoa ini semua
Berakhir di aku
Berakhir di aku
Berakhir di aku
Berakhir di Aku
Berakhir di Aku

Walau tak rela pun ku bantu
Berdoa ini semua
Berakhir di aku

Mengalah
Walau bukan aku yang salah
Membisu
Saat semua sibuk beradu
Walau tak rela pun ku bantu
Berdoa ini semua
Berakhir
Berakhir di Aku
Berakhir di Aku`,
}).then(x => {
    fs.writeFileSync('../assets/output-lyrics.png', x);
});
console.log('All tests completed.');
