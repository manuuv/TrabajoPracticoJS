document.addEventListener("DOMContentLoaded", function() {

    const texto = document.getElementById("texto");
    const boton1 = document.getElementById("boton1");
    const boton2 = document.getElementById("boton2");

    let deshabiitado = false;

    if (texto && boton1 && boton2) {
        
        boton1.addEventListener('click', (event) => {
            if (deshabiitado == false) {
                texto.disabled = true;
                deshabiitado = true;
            }
        });

        boton2.addEventListener('click', (event) => {
            if (deshabiitado == true) {
                texto.disabled = false;
                deshabiitado = false;
            }
        });
    }
});