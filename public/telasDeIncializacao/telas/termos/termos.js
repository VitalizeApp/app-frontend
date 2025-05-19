document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll(".termo-checkbox");
    const botaoIniciar = document.getElementById("btn-iniciarI");

    function atualizarEstadoBotao() {
        const todosMarcados = Array.from(checkboxes).every(checkbox => checkbox.checked);

        if (todosMarcados) {
            botaoIniciar.classList.remove("disabled-link");
            botaoIniciar.removeAttribute('aria-disabled');
            botaoIniciar.removeAttribute('tabindex');
        } else {
            botaoIniciar.classList.add("disabled-link");
            botaoIniciar.setAttribute('aria-disabled', 'true');
            botaoIniciar.setAttribute('tabindex', '-1');
        }
    }

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", atualizarEstadoBotao);
    });

    botaoIniciar.addEventListener("click", function (event) {
        if (botaoIniciar.classList.contains("disabled-link")) {
            event.preventDefault();
        }
    });

    atualizarEstadoBotao();
});