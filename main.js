document.addEventListener("DOMContentLoaded", function() {
    const mostrarAlerta = document.getElementById("boton");
  
    if (mostrarAlerta) {
        const getDataInput = () => {
            const texto = document.getElementById("texto").value;
            alert("Has ingresado: " + texto);
        }  

        mostrarAlerta.addEventListener('click', () => {
            getDataInput();
        })
    }
  });