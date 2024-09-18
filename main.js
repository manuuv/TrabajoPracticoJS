let libro1 ={
    titulo: "El Quijote",
    año: 1605,
    autor: "Miguel de Cervantes Saavedra"
}

console.log(libro1);

let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
const esAntiguo = (libro) => {
    let antiguo =  (añoActual - libro.año) < 10 ? false : true;
    return antiguo;
}

console.log("El libro "+libro1.titulo+" es antiguo: "+ esAntiguo(libro1));