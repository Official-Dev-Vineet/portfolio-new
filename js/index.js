"use strict";
const nav = document.querySelector("header"),
  myButton = document.getElementById("myBtn"),
  filterBtn = document.querySelector(".filter button"),
  projects = document.querySelectorAll(".projects .project"),
  hamburger = document.querySelector(".menu"),
  menu = document.querySelector("nav"),
  animate = document.querySelectorAll(".animate"),
  textarea = document.querySelector("textarea"),
  searchResult = document.querySelector("#searchResult"),
  username = "Vineet Singh",
  profile = ["Developer", "Freelancer", "Debugger", "Tester"];
window.addEventListener("load", () => {
  let e = document.querySelector(".loader");
  e.remove();
}),
  window.addEventListener("scroll", (e) => {
    window.scrollY > 20
      ? nav.classList.add("active")
      : nav.classList.remove("active"),
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? (myButton.style.display = "block")
        : (myButton.style.display = "none");
  }),
  myButton.addEventListener("click", () => {
    (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
  }),
  hamburger.addEventListener("click", (e) => {
    menu.classList.toggle("active");
  });
const observer = new IntersectionObserver(
  (e) => {
    e.forEach((e) => {
      e.target.classList.toggle("animated", e.isIntersecting);
    });
  },
  { threshold: 0.5, rootMargin: "100px" }
);
animate.forEach((e) => {
  observer.observe(e);
});
const random = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  links = document.querySelectorAll("nav ul li");
function debounce(e, t) {
  return (
    clearTimeout(null),
    setTimeout(() => {
      e();
    }, t)
  );
}
links.forEach((e) => {
  e.addEventListener("click", (e) => {
    menu?.classList?.remove("active");
  });
});
const tags = document.querySelectorAll(".tags span"),
  filterName = document.querySelector(".filter input");
function filterProject() {
  let e = filterName.value.trim().toLowerCase();
  projects.forEach((t) => {
    let r = t.querySelectorAll(".tags span"),
      l = [];
    r.forEach((e) => {
      l.push(e.textContent);
    });
    let o = l.join(",").toLowerCase();
    o.includes(e)
      ? ((searchResult.textContent = "Here is your project"),
        (t.style.display = "block"))
      : (t.style.display = "none"),
      "all" === e &&
        ((searchResult.textContent = "All projects has been shown"),
        (t.style.display = "block"));
  });
}
filterName.addEventListener("keyup", () => debounce(filterProject, 1e3)),
  (filterName.onfocus = () => {
    filterName.value = "";
  }),
  filterBtn.addEventListener("click", filterProject());
let filteredTags = [];
tags.forEach((e) => {
  filteredTags.push(e.textContent.trim()), filteredTags.sort();
});
const newFilterTags = new Set(filteredTags);
filteredTags = [...newFilterTags];
const datalist = document.querySelector("datalist");
filteredTags.forEach((e) => {
  let t = document.createElement("option");
  (t.value = e), (t.textContent = e), datalist.appendChild(t);
});
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let t = document.querySelector("form"),
    r = new FormData(t),
    l = r.get("clientName").trim(),
    o = r.get("clientEmail").trim(),
    n = r.get("subject").trim(),
    a = r.get("projectDetails").trim();
  function i() {
    let e = new Date();
    window.location.href = `https://wa.me/917983920962?text=Name :${l},%0AEmail :${o}%0A Subject : ${n}%0A Project Idea : ${a}%0A Date : ${e} %0A this is send from Vineet Singh Portfolio and below is the link : %0A ${window.location.href}`;
  }
  l.length > 0 && o.length > 0 && n.length > 0 && a.length > 0
    ? i()
    : alert("Please fill correct details !");
});
const targetedLink = document.querySelectorAll(".btn-group a");
targetedLink.forEach((e) => {
  e.setAttribute("target", "_blank");
});
let color = "hsl(330, 91%, 34%)",
  color2 = "hsl(283, 100%, 27%)";
document.querySelectorAll("#theme ul li span").forEach((e) => {
  (e.style.backgroundColor = `${e.getAttribute("data-color")}`),
    (e.onclick = () => {
      document
        .querySelector(":root")
        .style.setProperty("--primary", e.getAttribute("data-color")),
        document
          .querySelector(":root")
          .style.setProperty(
            "--secondary",
            e.parentNode.nextElementSibling
              ? e.parentNode.nextElementSibling?.children[0].getAttribute(
                  "data-color"
                )
              : "cyan"
          ),
        (color = e.getAttribute("data-color")),
        (color2 = e.parentNode.nextElementSibling
          ? e.parentNode.nextElementSibling?.children[0].getAttribute(
              "data-color"
            )
          : "cyan"),
        document.querySelector("#theme").classList.remove("active");
    });
}),
  (document.querySelector(".theme").onclick = () => {
    document.querySelector("#theme").classList.toggle("active");
  }),
  (document.querySelector("#color").oninput = () => {
    let e = document.querySelector("#color").value;
    document.querySelector(":root").style.setProperty("--secondary", e),
      document.querySelector("#theme").classList.remove("active");
  }),
  tags.forEach((e) => {
    e.onclick = () => {
      (filterName.value = e.textContent), filterProject();
    };
  });
