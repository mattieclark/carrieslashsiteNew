
let i = 0;

let node = document.querySelector(".slideshow");

node.children[i].classList.add("active");

let right = document.querySelector("#right");

let left = document.querySelector("#left");




right.addEventListener("click", function () {
    node.children[i].classList.remove("active");

    i = i + 1;

    if (i >= node.children.length) {
        i = 0
    };

    node.children[i].classList.add("active");
});



left.addEventListener("click", function () {
    node.children[i].classList.remove("active");

    i = i - 1;

    if (i < 0) {
        i = 4;
    };

    node.children[i].classList.add("active");

});


submit = document.getElementById("form-submit");

submit. addEventListener("click", function(){
    alert("Thank You. I will be in contact soon")
});






banner = document.getElementById("nav-bar");


(function (){
    function getPosition(e){
        if (e.clientY < 75) {
        banner.classList.add("active")
        }
    }

document.addEventListener('mousemove', getPosition, false);})();


navMenu = document.querySelector(".nav-menu");

    navMenu.addEventListener("click",function(){
        banner.classList.remove("active");
        

    });






// const sections = document.querySelectorAll('section[id]')

// function scrollActive() {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.add('active')
//         } else {
//             document.querySelector('.nav__item a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }

// /*===== SCROLL REVEAL ANIMATION =====*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2000,
//     delay: 200,
// //     reset: true
// });



