// Get the modal
const modal = document.getElementById("letter_modal");

// Get the button that opens the modal
const btnModal = document.getElementById("card_letter");

// When the user clicks on the button, open the modal
btnModal.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}