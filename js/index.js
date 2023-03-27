const nav = document.querySelector("header")
const myButton = document.getElementById("myBtn");
window.addEventListener("scroll", e => {
    if (window.scrollY > 20) {
        nav.classList.add("active")
    }
    else {
        nav.classList.remove("active")
    }
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
})
myButton.addEventListener('click', function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
const hamburger = document.querySelector(".menu")
const menu = document.querySelector("nav")
hamburger.addEventListener("click", e => {
    menu.classList.toggle("active");
})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("animated", entry.isIntersecting)
        if (entry.isIntersecting) return observer.unobserve(entry.target)
    })
}, {
    threshold: 1,
    rootMargin: "100px"
})
const animate = document.querySelectorAll(".animate")
animate.forEach((element) => {
    observer.observe(element)
})
const textarea = document.querySelector("#textarea")
textarea.addEventListener("scrollHeightChange", e => {
    console.log(e.target.value)
})

