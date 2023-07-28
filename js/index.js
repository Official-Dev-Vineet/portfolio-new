"use strict";
const nav = document.querySelector("header");
const myButton = document.getElementById("myBtn");
const filterBtn = document.querySelector(".filter button");
const projects = document.querySelectorAll(".projects .project");
const hamburger = document.querySelector(".menu");
const menu = document.querySelector("nav");
const animate = document.querySelectorAll(".animate");
const textarea = document.querySelector("textarea");
const searchResult = document.querySelector("#searchResult");
const username = "Vineet Singh";
const profile = ["Developer", "Freelancer", "Debugger", "Tester"];

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
myButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// navbar handler
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
    threshold: 0.5,
    rootMargin: "100px",
  }
);
animate.forEach((element) => {
  observer.observe(element);
});

// hide navigation when click on nav links
const links = document.querySelectorAll("nav ul li");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    menu?.classList?.remove("active");
  });
});

function debounce(func, wait) {
  let timer = null;
  clearTimeout(timer);
  return (timer = setTimeout(() => {
    func();
  }, wait));
}
// apply filter
const tags = document.querySelectorAll(".tags span");
const filterName = document.querySelector(".filter input");
filterName.addEventListener("keyup", () => debounce(filterProject, 1000));
filterName.onfocus = () => {
  filterName.value = "";
};

// filter function call
filterBtn.addEventListener("click", filterProject());

// filter function
function filterProject() {
  let filterValue = filterName.value.trim().toLowerCase();
  projects.forEach((project) => {
    let tags = project.querySelectorAll(".tags span");
    let tagsData = [];
    tags.forEach((tag) => {
      tagsData.push(tag.textContent);
    });
    const tagString = tagsData.join(",").toLowerCase();
    if (tagString.includes(filterValue)) {
      searchResult.textContent = "Here is your project";
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
    if (filterValue === "all") {
      searchResult.textContent = "All projects has been shown";
      project.style.display = "block";
    }
  });
}
// dynamic generate new and old tags and append it to input data list
let filteredTags = [];
tags.forEach((tag) => {
  filteredTags.push(tag.textContent.trim());
  filteredTags.sort();
});
const newFilterTags = new Set(filteredTags);
// filteredTags=Array.from(newFilterTags)
filteredTags = [...newFilterTags];
const datalist = document.querySelector("datalist");
filteredTags.forEach((tag) => {
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

  // submit data to a whatsApp number
  function submitData() {
    const date = new Date();
    window.location.href = `https://wa.me/917983920962?text=Name :${name},%0AEmail :${email}%0A Subject : ${subject}%0A Project Idea : ${projectDetails}%0A Date : ${date} %0A this is send from Vineet Singh Portfolio and below is the link : %0A ${window.location.href}`;
  }
});

// target blank generator
const targetedLink = document.querySelectorAll(".btn-group a");
targetedLink.forEach((link) => {
  link.setAttribute("target", "_blank");
});

// typing js
var typed = new Typed(".typing", {
  strings: profile,
  typeSpeed: 200,
  backSpeed: 100,
  loop: true,
});

//theme setup
// primary color generator
let color = "hsl(330, 91%, 34%)";
let color2 = "hsl(283, 100%, 27%)";
document.querySelectorAll("#theme ul li span").forEach((e) => {
  e.style.backgroundColor = `${e.getAttribute("data-color")}`;
  e.onclick = () => {
    document
      .querySelector(":root")
      .style.setProperty("--primary", e.getAttribute("data-color"));
    document
      .querySelector(":root")
      .style.setProperty(
        "--secondary",
        e.parentNode.nextElementSibling
          ? e.parentNode.nextElementSibling?.children[0].getAttribute(
              "data-color"
            )
          : "cyan"
      );

    color = e.getAttribute("data-color");
    color2 = e.parentNode.nextElementSibling
      ? e.parentNode.nextElementSibling?.children[0].getAttribute("data-color")
      : "cyan";
    document.querySelector("#theme").classList.remove("active");
  };
});
document.querySelector(".theme").onclick = () => {
  document.querySelector("#theme").classList.toggle("active");
};
// secondary color generator
document.querySelector("#color").oninput = () => {
  let color = document.querySelector("#color").value;
  document.querySelector(":root").style.setProperty("--secondary", color);
  document.querySelector("#theme").classList.remove("active");
};

tags.forEach((tag) => {
  tag.onclick = () => {
    filterName.value = tag.textContent;
    filterProject();
  };
});
let timer = null;
const msgShower = () => {
  timer = setInterval(() => {
    console.clear();
    let msg = profile[Math.floor(Math.random() * profile.length)];
    let angle = Math.floor(Math.random() * 360);
    console.log(
      `%c ${username} : ${msg} \n Console Modify by Vineet Singh`,
      `color:#fff; font-family:duck; padding:10px; background-image:linear-gradient(${angle}deg, ${color}, ${color2}); font-size: clamp(1rem, 5vw, 2rem); border-radius:20px;margin:1rem;box-shadow: 0 0 20px ${color}, 0 0 20px ${color2}`
    );
  }, 5000);
};
msgShower();

// background animation generator

function backgroundGenerator() {
  const color = () => {
    var color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    return color;
  };
  let bg = document.querySelector(".bg");
  for (let i = 1; i < window.innerWidth; i++, i += 100) {
    for (let j = 1; j < window.innerHeight; j++, j += 100) {
      let span = document.createElement("span");
      span.style.background = color();
      span.style.borderRadius =
        Math.floor(Math.random() * 0xff).toString(16) + "%";
      span.style.scale = Math.random();
      bg.appendChild(span);
    }
  }
  let span = document.querySelectorAll(".bg span");
  setInterval(() => {
    span.forEach((element, index) => {
      element.style.background = color();
      element.style.borderRadius =
        Math.floor(Math.random() * 0xff).toString(16) + "%";
      element.style.scale = Math.random() * 2;
      element.style.opacity = Math.random();

      element.style.rotate = Math.floor(Math.random() * 360).toString() + "deg";
    });
  }, 3000);
}
document.body.addEventListener("orientationchange", backgroundGenerator());
window.addEventListener("resize", backgroundGenerator());
