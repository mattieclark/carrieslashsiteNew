

///////////////////////Gallery slideshow function///////////////////

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

//////////////////form submit msg/////////////////////////////////////////////

submit = document.getElementById("form-submit");

submit.addEventListener("click", function () {
    alert("Thank You. I will be in contact soon")
});


//////////////////nav bar cursor clientY activation///////////////////////



banner = document.getElementById("nav-bar");


(function () {
    function getPosition(e) {
        if (e.clientY < 10) {
            banner.classList.add("active")
        }
    }

    document.addEventListener('mousemove', getPosition, false);
})();

(function () {
    function getPosition(e) {
        if (e.clientY > 300) {
            banner.classList.remove("active")
        }
    }

    document.addEventListener('mousemove', getPosition, false);
})();

navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", function () {
    banner.classList.remove("active");


});

////////////////////open alert to explain nav bar access/////////////////////////


let newLine = "\r\n";

let msg = "Hi there!";
msg += newLine;
msg += "Move cursor to top of page to activate navigation bar";

let onOpen = alert(msg);


function openAlert() {
    window.open(onOpen)
};


/////swipe function for gallery move when resposive ///////


let touchstartX = 0
let touchendX = 0

function checkDirection() {
    if (touchendX < touchstartX) {
        // alert('swiped left!');
        node.children[i].classList.remove("active");

        i = i - 1;

        if (i < 0) {
            i = 4;
        };

        node.children[i].classList.add("active");
    }

    if (touchendX > touchstartX) {
        //  alert('swiped right!')
        node.children[i].classList.remove("active");

        i = i + 1;

        if (i >= node.children.length) {
            i = 0
        };

        node.children[i].classList.add("active")
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
})








