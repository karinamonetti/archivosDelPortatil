//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 17] b r e a k  &  c o n t i n u e  /////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//loop for que recorre cada elemento del array y lo imprime en un console.log
const numbersx = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < numbersx.length; index++) {
  console.log(numbersx[index]);
}
//si yo quisiera que el loop se cortara en un momento antes de haber recorrido todo el array:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < numbers.length; index++) {
  if (index === 5) {
    break;
  }
  console.log(numbers[index]);
}

// contonue no te sale del loop, pero omite el valor que está en la condición (en este caso no imprime el 5)
const numbersy = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < numbersy.length; index++) {
  if (index === 5) {
    continue;
  }
  console.log(numbersy[index]);
}

//+++++++++  e  j  e  m  p  l  o    d  e    p  r  u  e  b  a  +++++++++++++++++
const numbers2 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
for (i = 0; i <= numbers2.length; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(numbers2[i]);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 18] d e s t r u c t u r a c i ó n ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//asigna valores a objetos o arreglos

const numerillos = [1, 2, 3];
const person = {
  nombre: "Karina",
  apellido: "Monetti",
  edad: 26,
};
//quiero guardar los valores en variables con destructuración
const [uno, dos, tres] = numerillos;
const { nombre, apellido, edad } = person; //al crearlo debe respetar el nombre de la key
console.log(uno, dos, tres);
console.log(nombre, apellido, edad);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 19] o b j e t o s  l i t e r a l e s ////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//es una manera de atribuir valores creados a un objeto sin tener que escribir de más
let name = "Kimba",
  age = 12,
  hobbie = "Dormir";
let ladra = function () {
  console.log("guau guau");
};

const myDoggie = {
  name,
  age,
  hobbie,
  ladra() {
    console.log("bu"); //debo pasarle la función con una instrucción si o si
  },
};
console.log(myDoggie);
myDoggie.ladra();

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 20] parámetro REST y operador SPREAD o b j e t o s  l i t e r a l e s ///////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// el parámetro REST son los ... que indican cuando yo no sé cuantos valores va a estar recibiendo mi código
function sumar(a, b, ...c) {
  let result = a + b;
  c.forEach(function (n) {
    result += n;
  });
  return result;
}

console.log(sumar(2, 4));

console.log(sumar(2, 4, 5, 7, 2));

// el operador de propagación SPREAD
const arr1 = [1, 2, 3, 4, 5],
  arr2 = [6, 7, 8, 9, 0];
console.log(arr1, arr2);
//si necesito crear un arreglo a partir de estos dos:
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 21] a r r o w  f u n c t i o n s ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//es una forma de expresar funciones anónimas

//esta es una función expresada clásica
const saludar = function () {
  console.log("hola");
};
saludar();

//lo mismo pero con arrow function
//nota: si la arrow function tiene solo 1 lìnea de instrucción se pueden omitir las llaves.
//nota2: si la arrow function recibe solo un parámetro no es obligatorio poner los (), caso contrario si.
const saludar = (name) => console.log(`Hola ${name}`);
saludar("Karina");

const sumar = (a, b) => a + b;
console.log(sumar(9, 9)); //tiene return implícito

const manyLines = () => {
  console.log(1);
  console.log("alguillo");
};
manyLines();

const myArray = [1, 2, 3, 4, 5];
myArray.forEach((element, i) =>
  console.log(`El elemento ${element} se encuentra en la posición  ${i}`)
);
// dentro de un objeto no es recomendable crear una arrow function.

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 22] P.O.O   p r o t o t i p o s /////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//POO
/*
Clases: modelo a seguir
Objeto: instancia de una clase
Atributos: característica o propiedad del objeto (variables dentro de un objeto)
Métodos: son acciones que un objeto puede realizar (funciones dentro de un objeto)
*/

//función constructora
const Animal = function (name, genre) {
  //atributo
  this.name = name;
  this.genre = genre;
};
//método  --> lo ideal es que estén fuera de la función constructora porque ocupan espacio y que ésta se quede solo con los atributos
//de la siguiente manera ligo al método con la función constructora y mejoro el rendimiento de mi código
Animal.prototype.sound = function () {
  console.log("Hago un sonido");
};

const snoopy = new Animal("Kimba", "Female"),
  lola = new Animal("Sasha", "Female");
console.log(snoopy, lola);
snoopy.sound();

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 23] P.O.O   h e r e n c i a ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//herencia de características

const Dog = function (name, genre, size) {
  this.super = Animal; //herencia de Animal a Dog
  this.super(name, genre); //llamo a los elementos de Animal
  this.size = size;
};
//Dog está heredando de Animal
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

//sobreescritura del método padre en el hijo
Dog.prototype.sound = function () {
  console.log("Soy un perro y ladro");
};
Dog.prototype.ladrar = function () {
  console.log("Guau guau");
};

//ejecuto la herencia
const baby = new Dog("Sashita", "Female", "Medium");
console.log(baby);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 24] P.O.O   c l a s e s  ////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//manera más fácil para hacer herencias

