let hoverY = document.querySelectorAll('.hoverY')
let before = document.querySelectorAll('.before')

console.log(before)

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
