// Navbar shadow on scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#0f172a";
        navbar.style.padding = "15px";
    }

    else {
        navbar.style.background = "transparent";
    }

});