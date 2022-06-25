
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
        if (e.clientY < 10) {
        banner.classList.add("active")
        }
    }

document.addEventListener('mousemove', getPosition, false);})();


navMenu = document.querySelector(".nav-menu");

    navMenu.addEventListener("click",function(){
        banner.classList.remove("active");
        

    });









