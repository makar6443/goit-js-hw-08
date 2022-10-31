import Player from '@vimeo/player';
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
    localStorage.setItem(LOCALSTORAGE_KEY, event.seconds);
};

const getLocalStorageValue = localStorage.getItem(LOCALSTORAGE_KEY); 

if (getLocalStorageValue === null || getLocalStorageValue === undefined) {
    return ;
} else {
    player.setCurrentTime(getLocalStorageValue);
};