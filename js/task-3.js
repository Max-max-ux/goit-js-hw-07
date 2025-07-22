const inputField = document.getElementById('name-input');
const outputSpan = document.getElementById('name-output');

inputField.addEventListener('input', event => {
  const name = event.target.value.trim();
  outputSpan.textContent = name !== '' ? name : 'Anonymous';
});
