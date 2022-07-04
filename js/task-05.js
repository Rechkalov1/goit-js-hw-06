// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.Если инпут пустой,
//         в спане должна отображаться строка "Anonymous".
const refs = {
  inputTxt: document.querySelector("#name-input"),
  spanTxt: document.querySelector("#name-output"),
};
refs.inputTxt.addEventListener("input", onInput);

function onInput(event) {
  if (event.currentTarget.value === "") {
    refs.spanTxt.textContent = "Anonymous";
  } else {
    refs.spanTxt.textContent = event.currentTarget.value;
  }
}
