const { Classic, ClassicPro, Dynamic, Mini, Upcoming, QueueList, AddedToQueue, Lyrics } = require('sylphacard');
const fs = require('fs');


(async () => {
// Common values
const thumbnailImage = 'https://i.scdn.co/image/ab67616d0000b27359ae8cf65d498afdd5585634';
const backgroundColor = '#2C2F33';
const progressColor = '#5865F2';
const progressBarColor = '#2C2F33';
const startTime = "00:00";
const endTime = "05:40";
const progress = 0;
const nameColor = '#5865F2';
const authorColor = '#B9BBBE';
const title = 'Margaret (feat. leachers)';
const author = 'Lana Del Rey';

// // Test Classic
// const classic = await Classic({
//     thumbnailImage,
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
//     name: title,
//     nameColor,
//     author,
//     authorColor,
//     progress,
//     startTime,
//     endTime,
//     progressColor,
//     progressBarColor,
// })
//     fs.writeFileSync('assets/output-classic.png', classic);
//     console.log('Classic test done.');



// // Test ClassicPro
// const classic_pro = await ClassicPro({
//     thumbnailImage,
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
//     name: title,
//     nameColor,
//     author,
//     authorColor,
//     progress,
//     startTime,
//     endTime,
//     progressColor,
//     progressBarColor,
// })
//     fs.writeFileSync('assets/output-classicpro.png', classic_pro);
//     console.log('Classic and ClassicPro tests done.');



// // Test Dynamic
// const dynamic = await Dynamic({
//     thumbnailImage,
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
//     name: title,
//     nameColor,
//     author,
//     authorColor,
//     progress,
//     progressColor,
//     progressBarColor,
// })
//     fs.writeFileSync('assets/output-dynamic.png', dynamic);
//     console.log('Dynamic test done.');



// // Test Mini
// const mini = await Mini({
//     thumbnailImage,
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
//     menuColor: progressColor,
//     progress,
//     progressColor,
//     progressBarColor,
//     paused: false,
// })
//     fs.writeFileSync('assets/output-mini.png', mini);
//     console.log('Mini test done.');



// // Test Upcoming
// const upcoming = await Upcoming({
//     title,
//     author,
//     thumbnailImage,
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
// })
// fs.writeFileSync('assets/output-upcoming.png',upcoming);
// console.log('Upcoming test done.');



// // Test QueueList
// const queue_list = await QueueList({
//     tracks: [
//         { title: 'Song 1', author: 'Artist 1', thumbnailImage },
//         { title: 'Song 2', author: 'Artist 2', thumbnailImage },
//         { title: 'Song 3', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 4', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 5', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 6', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 7', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 8', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 9', author: 'Artist 3', thumbnailImage },
//         { title: 'Song 10', author: 'Artist 3', thumbnailImage },
//     ],
//     title: 'Queue List',
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
// })
// fs.writeFileSync('assets/output-queue.png', queue_list);
// console.log('QueueList test done.');



// Test AddedToQueue
const addedtoqueue = await AddedToQueue({
    title,
    author,
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
})
    fs.writeFileSync('../assets/output-addedtoqueue.png', addedtoqueue);
    console.log('AddedToQueue test done.');

// // Test Lyrics
// const lyrics = await Lyrics({
//     title,
//     author,
//     thumbnailImage,
//     backgroundColor,
//     backgroundImage: thumbnailImage,
//     imageDarkness: 60,
//     lyrics: `Ditekan dari sgala sisi
// Seringkali hilang arti
// Aku hidup untuk siapa?

// Ku sudah tidak nyaman lagi
// Bermimpi pun tahu diri
// Apa sebaiknya pergi?

// Jika semua bersandar padaku
// Lalu aku bersandar kemana?

// Mengalah
// Walau bukan aku yang salah
// Membisu
// Saat semua sibuk beradu
// Walau tak rela pun ku bantu
// Berdoa ini semua
// Berakhir di aku

// Setiap hari ku mengais
// Harta yang tak ku miliki
// Apa yang aku miliki?

// Jika semua bersandar padaku
// Lalu aku bersandar kemana?

// Mengalah
// Walau bukan aku yang salah
// Membisu
// Saat semua sibuk beradu
// Walau tak rela pun ku bantu
// Berdoa ini semua
// Berakhir di aku
// Berakhir di aku
// Berakhir di aku
// Berakhir di Aku
// Berakhir di Aku

// Walau tak rela pun ku bantu
// Berdoa ini semua
// Berakhir di aku

// Mengalah
// Walau bukan aku yang salah
// Membisu
// Saat semua sibuk beradu
// Walau tak rela pun ku bantu
// Berdoa ini semua
// Berakhir
// Berakhir di Aku
// Berakhir di Aku`,
// })
// fs.writeFileSync('assets/output-lyrics.png', lyrics);
// console.log('Lyrics test done.');

// console.log('All tests completed.');
})();