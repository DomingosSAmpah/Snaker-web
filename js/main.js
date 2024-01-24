// ========== MENU MOBILE ============

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
const remoMenu = document.querySelectorAll('.remov'), remo = document.getElementById('remo');

    // SHOW MENU
menu.onclick = () =>{
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('ative');
}
    // REMOVE SHOW POR ELEMENT
remo.onclick = ()=>{
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('ative');
    remo.classList.toggle('remo');
    remo.classList.remove('remo');
}
    // REMOVE SCROLL
window.onscroll = () =>{
    menu.classList.add('fa-bars');
    navbar.classList.remove('ative');
}


// ========== SLIDE-CONTAINER DO HOME ============

let slides = document.querySelectorAll('.slide-container');
let index = 0;
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// ========== SLIDE-CONTAINER DO HOME ============

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click' , () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_1 =>{
    image_1.addEventListener('click' , () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_1 =>{
    image_1.addEventListener('click' , () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});








