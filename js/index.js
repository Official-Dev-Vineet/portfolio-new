"use strict";
const nav = document.querySelector("header");
const myButton = document.getElementById("myBtn");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 20) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
});
myButton.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// navbar handler
const hamburger = document.querySelector(".menu");
const menu = document.querySelector("nav");
hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

// intersection observer scripting

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("animated", entry.isIntersecting);
      if (entry.isIntersecting) return observer.unobserve(entry.target);
    });
  },
  {
    threshold: 1,
    rootMargin: "100px",
  }
);
const animate = document.querySelectorAll(".animate");
animate.forEach((element) => {
  observer.observe(element);
});
const textarea = document.querySelector("#textarea");
textarea?.addEventListener("keyup", (e) => {
  textarea.style.height = e.currentTarget.scrollHeight + "px";
});

// hide navigation when click on nav links
const links = document.querySelectorAll("nav ul li");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu?.classList?.remove("active");
  });
});

// apply filter
const tags = document.querySelectorAll(".tags span");
const filterName = document.querySelector(".filter input");
filterName.onfocus = () => {
  filterName.value = "";
};
const filterBtn = document.querySelector(".filter button");
const projects = document.querySelectorAll(".projects .project");
filterBtn.addEventListener("click", (e) => {
  let filterValue = filterName.value.trim();
  projects.forEach((project) => {
    let tags = project.querySelectorAll(".tags span");
    let tagsData = [];
    tags.forEach((tag) => {
      tagsData.push(tag.textContent);
    });
    if (tagsData.includes(filterValue)) {
      project.style.display = "block";
    } else if (filterValue == "all") {
      project.style.display = "block";
    } else if (filterValue == "") {
    } else {
      project.style.display = "none";
    }
  });
});

let filteredTags = [];
tags.forEach((tag) => {
  filteredTags.push(tag.textContent.trim());
  filteredTags.sort();
});
const newFilterTags = new Set(filteredTags);
// filteredTags=Array.from(newFilterTags)
filteredTags = [...newFilterTags];
const datalist = document.querySelector("datalist");
filteredTags.map((tag) => {
  let option = document.createElement("option");
  option.value = tag;
  option.textContent = tag;
  datalist.appendChild(option);
});

// form validator
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = document.querySelector("form");
  const data = new FormData(formData);
  const name = data.get("clientName").trim();
  const email = data.get("clientEmail").trim();
  const subject = data.get("subject").trim();
  const projectDetails = data.get("projectDetails").trim();
  name.length > 0 &&
  email.length > 0 &&
  subject.length > 0 &&
  projectDetails.length > 0
    ? submitData()
    : alert("Please fill correct details !");
  function submitData() {
    window.location.href = `https://wa.me/917983920962?text=Name :${name}. Email :${email}. Subject : ${subject}. Project Idea : ${projectDetails}`;
  }
});

// target blank generator
const targetedLink = document.querySelectorAll(".btn-group a");
targetedLink.forEach((link) => {
  link.setAttribute("target", "_blank");
});

// typing js

var typed = new Typed(".typing", {
  strings: ["Developer", "Freelancer", "Debugger"],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true,
});

//theme setup
let color = document.querySelectorAll("#theme ul li span").forEach((e) => {
  e.style.backgroundColor = `${e.getAttribute("data-color")}`;
  e.onclick = () => {
    document
      .querySelector(":root")
      .style.setProperty("--primary", e.getAttribute("data-color"));
    document.querySelector("#theme").classList.remove("active");
  };
});
document.querySelector(".theme").onclick = () => {
  document.querySelector("#theme").classList.toggle("active");
};
document.querySelector("#color").onchange = () => {
  let color = document.querySelector("#color").value;
  document.querySelector(":root").style.setProperty("--secondary", color);
  document.querySelector("#theme").classList.remove("active");
};
