const counter = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const display = document.getElementById('value');

btnDecrement.addEventListener('click', () => {
  counter.decrement();
  display.textContent = counter.value;
});

btnIncrement.addEventListener('click', () => {
  counter.increment();
  display.textContent = counter.value;
});
