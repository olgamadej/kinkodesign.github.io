var toggleStatus = 1;
function toggleMenu() {
    if (toggleStatus == 1) {
        document.getElementById("menu").style.left = "-10vw";
        document.getElementById("menu").style.opacity = 0;
        toggleStatus = 0;
    } else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0";
        document.getElementById("menu").style.opacity = 1;
        toggleStatus =  1;
    }
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});