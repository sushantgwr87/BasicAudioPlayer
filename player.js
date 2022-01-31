const song = document.querySelector('#song'); // audio object
const songArtist = document.querySelector('.song-artist'); // element where track artist appears
const songTitle = document.querySelector('.song-title'); // element where track title appears

songIndex = 0;
var songs = ['./assets/Lover.mp3', './assets/BURNS feat Maluma & Rae Sremmurd - Hands On Me.mp3', './assets/Crank It Up (Ft. Akon).mp3', './assets/Barbaadiyan.mp3', './assets/Are You Lonely (feat. ISÁK).mp3']; // object storing paths for audio objects
var songArtists = ['Diljit Dosanjh', 'Maluma & Rae Sremmurd', 'Akon', 'Sachet Tandon', 'Alan Walker' ]; // object storing track artists
var songTitles = ["Lover", "Hands On Me", "Crank It Up", "Barbaadiyan", "Are You Lonely"]; // object storing track titles
// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song');
        song.play();
        playing = false;
    } else {
        song.pause();
        playing = true;
    }
}

// automatically play the next song at the end of the audio object's duration
song.addEventListener('ended', function(){
    nextSong();
});

// function where songIndex is incremented, song changes to next index value, and playPause() runs to play next track 
function nextSong() {
    songIndex++;
    if (songIndex > songs.length-1) {
        songIndex = 0;
    };
    song.src = songs[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}

// function where songIndex is decremented, song changes to previous index value, and playPause() runs to play previous track 
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 1;
    };
    song.src = songs[songIndex];

    songArtist.innerHTML = songArtists[songIndex];
    songTitle.innerHTML = songTitles[songIndex];
    playing = true;
    playPause();
}