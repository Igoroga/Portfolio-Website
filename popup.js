let modal = document.getElementById("popup-modal");
let gridPortfolio = document.querySelectorAll(".gridPortfolio")
let contentP = document.querySelectorAll(".contentP")
let modalcontent = document.querySelector(".modal-content")

// Get the button that opens the modal
let btn = document.getElementById("open-modal-button");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close-button")[0];

let openModal = function (num) {
    gridPortfolio[num].onclick = function () {
        
        document.body.style.overflow = "hidden";
        modal.style.display = "block";
        contentP[num].style.display = "block";
        modalcontent.style.overflowY = "scroll";
        modalcontent.scrollTo(0, 0);
    }
}

// // When the user clicks on <span> (x), close the modal

function resetModalScroll() {
    modalcontent.scrollTop = 0;
}

span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    for (let i = 0; i < contentP.length; i++) {
    contentP[i].style.display = "none";
    }
}


// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event, num) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        for (let i = 0; i < contentP.length; i++) {
        contentP[i].style.display = "none";
        }
    }
}

for (let i = 0; i < gridPortfolio.length; i++) {
    openModal(i);
}
