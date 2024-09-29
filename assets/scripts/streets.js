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

textDiv.style.display = "none";

clickToOpen.addEventListener("click", () => {
    const isVisible = textDiv.style.display === "block";

    textDiv.classList.add('animate__animated'); 

    if (isVisible) {
        
        textDiv.classList.remove('animate__bounceIn');
        textDiv.classList.add('animate__bounceOut');
    } else {
        
        textDiv.style.display = "block"; 
        textDiv.classList.remove('animate__bounceOut');
        textDiv.classList.add('animate__bounceIn');
    }

    void textDiv.offsetWidth;

    textDiv.addEventListener('animationend', () => {
        if (isVisible) {
            textDiv.style.display = "none";
        }
        textDiv.classList.remove('animate__animated', 'animate__bounceOut', 'animate__bounceIn');
    }, { once: true });
});



let clickToMoreInfo = document.querySelector("#clickToMoreInfo");

clickToMoreInfo.addEventListener("click", () => {
    alert("переход на страницу с подробной информацией об монументу");
})