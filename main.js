const menu_login = document.querySelector(".navbar-email")
const descktop_menu = document.querySelector(".desktop-menu")

menu_login.addEventListener("click", toggleMenu)

function toggleMenu(){
    descktop_menu.classList.toggle("inactive")
}