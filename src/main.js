let topHeader = document.querySelector('.top')
let headerUpper = document.getElementById('header-upper')

topHeader.addEventListener("click", (event)=> {
    topHeader.classList.add("deactive")
    headerUpper.className = 'active'
})