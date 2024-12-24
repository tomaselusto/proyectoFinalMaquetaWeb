const menu= document.querySelector('#menuIcon') //# para seleccionar id
const navList=document.querySelector('.navlist') //. para seleccionar clases

menu.onclick=()=>{
    menu.classList.toggle('bx-x')
    navList.classList.toggle('open')
}

const sr= ScrollReveal({
    distance:'65px',
    duration: 2000,
    delay: 450,
    reset:true
})

sr.reveal('.heroTexto', {delay:200, origin:'top'})
sr.reveal('.heroImg', {delay:450, origin:'top'})
sr.reveal('.iconos', {delay:500, origin:'left'})
sr.reveal('.Abajo', {delay:350, origin:'right'})