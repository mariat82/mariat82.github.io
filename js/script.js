let ham = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let navbar = document.querySelector('.nav-bar')
let sliderImg = document.querySelector('#slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/pic4.jpg','./img/pic5.jpg','./img/pic7.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===3){
        i=0;
    }
}
setInterval(slide,3000)