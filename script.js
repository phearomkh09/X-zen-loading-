// =======================
// X'zen Roleplay Loading
// =======================

const music = document.getElementById("music");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const tips = document.getElementById("tips");

// Playlist
const songs = [
    "music.mp3",
    "music2.mp3",
    "music3.mp3"
];

let currentSong = 0;

// Tips
const serverTips = [
    "💬 Join our Discord for giveaways!",
    "🚔 Respect all RP rules.",
    "🚗 Drive safely in the city.",
    "💰 Start working to earn money.",
    "🎮 Welcome to X'zen Roleplay!"
];

let tip = 0;

setInterval(() => {
    tip++;
    if (tip >= serverTips.length) tip = 0;
    tips.innerHTML = serverTips[tip];
}, 5000);

// Play / Pause
playBtn.onclick = function () {

    if (music.paused) {
        music.play();
        playBtn.innerHTML = "⏸";
    } else {
        music.pause();
        playBtn.innerHTML = "▶";
    }

};

// Next
nextBtn.onclick = function () {

    currentSong++;

    if (currentSong >= songs.length)
        currentSong = 0;

    music.src = songs[currentSong];
    music.play();

};

// Previous
prevBtn.onclick = function () {

    currentSong--;

    if (currentSong < 0)
        currentSong = songs.length - 1;

    music.src = songs[currentSong];
    music.play();

};

// Auto Play
window.onload = function () {

    music.volume = 0.35;

};

// Animated Loading Text
const loading = document.getElementById("loading");

let dots = 0;

setInterval(() => {

    dots++;

    if (dots > 3) dots = 0;

    loading.innerHTML = "Loading" + ".".repeat(dots);

}, 500);

// Clock
const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "20px";
clock.style.right = "25px";
clock.style.color = "white";
clock.style.fontSize = "20px";
clock.style.textShadow = "0 0 15px red";

document.body.appendChild(clock);

setInterval(() => {

    const d = new Date();

    clock.innerHTML = d.toLocaleTimeString();

},1000);
