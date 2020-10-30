window.onload=document.body.classList.remove("preload");
function show_modal(){ 
    
}
function card_toggle(){
    cardCover=card.getElementsByClassName("card-cover")[0];
    cardContent=card.getElementsByClassName("card-content")[0];
    card.classList.toggle("card-hover");

    if (card.style.height!="600px"){
        card.style.zIndex="100";
        shadow.style.zIndex="99";
        card.style.height="600px";
        card.style.transformOrigin="top";
        card.style.top="50%";
        card.style.left="50%";
        card.style.transform="translate(-50%, -50%) scale(2)";
        shadow.style.backgroundColor="rgba(0,0,0,0.75)";
        cardCover.style.transform="rotatex(180deg)";
        document.body.style.overflow="auto";
    }
    else{ 
        card.style.height="300px";
        card.style.transform="rotate(10deg)";
        card.style.transformOrigin="unset";
        shadow.style.backgroundColor="unset";
        cardCover.style.transform="rotateX(20deg)";
        shadow.style.zIndex="unset";
        setTimeout(function(){
            card.style.zIndex="unset";
        },500);
        document.body.style.overflow="hidden";
    }

    
}


/*MUSIC PLAYER*/
var playingSong="audio/first_date.mp3";

var songTitle = document.getElementById("songTitle");
var barFill = document.getElementById("fill");

var song = new Audio();

window.onload = playSong;


function playSong(){
    song.src = playingSong;
    songTitle.textContent = playingSong.substring(6);
    song.play();
    audio.volume=0.5;
}

function playOrPause(){
    if(song.paused){
        song.play();
    } else{
        song.pause();
    }
}

song.addEventListener('timeupdate',function(){

    var position = song.currentTime / song.duration;
    barFill.style.width = position * 100 + '%';
});