class Animal2 {
  constructor(name2, genre2) {
    //aquí recibe los parámetros
    this.name2 = name2;
    this.genre2 = genre2;
  }

  //métodos  -- no es necesario sacarlos del bloque
  sound2() {
    console.log("I'm an animal and I make a sound");
  }
  sayHi() {
    console.log("Hi! I'm a happy animal");
  }
}

const mimi = new Animal2("Mimi", "Female");
const scrapy = new Animal2("Scrapy", "Male");
console.log(mimi, scrapy);
scrapy.sound2();

//herencia  -- extends
class Dog2 extends Animal2 {
  constructor(name2, genre2, race) {
    super(name2, genre2); //invoco a los atributos de la clase padre
    this.race = race;
  }

  //sobreescritura método
  sound2() {
    console.log("i'm a dog and my sound is 'guau guau'");
  }
}

//invoco a la herencia
const firulais = new Dog2("Firulais", "Male", "Dálmata");
console.log(firulais);
firulais.sound2();
firulais.sayHi(); //aunque no esté en la clase hija Dog2 puedo invocar la función.

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 25] P.O.O   métodos estáticos //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

class Dog2 extends Animal2 {
  constructor(name2, genre2, race) {
    super(name2, genre2); //invoco a los atributos de la clase padre
    this.race = race;
  }

  //sobreescritura método
  sound2() {
    console.log("i'm a dog and my sound is 'guau guau'");
  }

  // static me permite ejecutar un método sin necesidad de hacerlo con un elemento (variable)
  static whoAreYou() {
    console.log("I love dogs! <3");
  }
}

Dog2.whoAreYou(); //se ejecuta sin problemas

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 26] o b j e t o   c o n s o l e  ///////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

console.error("Esto es un error");
console.warn("Esto es un warning");
console.info("Esto es un mensaje informativo y se parece el console.log");

let name = "Kari",
  surname = "Monetti",
  age = 26;
console.log(name, surname, age);
console.log(`Hi! My name is ${name} ${surname} and I am ${age}`);

console.clear(); //limpia la consola

//arma un grupo
console.group("Comidas que me gustan");
console.log("Brownie");
console.log("Arepas con perico");
console.log("Pizza");
console.log("Fideos rellenos");
console.groupEnd();

const firstArray = [1, 2, 3, 4, 5],
  secondArray = ["a", "e", "i", "o", "u"];
console.table(firstArray);
console.table(secondArray);

const myObject = {
  name: "Alguillo",
  color: "Blue",
  age: 26,
  boyfriend: "Xiumin",
};

console.table(myObject);

//una especie de trycatch
let x = 3,
  y = 4,
  xy = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, xy });
x = 5;
console.assert(x < y, { x, y, xy });

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 27] o b j e t o   d a t e  /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//new Date(year, month, day, hours, minutes, seconds, milliseconds)

console.log(Date());
let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); //día del mes
console.log(fecha.getDay()); //dìa de la semana (domingo a sábado, el domingo es 0)
console.log(fecha.getMonth()); //número del mes (enero = 0)
console.log(fecha.getFullYear()); //solo año
console.log(fecha.toString()); //idem console.log(fecha)
console.log(fecha.toLocaleDateString()); //solo fecha
console.log(fecha.toLocaleTimeString()); //solo hora
console.log(Date.now()); //cuantos segundos han pasado desde el primero de enero de 1970

//libreria momentjs --> momentjc.com  (libreria potente para manejar el tiempo)

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 28] o b j e t o   m a t h  /////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// sirve para hacer operaciones matemáticas específicas
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-87)); //devuelve el valor absoluto de un número
console.log(Math.ceill(7.8)); //redondea para arriba siempre
console.log(Math.floor(7.8)); // redondea para abajo siempre
console.log(Math.round(7.3)); //redondea al más cercano
console.log(Math.sqrt(81)); //raíz cuadrara
console.log(Math.pow(2, 5)); //potencia (base, exponente) -->32
console.log(Math.sign(-7.9)); //indica si el número es positivo, negativo o cero (-1 negativo, 0, 1 positivo)
console.log(Math.random()); //me devuelve un valor aleatorio entre 0 y 1
console.log(Math.random() * 1000); //me devuelve un número entre 0 y mil math.random()*hastaquénúmero
console.log(Math.round(Math.random() * 500)); //lo mismo que arriba pero me lo devuelve redondeado

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 29] o p e r a d o r   d e   c o r t o c i r c u i t o  //////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Cortocircuito con OR- cuando el valor de la izquierda en la expresión siempre se pueda validar a true entonces es el valor que se cargara x defecto

Cortocircuito con AND- cuando el valor de la izquierda en la expresión siempre pueda validar a false entonces es el valor que se cargará x defecto
*/

