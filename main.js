let num1 = 8;
let num2 = 7;
console.log("El número "+num1+" es par: "+ esPar(num1));
console.log("El número "+num2+" es par: "+ esPar(num2));

function esPar(a){
    let y;
    a % 2 == 0 ? y=true : y=false;
    return y;
}