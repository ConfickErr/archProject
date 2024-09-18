let arrowChange = document.querySelector("#arrowChange");
let dropdown = document.querySelector(".dropdown");

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


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show"); 
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
