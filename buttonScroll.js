var scrollUpButton = document.getElementById("scroll-up-button");

// When the user scrolls down 1000px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    scrollUpButton.style.zIndex = "0";
    scrollUpButton.style.display = "block";
    scrollUpButton.classList.add("show");
    scrollUpButton.style.animation = "openScroll 0.6s 1";
    scrollUpButton.style.animationFillMode = "both";
  } else if (document.body.scrollTop < 600 || document.documentElement.scrollTop < 600) {
    scrollUpButton.style.zIndex = "-100";
    scrollUpButton.style.animation = "closeScroll 0.6s 1";
    scrollUpButton.style.animationFillMode = "both";
  } else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
    scrollUpButton.style.display = "none";
    scrollUpButton.classList.remove("show");
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollUpButton.onclick = function() {
    scrollToTop();
  };
  
  function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
    }
  }