const menu_login = document.querySelector(".navbar-email")
const descktop_menu = document.querySelector(".desktop-menu")
const burmenu = document.querySelector(".menu")
const menuMobile = document.querySelector(".mobile-menu")

menu_login.addEventListener("click", toggleMenu)
burmenu.addEventListener("click", toggleMobileMenu)

function toggleMenu(){
    descktop_menu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive")
}