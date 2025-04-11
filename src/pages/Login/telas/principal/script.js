const senhaInput = document.getElementById("senha");
const toggle = document.getElementById("toggleSenha");

toggle.addEventListener("click", () => {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggle.src =
      tipo === "password"
        ? "/src/pages/Login/img/visibility_on.svg"
        : "/src/pages/Login/img/visibility_off.svg";
  });  

cpfInput.addEventListener("input", () => {
    let v = cpfInput.value.replace(/\D/g, "");
    if (v.length > 3) v = v.replace(/^(\d{3})(\d)/, "$1.$2");
    if (v.length > 6) v = v.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    if (v.length > 9) v = v.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    cpfInput.value = v;
  });
  