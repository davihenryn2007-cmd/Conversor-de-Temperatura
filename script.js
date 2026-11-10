// Parte visual: usa converter() de logic.js (carregado antes no index.html)
const form = document.getElementById("form");
const valor = document.getElementById("valor");
const de = document.getElementById("de");
const para = document.getElementById("para");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const r = converter(valor.value, de.value, para.value);
  resultado.textContent = r === null ? "Digite um número válido" : `${r} °${para.value}`;
});
