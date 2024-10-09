document.addEventListener("DOMContentLoaded", function() {

    const texto = document.getElementById("texto");
    const mensaje = document.getElementById("mensaje");
    const boton1 = document.getElementById("boton1");
    const boton2 = document.getElementById("boton2");


    if (texto && boton1 && boton2) {
        
        boton1.addEventListener("click", () => {
            const email = texto.value.trim();
            if (email) {
                localStorage.setItem("datos", JSON.stringify({ texto: email }));
                mensaje.textContent = `Correo electrónico guardado: ${email}`;
            } else {
                mensaje.textContent = "Por favor, ingrese un correo electrónico válido.";
            }
        })

        boton2.addEventListener("click", () => {
            const correo = localStorage.getItem("datos");
            if (correo) {
                localStorage.removeItem("datos");
                mensaje.textContent = "Correo electrónico borrado.";
            } else {
                mensaje.textContent = "No existe el correo.";
            }
        })
    }
});