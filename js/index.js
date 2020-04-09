
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

function continuarLeyendo(evt){
    evt.preventDefault()
    console.log('continuarLeyendo', evt.target.parentNode.parentNode.children);
    if(evt.target.parentNode.children[3].classList.contains('biography')){
        evt.target.parentNode.children[3].classList.remove('biography')
        evt.srcElement.innerHTML = 'Reducir'
        evt.target.parentNode.parentNode.children[1].classList.remove('d-none')
    }else{
        evt.target.parentNode.children[3].classList.add('biography')
        evt.srcElement.innerHTML = 'Continuar leyendo'
        evt.target.parentNode.parentNode.children[1].classList.add('d-none')
    }

    
}