import { number, user, saludar, myFunctons } from "./constantesmodulos.js"; //como están en la misma carpeta ./

// por cada nivel de carpeta la agrego un . --> ../ etc.
console.log("Este es mi archivo sobre módulos");
// alert("No estoy entendiendo mucho j3j3");
console.log(number);
// alert(number);
console.log("Hola, ", user);
console.log(myFunctons.resta(4, 2));
console.log(`La suma de los nùmeros es de `, myFunctons.suma(3, 4));
saludar();
