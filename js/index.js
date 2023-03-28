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

// navbar handler 
const hamburger = document.querySelector(".menu")
const menu = document.querySelector("nav")
hamburger.addEventListener("click", e => {
    menu.classList.toggle("active");
})

// intersection observer scripting 

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("animated", entry.isIntersecting)
        // if (entry.isIntersecting) return observer.unobserve(entry.target)
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
textarea?.addEventListener("keyup", e => {
    textarea.style.height = e.currentTarget.scrollHeight + "px";
})

// hide navigation when click on nav links
const links = document.querySelectorAll("nav ul li")

links.forEach((link) => {
    link.addEventListener('click', e => {
        menu?.classList?.remove("active")
    })
})

// apply filter
const tags = document.querySelectorAll(".tags span")
const filterName = document.querySelector(".filter input")
filterName.onfocus=()=>{
    filterName.value=""
}
const filterBtn = document.querySelector(".filter button")
const projects = document.querySelectorAll(".projects .project")
filterBtn.addEventListener('click', e => {
    let filterValue = filterName.value.trim()
    projects.forEach((project) => {
        let tags = project.querySelectorAll(".tags span")
        let tagsData = []
        tags.forEach((tag) => {
            tagsData.push(tag.textContent)
        })
        if (tagsData.includes(filterValue)) {
            project.style.display = "block"
        }
        else if (filterValue == "all") {
            project.style.display = "block"
        }
        else if (filterValue == "") {
        } else {
            project.style.display = "none"
        }
    })
})

let filteredTags = []
tags.forEach((tag) => {
    filteredTags.push(tag.textContent.trim())
    filteredTags.sort()
})
const newFilterTags = new Set(filteredTags)
// filteredTags=Array.from(newFilterTags)
filteredTags = [...newFilterTags]
const datalist = document.querySelector("datalist")
filteredTags.map((tag) => {
    let option = document.createElement("option")
    option.value = tag
    option.textContent = tag
    datalist.appendChild(option)
})