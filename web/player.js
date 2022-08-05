let display;

let video = document.querySelector('#videoPlayer');

let progressjs;
progressjs = document.querySelector('#progresshtml');

video.ontimeupdate = progressUp; // функция для связи прогресс бара с видосом


function timesp(){
    document.querySelector('#timespan').innerHTML = video.currentTime;
}



// function backed(){
//     document.location.href='main.html';
// };

progressjs.onclick = progressRewind   //вешаю собынике onclick на прогрес бар
            


function progressUp(){
    console.log(video.duration);  // получаем продолжительность видео полную
    console.log(video.currentTime); // получаем текущее время видео
    let a = video.duration;  //присваиваем время видео a
    let b = video.currentTime; // присваиваем текущее время b
    progressjs.value = (100 * b) / a;
    let namespan = document.querySelector('#timespan');
    let strTime = Math.trunc(video.currentTime);
    namespan.innerHTML = strTime;

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
document.querySelector('#start_page').onclick = afterstart;
document.querySelector('#play').onclick = play;
document.querySelector('#stop').onclick = stop;
document.querySelector('#pause').onclick = pause;
document.querySelector('#speed-up').onclick = speedUp;
document.querySelector('#speed-normal').onclick = speedNormal;
document.querySelector('#speed-down').onclick = speedDown;
document.querySelector('#volume').oninput = videoVolume;
document.querySelector('#full-screen').onclick = fullsk;

// function afterstart(){
//     video.play();
// }

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


$(document).ready(function(){           //Супер крутая штука кторая преносит из inputa type="file" в input type='text'
    $('#type_o').change(function(){
        if(this.files[0])
        $('#inText').val(this.files[0].name)
    });
 });



 function but() 
 {
   var reg = document.getElementById("but_add").value;
  
   //let mydiv = document.createElement('div');
   var divmain = document.getElementById("put_1Id");
   var links = 0;
   links = $("[rebest='yes']").length;
   console.log("#type_o" + links);
   //mydiv.id = 'mydiv';
   var divdop = "<div class='put_dop' id='container'>" + 
             "<div class='put_2'><br>"+
             "<label for='type_o' class='label1'> "+
             "<input type='text' class='inpt_1' id='inText" + links + "' name='inText' rebest='yes'/>"+
             "</label>"+
            " <input class='inpt_2' id='inOnDate' type='time'/>"+
             "<input class='inpt_3' id='inTwDate' type='time'/>"+
             "<label>"+
            "<input class='type_o' id='type_o" + links + "' type='file' value='none'  readonly='' name='type_o'/>"+
            "</label>"+
             "<button class='type_d' id='del' rebest='no' name='delnot' onclick='myFunc(this)' ></button></div>"+
             "</div>"
             
           // $("#inText").attr('id', 'inText' + links).appendTo(".label1");
            divmain.innerHTML += divdop;
              
   //document.body.appendChild(mydiv);
   
   $(document).ready(function(){           //Супер крутая штука кторая преносит из inputa type="file" в input type='text'
    $('#type_o' + links).change(function(){
        if(this.files[0])
        $('#inText' + links).val(this.files[0].name)
    });
 });

  
 };