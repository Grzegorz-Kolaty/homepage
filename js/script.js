{
    const welcome = () => {
        console.log("Ten kod jest juz w repozytorium GIT");
    };
    welcome();

    const lottery = () => {
        const lotteryButton = document.querySelector(".js-lottery");
        lotteryButton.addEventListener("click", () => {
            alert('Brzydkie Okienko z Errorem, wygrałeś Iphone 90000')
        });
    };
    lottery();

    const removePicture = () => {
        const myPicture = document.querySelector(".js-myPicture");
        const removeButton = document.querySelector(".js-removePicture");
        removeButton.addEventListener("click", () => { myPicture.remove(); });
    };
    removePicture();

    const toggleBackground = () => {
        const container = document.querySelector(".container");
        const nextColorName = document.querySelector(".js-nextColorName");
        container.classList.toggle("container--strange");
        nextColorName.innerText = container.classList.contains("container--strange") ? "szary" : "dziwny";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackground");
        changeBackgroundButton.addEventListener("click", toggleBackground);
    };
    init();

    const calcBmi = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("input", () => {
            const heightElement = document.querySelector(".js-height");
            const weightElement = document.querySelector(".js-weight");
            const bmiElement = document.querySelector(".js-bmi");
            const height = heightElement.value;
            const weight = weightElement.value;
            const bmi = weight / ((height / 100) ** 2);
            bmiElement.innerText = bmi.toFixed(2);
        });
    };
    calcBmi();
}