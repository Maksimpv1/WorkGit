let display;

let video = document.querySelector('#videoPlayer');

let progressjs;
progressjs = document.querySelector('#progresshtml');

video.ontimeupdate = progressUp; // функция для связи прогресс бара с видосом



function backed(){
    document.location.href='main.html';
};

progressjs.onclick = progressRewind   //вешаю собынике onclick на прогрес бар
            


function progressUp(){
    console.log(video.duration);  // получаем продолжительность видео полную
    console.log(video.currentTime); // получаем текущее время видео
    let a = video.duration;  //присваиваем время видео a
    let b = video.currentTime; // присваиваем текущее время b
    progressjs.value = (100 * b) / a;
}

function progressRewind(){
    let progresswidth = this.offsetWidth;   //возвращает ширину элемента
    console.log(progresswidth);
    let progressPosition = event.offsetX;  //получаем конкретную координату на элементе
    console.log(progressPosition);
    this.value = (100 * progressPosition)/ progresswidth;
    video.pause();
    video.currentTime = video.duration * (progressPosition/progresswidth); // сложно, получаем текущее время по нажатию
    video.play();
}
document.querySelector('#play').onclick = play;
document.querySelector('#stop').onclick = stop;
document.querySelector('#pause').onclick = pause;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#volume').oninput = videoVolume;
document.querySelector('#full-screen').onclick = fullsk;

function fullsk(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }else if (video.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }else if (video.webkitRequestFullScreen){
        video.webkitRequestFullScreen();
    }else if (video.msRequestFullScreen){
        video.msRequestFullScreen();
    }
}

function play(){
    video.play();

};

function stop(){
    video.pause();
    video.currentTime = 0; //Сброс времени

};

function pause(){
    video.pause();

};

function speedUp(){
    video.play();
    video.playbackRate = 2;

};

function speedDown(){
    video.play();
    video.playbackRate = 0.5;

};

function speedNormal(){
    video.play();
    video.playbackRate = 1;

};


function videoVolume() {
    let v = this.value;
    video.volume = v / 100;
}; 