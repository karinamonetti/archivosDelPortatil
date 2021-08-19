let returnLenght = (algo) => {
  return algo.length;
};
returnLenght("Hola");

///////////////////////////////////////////
// 2)
let myString = prompt("Tell me something");
let myStringUncut = () => {
  return console.log(myString.substring(0, 5));
};
myStringUncut();

///////////////////////////////////////////
// 3)
let myText = "Hola me llamo Karina";
console.log(myText.split(" "));

///////////////////////////////////////////
// 4)
let myStringRepeat = "Hola Manola";
let myStringRepeatFunction = () => {
  console.log(myStringRepeat.repeat(3));
};
myStringRepeatFunction();
