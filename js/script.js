const form = document.querySelector("form");

form.addEventListener("submit", event =>{
    const h1El = document.createElement("h1");
    const input = document.querySelector("input");
    const inputText = input.value;
    document.body.append(h1El);
    h1El.innerText = inputText;
})