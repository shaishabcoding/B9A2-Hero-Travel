let isMenuOpened = false;
const menu = document.getElementById("menu");

function toggleOpenMenu() {
  if (isMenuOpened)
    menu.style.display = "flex"
  else
     menu.style.display = "none"
  isMenuOpened = !isMenuOpened;
}