const checkboxes = document.querySelectorAll(".termo-checkbox");
const botao = document.getElementById("btn-iniciar");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const todosMarcados = Array.from(checkboxes).every((cb) => cb.checked);
    botao.disabled = !todosMarcados;
  });
});

document.getElementById("btn-iniciar").addEventListener("click", function () {
  window.location.href = "mudar-o-nome-depois.html"; // Substitua pelo nome real da próxima página
});
