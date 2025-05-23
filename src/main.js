let topHeader = document.querySelector('.top')
let headerUpper = document.getElementById('header-upper')
let crossHeader = document.querySelector(".cross")


topHeader.addEventListener("click", (event)=> {
    topHeader.classList.add("deactive")
    
})

crossHeader.addEventListener("click", (event)=> {
    topHeader.classList.remove("deactive")

})