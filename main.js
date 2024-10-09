let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosx2 = numeros.map((elemento) => {
    return elemento * 2;
})

console.log("Números originales: " + numeros.join(', '))
console.log("Números nultiplicados por 2: " + numerosx2.join(', '))