let timer = null;
const msgShower = () => {
  timer = setInterval(() => {
    console.clear();
    let e = profile[Math.floor(Math.random() * profile.length)],
      t = Math.floor(360 * Math.random());
    console.log(
      `%c Vineet Singh : ${e} 
 Console Modify by Vineet Singh`,
      `color:#fff; font-family:duck; padding:10px; background-image:linear-gradient(${t}deg, ${color}, ${color2}); font-size: clamp(1rem, 5vw, 2rem); border-radius:20px;margin:1rem;box-shadow: 0 0 20px ${color}, 0 0 20px ${color2}`
    );
  }, 5e3);
};
let bg = document.querySelector(".bg"),
  timerBg = null;
function backgroundGenerator() {
  bg.innerHTML = "";
  let e = () =>
    `#${Math.floor(16777215 * Math.random())
      .toString(16)
      .padEnd(6, "9")}`;
  for (let t = 1; t < window.innerWidth; t++, t += 100)
    for (let r = 1; r < window.innerHeight; r++, r += 100) {
      let l = document.createElement("span");
      l.classList.add("bgSpan"),
        (l.style.background = e()),
        (l.style.scale = Math.random()),
        bg.appendChild(l);
    }
  let o = document.querySelectorAll(".bg span");
  setInterval(() => {
    o.forEach((t, r) => {
      (t.style.background = e()),
        (t.style.borderRadius = Math.floor(100 * Math.random()) + "%"),
        (t.style.rotate = Math.floor(360 * Math.random()).toString() + "deg");
    });
  }, 6e3);
}
function customCursor() {
  document.addEventListener("mousemove", (e) => {
    e.preventDefault();
    let t = e.clientX,
      r = e.clientY,
      l = document.createElement("span");
    l.setAttribute("class", "cursor"),
      (l.style.left = t + "px"),
      (l.style.top = r + "px"),
      (l.style.border = "1px solid #fff");
    let o = Math.floor(20 * Math.random()) + "px";
    (l.style.height = o),
      (l.style.width = o),
      (l.style.boxShadow = "0 0 10px var(--primary)"),
      (l.style.borderRadius = random(10, 50) + "%"),
      (l.style.position = "absolute"),
      document.body.appendChild(l),
      setTimeout(() => {
        document.body.removeChild(l);
      }, 1500);
  });
}
backgroundGenerator(),
  (window.onresize = () => {
    clearInterval(timerBg),
      clearInterval(timer),
      backgroundGenerator(),
      msgShower();
  });
class TextChanger {
  constructor(e, t, r = 200) {
    (this.text =
      "string" == typeof e ? e : e[Math.floor(Math.random() * e.length)]),
      (this.element = t),
      (this.speed = r),
      (this.current = 0),
      (this.timer = null);
  }
  ChangeText() {
    (this.element.textContent = ""),
      (this.timer = setInterval(() => {
        let e = document.createElement("span");
        (e.textContent = this.text[this.current]),
          (e.style.color = `hsl(${360 * Math.random()}, 100%, 50%)`),
          this.element.appendChild(e),
          this.current++,
          this.current === this.text.length && clearInterval(this.timer);
      }, this.speed));
  }
}
const changer = new TextChanger(
  [
    "Mern Stack Developer",
    "PHP Script Writer",
    "Web Developer",
    "Python Programmer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "App Developer",
    "Animation Developer",
    "Graphics Developer On Web",
    "Progressive Web App Developer",
  ],
  document.querySelector(".typing")
);
changer.ChangeText();

//  ip log on window load
function setCookie(name, value, daysToExpire) {
  const expires = new Date();
  expires.setTime(expires.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/portfolio-new;
}
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
window.addEventListener("load", () => {
  //   get cookie
  const ip = getCookie("ip");
  const url =
    "https://api.ipgeolocation.io/ipgeo?apiKey=4dcc137af7a444ea8ece1f767286efea&ip=";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.ip === ip) {
        //  do nothing
        console.log("same ip");
      } else {
        fetch("https://breakable-fish-crown.cyclic.app/api/ipLogger", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip: data,
            browser: navigator.userAgent,
            os: navigator.platform,
            referer: document.referrer,
            userTime: new Date(),
          }),
        }).then((res) => {
          //  update cookie
          setCookie("ip", data.ip, 1);
        });
      }
    });
});
