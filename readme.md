# Usage

You can use the SylphaCard package in your Discord bots, websites, etc.

## Using Create File

```js
import { Classic } from 'sylphacard';
import fs from 'fs';

//OR

const { Classic } = require('sylphacard');
const fs = require('fs');

Classic({}).then(x => {
    fs.writeFileSync('output.png', x);
});
```

## Using Discord Bot

```js
const { Classic } = require("sylphacard");
const fs = require("fs")

const musicard = await Classic({});

...

return message.channel.send({
    files: [{
        attachment: musicard
    }]
})
```

# Themes

SylphaCard is the #1 canvas library to create music cards with awesome themes.

## Classic

```js
(async () => {
    const { Classic } = require('sylphacard');
    const fs = require('fs');

    const musicard = await Classic({
        thumbnailImage:
            'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        backgroundColor: '#070707',
        progress: 10,
        progressColor: '#FF7A00',
        progressBarColor: '#5F2D00',
        name: 'Berakhir DI Aku',
        nameColor: '#FF7A00',
        author: 'By Idgitaf',
        authorColor: '#696969',
        startTime: '0:00',
        endTime: '4:00',
        timeColor: '#FF7A00',
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![classic](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-classic.png)
---

## Classic Pro

```js
(async () => {
    const { ClassicPro } = require('musicard');
    const fs = require('fs');

    const musicard = await ClassicPro({
        thumbnailImage:
            'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        backgroundColor: '#070707',
        progress: 10,
        progressColor: '#FF7A00',
        progressBarColor: '#5F2D00',
        name: 'Berakhir DI Aku',
        nameColor: '#FF7A00',
        author: 'By Idgitaf',
        authorColor: '#696969',
        startTime: '0:00',
        endTime: '4:00',
        timeColor: '#FF7A00',
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![classicpro](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-classicpro.png)
---

## Dynamic

```js
(async () => {
    const { Dynamic } = require('sylphacard');
    const fs = require('fs');

    const musicard = await Dynamic({
        thumbnailImage:
            'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        backgroundColor: '#070707',
        progress: 10,
        progressColor: '#FF7A00',
        progressBarColor: '#5F2D00',
        name: 'Berakhir DI Aku',
        nameColor: '#FF7A00',
        author: 'By Idgitaf',
        authorColor: '#696969',
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![dynamic](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-dynamic.png)
---

## Mini

```js
(async () => {
    const { Mini } = require('sylphacard');
    const fs = require('fs');

    const musicard = await Mini({
        thumbnailImage:
            'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        backgroundColor: '#070707',
        progress: 10,
        progressColor: '#FF7A00',
        progressBarColor: '#5F2D00',
        menuColor: '#FF7A00',
        paused: false,
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![mini](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-mini.png)
---

## Upcoming

```js
(async () => {
    const { Upcoming } = require('sylphacard');
    const fs = require('fs');

    const musicard = await Upcoming({
        thumbnailImage: 'https://img.youtube.com/vi/lmG0kY9FtRY/maxresdefault.jpg',
        backgroundImage: fs.readFileSync('bg.png'),
        imageDarkness: 70,
        author: 'Testing by UG',
        title: 'Bad Boy (feat. Luana Kiara)',
        trackIndexBackgroundRadii: [10, 20, 30, 40, 50, 60, 70, 80, 80, 100],
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![Upcoming](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-upcoming.png)
---

## Queue

```js
(async () => {
    const { QueueList } = require('sylphacard');
    const fs = require('fs');

    const musicard = await QueueList({
        tracks: [
            {
                title: 'Berakhir DI Aku',
                author: 'Idgitaf',
                thumbnailImage: 'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661'
            },
            {
                title: 'Another Song',
                author: 'Artist Name',
                thumbnailImage: 'https://example.com/image.jpg'
            }
        ],
        title: 'Queue List',
        titleColor: '#FFFFFF',
        backgroundColor: '#070707',
        badgeBg: '#5865F2',
        badgeBorder: '#FFFFFF',
        badgeText: '#FFFFFF'
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![queue](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-queue.png)
---


## Added to Queue

```js
(async () => {
    const { AddedToQueue } = require('sylphacard');
    const fs = require('fs');

    const musicard = await AddedToQueue({
        title: 'Berakhir DI Aku',
        author: 'Idgitaf',
        thumbnailImage: 'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        message: 'Added to Queue',
        titleColor: '#FFFFFF',
        authorColor: '#FFFFFF',
        messageColor: '#00FF00',
        backgroundColor: '#070707'
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![addedtoqueue](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-addedtoqueue.png)
---


## Lyrics

```js
(async () => {
    const { Lyrics } = require('sylphacard');
    const fs = require('fs');

    const musicard = await Lyrics({
        title: 'Berakhir DI Aku',
        author: 'Idgitaf',
        thumbnailImage: 'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        message: 'Added to Queue',
        titleColor: '#FFFFFF',
        authorColor: '#FFFFFF',
        messageColor: '#00FF00',
        backgroundColor: '#070707'
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
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![lyrics](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/output-lyrics.png)
---