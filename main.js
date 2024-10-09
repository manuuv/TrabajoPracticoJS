document.addEventListener("DOMContentLoaded", function() {
    const lista = document.getElementById("lista");

    if (lista) {
        const getDataInput = (event) => {
            const texto = event.target.textContent;
            console.log(texto);
        }

        lista.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                getDataInput(event);
            }
        });
    }
});