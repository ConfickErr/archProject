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

let clickToOpen = document.querySelector("#clickToOpen");
let textDiv = document.querySelector("#textDiv");

clickToOpen.addEventListener("click", () => {
    if (textDiv.style.display === "none") {
        textDiv.style.display = "block";
    } else {
        textDiv.style.display = "none";
    }
});


let clickToMoreInfo = document.querySelector("#clickToMoreInfo");

clickToMoreInfo.addEventListener("click", () => {
    alert("переход на страницу с подробной информацией об монументу");
})