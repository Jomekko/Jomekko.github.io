function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (!menu || !icon) {
        return;
    }

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    icon.setAttribute("aria-expanded", menu.classList.contains("open"));
    icon.setAttribute(
        "aria-label",
        menu.classList.contains("open") ? "Close navigation menu" : "Open navigation menu"
    );
}
