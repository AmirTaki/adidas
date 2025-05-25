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

// heart sider image
let heart = document.querySelectorAll('.sider-move-img i')

//scroll siderbar & button arrow left & button arrow right
let scrollSider = document.querySelector('.sider-move-img')
let arrowLeft =  document.querySelector('.bi-arrow-left-square')
let arrowRight = document.querySelector('.bi-arrow-right-square')


/* ----------------------------------------------------------------------------- */
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

/* ----------------------------------------------------------------------------- */
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

/* ----------------------------------------------------------------------------- */
// img sider  convert heart to fill heart
for (let i = 0; i< heart.length; i++){
    heart[i].addEventListener("click", (event)=>{
        heart[i].className = heart[i].className === "bi bi-suit-heart" ? "bi bi-suit-heart-fill" : "bi bi-suit-heart"
    })
}



// scrollSider.addEventListener("wheel", (event)=>{
//     event.preventDefault();
//     scrollSider.scrollLeft += event.deltaY
// })

// click left 
arrowLeft.addEventListener("click", (event)=> {
    scrollSider.style.scrollBehavior = "smooth"
    scrollSider.scrollLeft -= 900  
})

// click right
arrowRight.addEventListener("click", ()=> {
    scrollSider.style.scrollBehavior = "smooth"
    scrollSider.scrollLeft += 900
})


function scrollSiderBar () {
    arrowLeft.style.opacity = scrollSider.scrollLeft <= "80" ? .3 : 0
    arrowRight.style.opacity = scrollSider.scrollLeft < (scrollSider.scrollWidth - 500) ? .3 : 0
}
scrollSiderBar () 