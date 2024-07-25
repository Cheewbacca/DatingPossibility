let play = false;
const body = document.querySelector("body");
body.style = "display: flex; justify-content: center; align-items: center; height: 100vh; font-size: 2rem; font-family: Arial; color: #333;";
body.innerHTML = '<span class="typed-text"></span>';

function printText() {
    const willBeDateToday = Math.random() < 0.6;
    const prefix = willBeDateToday ? '' : 'не'

    const text = `В Івана і Крістіни ${prefix} буде побачення`;
    const textArray = text.split("");

    play = true;
    const typedTextSpan = document.querySelector(".typed-text");
    typedTextSpan.textContent = "";

    for (let i = 0; i < textArray.length; i++) {
        setTimeout(() => {
            typedTextSpan.textContent += textArray[i];
        }, 75 * i);
    }

    setTimeout(() => {
        play = false;
    }, 75 * textArray.length);

}

printText();

body.addEventListener("click", () => {

    if (play) {
        return;
    }

    printText();
});