let hoverY = document.querySelectorAll('.hoverY')
let before = document.querySelectorAll('.before')

var addOver = function (hoverElement, x) {
hoverElement.addEventListener("mouseover", function() {
  before[x].style.animation = "scale 0.6s 1";
  before[x].style.animationFillMode = "both";
  before[x].style.visibility = "visible";
  });

hoverElement.addEventListener("mouseout", function() {
  before[x].style.animation = "";
  before[x].style.visibility = "hidden";
});
}

for (let i=0; i<hoverY.length;i++){
addOver(hoverY[i],i)
}

// -------------------------------------------------------------------------
//           Navigation

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

let buttonContactJs = document.querySelectorAll('.buttonContactJs')
let contact = document.querySelectorAll('.article8')

var targetElement = document.getElementById("target-element");

//          Button Navigation

let scrollServ = document.getElementById("scroll-serv");
let targetServ = document.getElementById("targetServ");

let scrollEdu = document.getElementById("scroll-Edu");
let targetEdu = document.getElementById("targetEdu");

let scrollPortfolio = document.getElementById("scroll-Portfolio");
let targetPortfolio = document.getElementById("targetPortfolio");

console.log(scrollServ)
scrollServ.onclick = function() {
  smoothScrollToElement(targetServ);
  };

  scrollEdu.onclick = function() {
  smoothScrollToElement(targetEdu);
  };

  scrollPortfolio.onclick = function() {
  smoothScrollToElement(targetPortfolio);
  };


scrollUpButton.onclick = function() {
  smoothScrollToElement(targetTop);
  };



let scrollCont = function(ttt){
ttt.onclick = function() {
  smoothScrollToElement(targetElement);
}
};

  function smoothScrollToElement(element, tolerance = 30) {
    var currentScrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var elementTop = element.offsetTop;
    var distanceY = elementTop - currentScrollY;
    if (Math.abs(distanceY) > tolerance) {
      distanceY = distanceY / 20;
      window.scrollTo(0, currentScrollY + distanceY);
      requestAnimationFrame(function() {
        smoothScrollToElement(element, tolerance);
      });
    }
  }

for (let i=0; i<buttonContactJs.length;i++){
  scrollCont(buttonContactJs[i])
  }

  
