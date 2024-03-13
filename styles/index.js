let burGer = document.querySelector(".humber");
let allNav = document.querySelector(".header");


burGer.addEventListener("click", ()=>{
    document.body.style.backgroundColor= 'olive';

    allNav.classList.toggle('header-active')
})