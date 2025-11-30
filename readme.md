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
        name: 'Margaret (feat. leachers)',
        nameColor: '#FF7A00',
        author: 'Margaret (feat. leachers)',
        authorColor: '#696969',
        startTime: '0:00',
        endTime: '05:40',
        timeColor: '#FF7A00',
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![classic](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Classic.png)
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
        name: 'Margaret (feat. leachers)',
        nameColor: '#FF7A00',
        author: 'Margaret (feat. leachers)',
        authorColor: '#696969',
        startTime: '0:00',
        endTime: '05:40',
        timeColor: '#FF7A00',
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![classicpro](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/ClassicPro.png)
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
        name: 'Margaret (feat. leachers)',
        nameColor: '#FF7A00',
        author: 'Margaret (feat. leachers)',
        authorColor: '#696969',
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![dynamic](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Dynamic.png)
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
![mini](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Mini.png)
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
![Upcoming](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Queue.png)
---

## Queue

```js
(async () => {
    const { QueueList } = require('sylphacard');
    const fs = require('fs');

    const musicard = await QueueList({
        tracks: [
            {
                title: 'Margaret (feat. leachers)',
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
![queue](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Queue.png)
---


## Added to Queue

```js
(async () => {
    const { AddedToQueue } = require('sylphacard');
    const fs = require('fs');

    const musicard = await AddedToQueue({
        title: 'Margaret (feat. leachers)',
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
![addedtoqueue](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/AddedToQueue.png)
---


## Lyrics

```js
(async () => {
    const { Lyrics } = require('sylphacard');
    const fs = require('fs');

    const musicard = await Lyrics({
        title: 'Margaret (feat. leachers)',
        author: 'Idgitaf',
        thumbnailImage: 'https://i.scdn.co/image/ab67616d0000b2734ae1c2813cfa6d10c73f4661',
        message: 'Added to Queue',
        titleColor: '#FFFFFF',
        authorColor: '#FFFFFF',
        messageColor: '#00FF00',
        backgroundColor: '#070707'
        lyrics: `This is a simple song, gonna write it for a friend
My shirt is inside out, I'm messy with the pen
He met Margaret on a rooftop, she was wearin' white
And he was like, "I might be in trouble"
He had flashes of the good life, he was like
"Should I jump off this building now, or do it on the double?"

'Cause, baby, if your love is in trouble
Baby, if your love in trouble
Baby, if your love in trouble

When you know, you know
When you know, you know
It kinda makes me laugh, runnin' down that path
When you're good, it's gold
'Cause when you know, you know

Words aren't my friends
But thеy're red flags, they'rе white knights
They're black eyes and they're blue lies
If you're askin' yourself, "How do you know?"
Then that's your answer, the answer is "No"
You gotta run, gotta run, run, run, run like your head's on fire
Run away like your head is on fire

'Cause, baby, if your love in trouble
Baby, if your love in trouble
Baby, if your love in trouble

When you know, you know
When you know, you know
It kinda makes me laugh, runnin' down that path
When you're good, it's gold
'Cause when you know, you know

And when you're old, you're old
Like Hollywood and me, the diamond on your ring
The soul that you bring to the table
One that makes me sing
In a minor key

'Cause when you know, you know
When you know, you know

So if you don't know, don't give up
'Cause you never know what the new day might bring

Maybe tomorrow you'll know
Maybe tomorrow you'll know
Maybe tomorrow you'll know

I mean, join the party
By the way, the party is December 18
Aight, let's waltz this out, 'cause

'Cause when you know, you know
When you're old, you're old
Like Hollywood and me, the diamond on your ring
The soul that you bring to the table
One that makes me sing
In a minor key (key)

Diamond on your ring
'Cause when you know, you know
When you know, you know`,
    });

    fs.writeFileSync('musicard.png', musicard);
})();
```
---
![lyrics](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Lyrics.png)
---

## Greeting

```js
(async () => {
    const { Greeting } = require('sylphacard');
    const fs = require('fs');

    const greeting = await Greeting({
        type: "welcome",
        username: "John Doe",
        message: "Welcome to our awesome server!",
        memberCount: "1,234",
        avatarImage: "https://avatar.iran.liara.run/public",
        backgroundImage: "https://i.pinimg.com/1200x/fe/ae/ae/feaeae20c78a15c0ff3c1b0e5ce36148.jpg",
        backgroundColor: "#2ecc71",
        primaryColor: "#27ae60",
        textColor: "#FFFFFF",
        imageDarkness: 40
    });

    fs.writeFileSync('greeting.png', greeting);
})();
```
---
![greeting](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/Greeting.png)
---

## GreetingV2

```js
(async () => {
    const { GreetingV2 } = require('sylphacard');
    const fs = require('fs');

    const greetingv2 = await GreetingV2({
        type: "welcome",
        username: "John Doe",
        message: "Welcome to our awesome server!",
        memberCount: "1,234",
        joinedAt: "Jan 15, 2024",
        avatarImage: "https://avatar.iran.liara.run/public",
        backgroundImage: "https://i.pinimg.com/1200x/fe/ae/ae/feaeae20c78a15c0ff3c1b0e5ce36148.jpg",
        backgroundColor: "#2ecc71",
        textColor: "#FFFFFF",
        accentColor: "#00d9ff",
        imageDarkness: 40
    });

    fs.writeFileSync('greetingv2.png', greetingv2);
})();
```
---
![greetingv2](https://raw.githubusercontent.com/SatzzDev/sylpacard/main/assets/GreetingV2.png)
---
