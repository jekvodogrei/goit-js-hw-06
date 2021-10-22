// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
'use strict';

const button = {
  sub: document.querySelector("[data-action='increment']"),
  add: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
};

let counterValue = 0;
function increment() {
  counterValue += 1;
  document.getElementById('value').innerHTML = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.getElementById('value').innerHTML = counterValue;
}

button.sub.addEventListener('click', increment);
button.add.addEventListener('click', decrement);
