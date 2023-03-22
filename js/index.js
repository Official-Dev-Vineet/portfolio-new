const nav=document.querySelector("header")
window.addEventListener("scroll",e=>{
    if(window.scrollY > 20){
        nav.classList.add("active")
    }
    else{
        nav.classList.remove("active")
    }
})
