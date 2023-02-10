
let theme = document.querySelector('.theme')
let dark1 = document.querySelectorAll('.darkA')
let dark2 = document.querySelectorAll('.darkB')

theme.onclick = function() {
for (let i=0; i<dark1.length; i++){
  dark1[i].classList.toggle("dark1")
}
for (let i=0; i<dark1.length; i++){
  dark2[i].classList.toggle("dark2")
}
}

console.log(dark1[0])