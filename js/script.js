
// Hamburger Menu //

function openNav() {
    document.getElementById('navigation').style.width = "100%";
    document.getElementById('closebtn').style.display = "block";
    document.getElementById('menu-btn').style.display = "none";
}

function closeNav() {
    document.getElementById('navigation').style.width = "0";
    document.getElementById('closebtn').style.display = "none";
    document.getElementById('menu-btn').style.display = "block";
}