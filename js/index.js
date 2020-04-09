
let link = document.querySelector('.navbar-nav')
link.addEventListener('click', activarlink)

function activarlink(evt){
    let wantActive = evt.target.parentNode
    let allLinks = document.getElementsByClassName('nav-item')
    for (var i = 0; i < allLinks.length; i++){   
        allLinks[i].classList.remove('active')
    }
    wantActive.classList.add('active')  
}