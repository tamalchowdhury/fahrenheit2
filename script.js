function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function displayFahrenheit(f) {
  const farSpan = document.querySelector("#far");
  farSpan.textContent = f;
}

const form = document.querySelector("#form");

function handleSubmit(event) {
  event.preventDefault();
  const celsius = event.target.celsius.value;

  if (celsius) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    displayFahrenheit(fahrenheit);
  }
}

form.addEventListener("submit", handleSubmit);
