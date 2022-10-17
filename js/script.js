let removePicture = document.querySelector(".remove__picture");
let myPicture = document.querySelector(".my__picture");
let lotteryButton = document.querySelector(".lottery__button");
let changeBackground = document.querySelector(".change__background");
let themeName = document.querySelector(".theme__name");

let heightElement = document.querySelector(".js-height");
let weightElement = document.querySelector(".js-weight");
let formElement = document.querySelector(".js-form");
let bmiElement = document.querySelector(".js-bmi");

formElement.addEventListener("input", () => {
    let height = heightElement.value;
    let weight = weightElement.value;
    let bmi = weight / ((height / 100) ** 2);

    console.log(bmi);

    bmiElement.innerText = bmi.toFixed(2);
});


removePicture.addEventListener("click", () => {
    myPicture.remove();
});

lotteryButton.addEventListener("click", () => {
    alert('Brzydkie Okienko z Errorem, wygrałeś Iphone 90000')
});

changeBackground.addEventListener("click", () => {
    let container = document.querySelector(".container");
    container.classList.toggle("change__background");

    if (container.classList.contains("change__background")) {
        themeName.innerText = "lepszy kolor";
    } else {
        themeName.innerText = "dziwny kolor";
    }
});
