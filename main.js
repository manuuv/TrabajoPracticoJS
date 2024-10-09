document.addEventListener("DOMContentLoaded", function() {
    const cambiarColor = document.getElementById("boton");
  
    if (cambiarColor) {

      const parrafos = document.querySelectorAll("p");
      const coloresOriginales = [];
  
      parrafos.forEach(function(parrafo) {
        coloresOriginales.push(parrafo.style.color);
      });
  
      let esAzul = false;
  
      cambiarColor.addEventListener("click", function() {

        parrafos.forEach(function(parrafo, index) {
          if (esAzul) {
            parrafo.style.color = coloresOriginales[index];
          } else {
            parrafo.style.color = "blue";
          }
        });
        esAzul = !esAzul;
      });
    }
  });