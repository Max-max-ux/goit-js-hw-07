const username = document.querySelector("#name-input");
const userOutput = document.querySelector("#name-output");

username.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    userOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
})
