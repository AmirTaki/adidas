let topHeader = document.querySelector('.top')
let headerUpper = document.getElementById('header-upper')
let crossHeader = document.querySelector(".cross i")
let header = document.querySelector("header")
let body = document.querySelector("body")

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