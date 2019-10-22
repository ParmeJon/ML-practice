window.addEventListener("load", event => {
const text = document.getElementById('textfield')
const form = document.getElementById('flirty-form')
const results = document.getElementById('results')
  const submit = (event) => {
    event.preventDefault()
    const newDiv = document.createElement('div')
    newDiv.textContent = thirdNet(text.value);
    results.innerHTML = ""
    results.appendChild(newDiv)
  }
  form.addEventListener("submit", submit)
});