//algo nada que ver pero útil...
const saludaPerro = function (theName = "Unknown") {
  //parámetro x defecto
  console.log(`Hi ${theName}!`);
};
saludaPerro();
saludaPerro("Daniel");

//cortocircuito con OR
console.log("cadena" || "right value"); //cadena
console.log([] || "right value"); //[]
console.log(3 || "right value"); //3
console.log(false || "right value"); //right value
console.log(null || "right value"); //right value
console.log(0 || "right value"); //right value

//cortocircuito con AND
console.log("cadena" && "right value"); //right value
console.log([] && "right value"); //right value
console.log(3 && "right value"); //right value
console.log(false && "right value"); //false
console.log(null && "right value"); //null
console.log(0 && "right value"); //0

//básicamente la diferencia entre ambos es, que si yo tengo dos condiciones, en caso del OR, en caso de que una sea falsa me tirará la verdadera y en caso de que ambas sean verdaderas me tirará la primera
//en el caso del AND, si ambas condiciones son correctas tirará la última, en caso de que haya una falsa tirará la falsa.
// -- o sea, se comportan a la inversa --

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 30] a l e r t ,   c o n f i r m ,   p r o m p t   ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//alert --> tira un pop up que tiene un botón de aceptar
const alerta = alert("Hola");

//confirm --> tira un pop up que tiene un botón de aceptar y otro de cancelar
const confirmacion = confirm("¿Quieres iniciar sesión?");

//prompt --> tira un pop up que le permite al usuario almacenar un valor
const prompto = prompt("Ingresa un número"); //si se le da a cancelar el valor que almacena es null

console.log(alerta);
console.log(confirmacion);
console.log(prompto);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 31] e x p r e s i o n e s   r e g u l a r e s   ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
// https://www.w3schools.com/jsref/jsref_obj_regexp.asp

// Una expresiòn regular es una secuencia de caracteres que forman un patròn de bùsqueda y que principalmente se usa en la bùsqueda de cadenas de texto.

const cadenaSting =
    "abcdefg 4353533 dfgfdgabcfddfgd 45646465fdgdgdgfdgdgf5ddsfsggabc",
  cadenaSting2 = "ABCdfdfdfddabc";

//existen dos maneras de definir una expresion regular.
//1) con una función constructora
// new RegExp("Patròn a buscar", "modificador")
const expReg = new RegExp("abc", "");
const expReg2 = new RegExp("abc", "g"); //g significa que busca en todo el objeto/string/etc. y se detiene en el primero que encuentre
const expReg3 = new RegExp("abc", "i"); //i significa que ignore mayùsculas y minùsculas

// 2) o de la siguiente manera:
// /Patrón a buscar/modificador
let expReg4 = /abc/i;

console.log(expReg.test(cadenaSting)); //true --> busca expReg en cadenaString
console.log(expReg4.test(cadenaSting2)); //true --> busca expReg4 en cadenaString2
console.log(expReg4.exec(cadenaSting2)); //devuelve un array y te indica dónde lo encontró

//nota: se pueden poner varios modificadores por ejemplo /abc/ig
expReg4 = /\d/gi;
console.log(expReg4.test(cadenaSting2)); //false

//los [] sirven para buscar un rango de caracteres
expReg4 = /[0-9]/gi;
console.log(expReg4.test(cadenaSting2));

//las {} indican repetición
expReg4 = /abc{1,}/gi; // true --> lo que dice es que lo encuentre x lo menos una vez
console.log(expReg4.test(cadenaSting2));

expReg4 = /abc{3,}/gi; //false
console.log(expReg4.test(cadenaSting2));

expReg4 = /abc{1,2}/gi; //true entre 1 y 2 veces
console.log(expReg4.test(cadenaSting2));

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 32] f u n c i o n e s   a n ó n i m a s    a u t o e j e c u t a b l e  /////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// esto ya no se utiliza
(function () {
  console.log("Hola");
})();

(function (a, b) {
  return console.log(a + b);
})(2, 4);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//[CLASE 33] m ó d u l o s  ( i m p o r t   &   e x p o r t ) ///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Para importar un archivo js dentro de un archivo js en el tag script de HTML debo poner el elemento type
<script src="modulos.js" type="module"></script>

en caso de querer darle soporte a otros navegadores, por ejemplo internet explorer
<script src="modulos.js" nomodule></script>    ---> no se usa prácticamente

LO QUE HAY QUE ENTENDER ES, yo el primer script lo mando con module para que ejecute el script en navegadores modernos, pero le mando el otro script con el elemento nomodule para que el navegador moderno no me ejecute otra vez el script 


Ordenamiento de código:
1) IMPORTación de módulos
2) Declaración de variables
3) Declaración de funciones
4) Ejecución de código


nota: si los elementos a exportar están en un mismo archivo usar el mismo import --sea el elemento que sea -- caso contrario usar otro import.

nota2: si voy a exportar funciones hacerlo con una declarada o con un export default después de expresarla.

en el import dentro de las { puedo poner algo as something} --> as.
*/
