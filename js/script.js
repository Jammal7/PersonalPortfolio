// Preloader 
// window.addEventListener("load", function() {
//     document.querySelector(".preloader").classList.add("opacity-0");

//     setTimeout(function() {
//         document.querySelector(".preloader").style.display="none";
//     }, 1000)
// });

// const hamburger = document.querySelector('.header .navbar .navlist .hamburger');
// const mobile_menu = document.querySelector('.header .navbar .navlist ul');
// const menu_item = document.querySelectorAll('.header .navbar .navlist ul li a');
// const header = document.querySelector('.header.container');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     mobile_menu.classList.toggle('active');
// });
// document.addEventListener('scroll', () => {
//     var scroll_position = window.scrollY;
//     if (scroll_position > 250) {
//         header.style.backgroundColor = '#0f0d0d';
//     } else {
//         header.style.backgroundColor = 'transparent';
//     }
// });
// menu_item.forEach((item) => {
//     item.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         mobile_menu.classList.toggle('active');
//     })
// });

$(document).ready(function(){
    // typing text animation script

    var typed = new Typed(".typing-2", {
        strings: ["Frontend developer", "Programmer", "Blogger", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
});