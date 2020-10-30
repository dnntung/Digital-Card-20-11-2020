var audio=document.getElementById("audio");
audio.play();
audio.volume=0.5;

// Get the modal
const letter_modal = document.getElementById("letter_modal");
const created_modal = document.getElementById("created_modal");

// Close modal
const btnCloseLetterModal = document.getElementById("modal_close_btn");
const btnCloseCreatedModal = document.getElementById("created_modal_closeBtn");

// Get the button that opens the modal
const btnLetterModal = document.getElementById("card_letter");
const btnLetterCoverModal = document.getElementById("card_cover_letter");
const btnCreatemodal = document.getElementById("created_note");

// Card text header, pencil
const cardtext = document.getElementById("card-text-header");
const pencil = document.getElementById("pencil");

// When the user clicks on the button, open the modal
btnLetterModal.onclick = function() {
    letter_modal.style.display = "block";
}

btnCreatemodal.onclick = function() {
    created_modal.style.display = "block";
    btnCreatemodal.style.display = "none";
}




// When the user clicks on the button, close the modal
function closeLetter() {
    btnCloseLetterModal.onclick = function() {
        letter_modal.style.display = "none";
        btnLetterModal.style.transform = "rotate(10deg) scale(1.0)";
        btnLetterModal.style.top = "320px";
        btnLetterModal.style.left = "40%";
        btnLetterCoverModal.style.transform = "rotateX(0deg)";
        btnLetterCoverModal.style.backgroundImage =  'url(images/card-background.jpg)';
        cardtext.style.display = "block";
        pencil.style.display = "block";
    }
}

closeLetter();

function closeNote() {
    btnCloseCreatedModal.onclick = function () {
        created_modal.style.display = "none";
        btnCreatemodal.style.display = "flex";
        btnCreatemodal.style.top = "55%";
    }
}


function noteHover() {
    btnCreatemodal.style.top = "55%";
    closeNote()
}

function noteOutHover() {
    btnCreatemodal.style.top = "40%";
    btnLetterCoverModal.style.transform = "rotateX(0deg)";
}

function letterOpen() {
    btnLetterModal.style.transform = "rotate(0deg) scale(2.0)";
    btnLetterModal.style.top = "110%";
    btnLetterModal.style.left = "25%";
    btnLetterCoverModal.style.transform = "rotateX(180deg)";
    btnLetterCoverModal.style.backgroundImage = 'url("images/modal/background.jpg")';

    // Hide pencil and text from table
    cardtext.style.display = "none";
    pencil.style.display = "none";

}

// Call function


