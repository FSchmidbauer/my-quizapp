const buttons = document.querySelectorAll('.tipp-box');
const answerTexts = document.querySelectorAll('.tipp-box__text');

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        answerTexts[index].classList.toggle('hidden');
    })
});