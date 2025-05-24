// HEADER
let topHeader = document.querySelector('.top')
let headerUpper = document.getElementById('header-upper')
let crossHeader = document.querySelector(".cross i")
let header = document.querySelector("header")
let body = document.querySelector("body")
// MEGA MENU
let environmentLi = document.querySelector(".header-li")
let menuLi = document.querySelectorAll(".header-li ul li")
let megaMenu = document.querySelector('.all-megaMenu')

// TOP HEADER ANIMATION
topHeader.addEventListener("click", (event)=> {
    topHeader.classList.add("deactive")
    headerUpper.classList.remove('heaer-downer')
    headerUpper.classList.add('header-upper') 
})

crossHeader.addEventListener("click", (event)=> {
    topHeader.classList.remove("deactive")
    headerUpper.classList.remove('header-upper')
    headerUpper.classList.add('heaer-downer')
})

// MEGA MENU SHOW
for(let i = 0; i< menuLi.length; i++){
    menuLi[i].addEventListener("mousemove", (event)=> {
        megaMenu.classList.remove('deactive')
    })
}
// MEGA MENU HIDE
environmentLi.addEventListener('mouseleave', (event)=> {
    megaMenu.classList.add('deactive')
})