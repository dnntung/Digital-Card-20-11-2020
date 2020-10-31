window.onload=document.body.classList.remove("preload");

function card_toggle(){
    cardCover=card.getElementsByClassName("card-cover")[0];
    cardContent=card.getElementsByClassName("content")[0];
    card.classList.toggle("hover");

    if (card.style.zIndex!="100"){
        shadow.style.zIndex="99";
        card.style.zIndex="100";
        card.style.height="600px";
        card.style.transformOrigin="top";
        card.style.top="20%";
        card.style.left="50%";
        card.style.transform="translate(-50%, -50%) scale(2)";
        card.style.boxShadow="0px 0px 10px 0px rgba(0,0,0, 0.5)";
        shadow.style.height="calc("+(600*2)+"px + "+card.style.top+")";
        shadow.style.opacity="100%";
        cardCover.style.transform="rotatex(180deg)";
        document.body.style.overflow="auto";
    }
    else{ 
        card.style.boxShadow="";
        card.style.top="";
        card.style.left="";
        card.style.height="300px";
        card.style.transform="";
        card.style.transformOrigin="";
        shadow.style.opacity="";
        shadow.style.backgroundColor="";
        shadow.style.position="";
        shadow.style.height="";
        cardCover.style.transform="";
        shadow.style.zIndex="";
        setTimeout(function(){
            card.style.zIndex="";
        },500);
        document.body.style.overflow="hidden";
        
    }
}
function note_toggle(){ 
    noteContent=note.getElementsByClassName("content")[0];
    note.classList.toggle("hover");

    if (note.style.zIndex!="100"){
        note.style.zIndex="100";
        shadow.style.zIndex="99";
        note.style.transformOrigin="center";
        note.style.top="50%";
        note.style.left="50%";
        note.style.transform="translate(-50%, -50%) scale(3)";
        shadow.style.backgroundColor="rgba(0,0,0,0.75)";
        noteContent.style.transform="rotatex(180deg)";
        setTimeout(function(){
            note.style.boxShadow="0px 0px 10px 0px rgba(0,0,0, 0.5)";
        },300);
        
    }
    else{ 
        note.style.boxShadow="";    
        note.style.top="";
        note.style.left="";
        note.style.transform="";
        noteContent.style.transform="";
        note.style.transformOrigin="";
        shadow.style.backgroundColor="";
        shadow.style.zIndex="";
        setTimeout(function(){
            note.style.zIndex="";
        },300);
    }
}
/*MUSIC PLAYER*/
var playingSong="audio/first_date.mp3";

var barFill = document.getElementById("fill");

var song = new Audio();

window.onload = playSong;


function playSong(){
    song.src = playingSong;
    song.play();
    play_btn.innerHTML="||"
    audio.volume=0.5;
}

function playOrPause(){
    if(song.paused){
        play_btn.innerHTML="||"
        song.play();
    } else{
        play_btn.innerHTML="&#9658;"
        song.pause();
    }
}

song.addEventListener('timeupdate',function(){

    var position = song.currentTime / song.duration;
    barFill.style.width = position * 100 + '%';
    if (position==1){ 
        play_btn.innerHTML="&#9658;";
    }
});
