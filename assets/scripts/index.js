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