const close = document.getElementById("close-menu-btn");
const open = document.getElementById("open-menu-btn");
const sidebar = document.getElementById("sidebar");

close.addEventListener("click", closeMenu);
open.addEventListener("click", openMenu)

function closeMenu() {
    sidebar.style.display = "none"   
    console.log("Is this working?")
}

function openMenu() {
    sidebar.style.display = "flex"
    console.log("Is this working?")
}





