const test = require("node:test");
const assert = require("node:assert");
const { converter } = require("./logic.js");

test("0 °C são 32 °F", () => {
  assert.strictEqual(converter(0, "C", "F"), 32);
});

test("100 °C são 212 °F", () => {
  assert.strictEqual(converter(100, "C", "F"), 212);
});

test("0 °C são 273.15 K", () => {
  assert.strictEqual(converter(0, "C", "K"), 273.15);
});

test("212 °F são 100 °C", () => {
  assert.strictEqual(converter(212, "F", "C"), 100);
});

test("mesma unidade devolve o mesmo valor", () => {
  assert.strictEqual(converter(25, "C", "C"), 25);
});

test("entrada vazia ou inválida devolve null", () => {
  assert.strictEqual(converter("", "C", "F"), null);
  assert.strictEqual(converter("abc", "C", "F"), null);
});
