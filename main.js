let c = prompt("Ingrese °C")
console.log(c+"°C son equivalentes a "+convertirCelciusAFahrenheit(c)+"°F");

function convertirCelciusAFahrenheit(c){
    let f = c * 1.8 + 32;
    return f;
}