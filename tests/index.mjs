import { Classic, ClassicPro, Dynamic, Mini, Upcoming, QueueList, AddedToQueue, Lyrics, Greeting, GreetingV2 } from 'sylphacard';
import fs from 'fs';

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
    fs.writeFileSync('../assets/Classic.png', x);
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
    fs.writeFileSync('../assets/ClassicPro.png', x);
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
    fs.writeFileSync('../assets/Dynamic.png', x);
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
    fs.writeFileSync('../assets/Mini.png', x);
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
    fs.writeFileSync('../assets/Upcoming.png', x);
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
    fs.writeFileSync('../assets/Queue.png', x);
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
    fs.writeFileSync('../assets/AddedToQueue.png', x);
});

// Test Lyrics
Lyrics({
    title,
    author,
    thumbnailImage,
    backgroundColor,
    backgroundImage: thumbnailImage,
    imageDarkness: 60,
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
}).then(x => {
    fs.writeFileSync('../assets/Lyrics.png', x);
});

// Test Welcome
await Greeting({
    type: "welcome",
    username: "John Doe",
    message: "Welcome to our awesome server!",
    memberCount: "1,234",
    avatarImage: "https://avatar.iran.liara.run/public",
    backgroundImage: "https://i.pinimg.com/1200x/fe/ae/ae/feaeae20c78a15c0ff3c1b0e5ce36148.jpg",
}).then(x => {
    fs.writeFileSync('../assets/Greeting.png', x);
})

// Test Welcome
await GreetingV2({
    type: "welcome",
    username: "John Doe",
    message: "Glad to have you!",
    memberCount: "1,234",
    joinedAt: "Dec 1, 2024",
    avatarImage: "https://avatar.iran.liara.run/public",
    backgroundImage: "https://i.pinimg.com/1200x/fe/ae/ae/feaeae20c78a15c0ff3c1b0e5ce36148.jpg",
}).then(x => {
    fs.writeFileSync('../assets/GreetingV2.png', x);
})

console.log('All tests completed.');
