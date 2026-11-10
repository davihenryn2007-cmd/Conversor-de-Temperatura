// Lógica pura do app (sem DOM), para poder ser testada com Node.

const UNIDADES = ["C", "F", "K"];

function paraCelsius(valor, de) {
  if (de === "C") return valor;
  if (de === "F") return (valor - 32) * 5 / 9;
  if (de === "K") return valor - 273.15;
  throw new Error("Unidade inválida: " + de);
}

function deCelsius(valor, para) {
  if (para === "C") return valor;
  if (para === "F") return valor * 9 / 5 + 32;
  if (para === "K") return valor + 273.15;
  throw new Error("Unidade inválida: " + para);
}

function converter(valor, de, para) {
  const n = Number(valor);
  if (valor === "" || valor === null || Number.isNaN(n)) return null;
  const resultado = deCelsius(paraCelsius(n, de), para);
  return Math.round(resultado * 100) / 100;
}

if (typeof module !== "undefined") {
  module.exports = { UNIDADES, converter };
}
