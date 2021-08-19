
const calculator=function(){
    alert ("Este programa sumará tus gastos totales y te devolverá el valor final. Cuando escribas la palabra 'total' en el siguiente recuadro el programa se detendrá y te aparecerá la suma de los valores que has ingresado.");
    let total = 0;
    let price;
    do {
         price = prompt("Ingresa los valores que quieres sumar, solo el número, sin el signo dinerario. Cuando ingreses 'total' el programa se detendrá.");
        if(+price){
            total += +price;
        }
        if(price.toLowerCase()!=="total" && !(+price)){
            return alert("El valor ingresado no es correcto");
        }
    } while (price.toLowerCase() !== "total");
    return alert(`La suma de los valores ingresados es de $${total}`)
};
calculator();