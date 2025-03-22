function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");// Show/hide the menu
    icon.classList.toggle("open"); // Change the icon animation
}