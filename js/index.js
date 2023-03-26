const nav = document.querySelector("header")
window.addEventListener("scroll", e => {
    if (window.scrollY > 20) {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }
})
const hamburger = document.querySelector(".menu")
const menu = document.querySelector("nav")
hamburger.addEventListener("click", e => {
    menu.classList.toggle("active");
})