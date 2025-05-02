document.addEventListener("DOMContentLoaded", () => {
  const cpfInput = document.getElementById("cpf");

  toggle.addEventListener("click", () => {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggle.src =
      tipo === "password"
        ? "/src/pages/Login/img/visibility_on.svg"
        : "/src/pages/Login/img/visibility_off.svg";
    toggle.alt = tipo === "password" ? "Mostrar senha" : "Esconder senha";
  });

  cpfInput.addEventListener("input", () => {
    let v = cpfInput.value.replace(/\D/g, "").slice(0, 11);
    let formatado = "";
    if (v.length > 0) formatado = v.slice(0, 3);
    if (v.length >= 4) formatado += "." + v.slice(3, 6);
    if (v.length >= 7) formatado += "." + v.slice(6, 9);
    if (v.length >= 10) formatado += "-" + v.slice(9, 11);
    cpfInput.value = formatado;
  });

  document.querySelector(".campoBotao").addEventListener("click", () => {
    window.location.href = "/src/pages/home/home.html";
  });
});
