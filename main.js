let persona ={
    nombre: "Manuel",
    edad: 21,
    ciudad: "Córdoba"
}

console.log(persona);

const cambiarCiudad = (persona) => {
    persona.ciudad = "Mendoza";
}

cambiarCiudad(persona);
console.log(persona);