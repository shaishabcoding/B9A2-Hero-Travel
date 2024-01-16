let isMenuOpened = false;
const menu = document.getElementById("menu");

function toggleOpenMenu(el) {
  if (!isMenuOpened) {
    menu.style.display = "flex";
    el.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menu.style.display = "none";
    el.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  }
  isMenuOpened = !isMenuOpened;
}
