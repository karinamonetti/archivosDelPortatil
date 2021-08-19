const number = Math.PI;

let user = "Kari";

function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
const myFunctons = { suma, resta };
function saludar() {
  console.log("Hola");
}

export { number, user, myFunctons, saludar };
