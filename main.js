// Get the modal
const letter_modal = document.getElementById("letter_modal");
const credit_modal = document.getElementById("credit_modal");

// Close modal
const btnCloseLetterModal = document.getElementById("modal_close_btn");
const btnCloseCreditModal = document.getElementById("credit_modal_closeBtn");

// Get the button that opens the modal
const btnLetterModal = document.getElementById("card_letter");
const btnCreditModal = document.getElementById("credit_note");

// When the user clicks on the button, open the modal
btnLetterModal.onclick = function() {
    letter_modal.style.display = "block";
}


// When the user clicks on the button, close the modal
btnCloseLetterModal.onclick = function() {
    letter_modal.style.display = "none";
}


