let arrowChange = document.querySelector("#arrowChange");
let dropdown = document.querySelector(".dropdown");


let myBtn = document.getElementById("myBtn");


window.onscroll = function() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        myBtn.classList.add("show");
    } else {
        myBtn.classList.remove("show");
    }
};


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



let FunctiondropdownButton = () => {
    dropdown.addEventListener("mouseover", () => {
        arrowChange.classList.add("rotate-arrow");
        arrowChange.style.transition = "0.6s";
    });

    dropdown.addEventListener("mouseout", () => {
        arrowChange.classList.remove("rotate-arrow");
        arrowChange.style.transition = "0.6s";
    });
}


FunctiondropdownButton();