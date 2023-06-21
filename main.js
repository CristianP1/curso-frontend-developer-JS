const menu_login = document.querySelector(".navbar-email")
const descktop_menu = document.querySelector(".desktop-menu")
const burmenu = document.querySelector(".menu")
const menuMobile = document.querySelector(".mobile-menu")
const salecar = document.querySelector(".navbar-shopping-cart")
const cardetail = document.querySelector(".product-detail")

menu_login.addEventListener("click", toggleMenu)
burmenu.addEventListener("click", toggleMobileMenu)
salecar.addEventListener("click", toggleSaleCar)

//FUNCION DE MENU DE ACCESO "LOGIN"
function toggleMenu() {
    const cardetailOpen = !cardetail.classList.contains("inactive")
    
    if (cardetailOpen) {
        cardetail.classList.add("inactive")    
    }

    descktop_menu.classList.toggle("inactive")

}

// FUNCION PARA EL MENU "HAMBURGUESA DE CELULAR"
function toggleMobileMenu() {

    const cardetailOpen = !cardetail.classList.contains("inactive")

    if (cardetailOpen) {
     cardetail.classList.add("inactive")   
    }

    menuMobile.classList.toggle("inactive")
}

// FUNCION DEL CARRO DE COMPRAS
function toggleSaleCar() {
    const isMenuMobileClose = menuMobile.classList.contains("inactive")
    const isdescktop_menuClose = descktop_menu.classList.contains("inactive")

    if (!isMenuMobileClose || !isdescktop_menuClose) {
        menuMobile.classList.add("inactive")
        descktop_menu.classList.add("inactive")
    }

    cardetail.classList.toggle("inactive")
}