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
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("animated", entry.isIntersecting)
        if(entry.isIntersecting) return observer.unobserve(entry.target)
    })
}, {
    threshold: 1,
    rootMargin:"100px"
})
const animate = document.querySelectorAll(".animate")
animate.forEach((element) => {
    observer.observe(element)
})