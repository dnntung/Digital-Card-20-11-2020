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
const btnCreatemodal = document.getElementById("created_note");

// When the user clicks on the button, open the modal
btnLetterModal.onclick = function() {
    letter_modal.style.display = "block";
}

btnCreatemodal.onclick = function() {
    created_modal.style.display = "block";
    btnCreatemodal.style.display = "none";
    const id = setInterval(frame,5);
    function frame() {

    }
}


// When the user clicks on the button, close the modal
btnCloseLetterModal.onclick = function() {
    letter_modal.style.display = "none";
}



function noteHover() {
    btnCreatemodal.style.top = "45%";
    btnCloseCreatedModal.onclick = function () {
        created_modal.style.display = "none";
        btnCreatemodal.style.display = "flex";
        btnCreatemodal.style.top = "45%";
    }


}

function noteOutHover() {
    btnCreatemodal.style.top = "40%";
}

