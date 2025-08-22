document.addEventListener("DOMContentLoaded", () => {
  const continueLink = document.querySelector(".continue-link");
  const cpfInput = document.getElementById("cpf");
  const cpfError = document.getElementById("cpf-error");
  const btn = document.getElementById("disabledd")

 function formatCPF(value) {
    let v = value.replace(/\D/g, "").slice(0, 11);
    let formatado = "";
    if (v.length > 0) formatado = v.slice(0, 3);
    if (v.length >= 4) formatado += "." + v.slice(3, 6);
    if (v.length >= 7) formatado += "." + v.slice(6, 9);
    if (v.length >= 10) formatado += "-" + v.slice(9, 11);
    return formatado;
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    const calcularDigito = (base, pesoInicial) => {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += parseInt(base[i]) * (pesoInicial - i);
      }
      const resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    };

    const digito1 = calcularDigito(cpf.slice(0, 9), 10);
    const digito2 = calcularDigito(cpf.slice(0, 9) + digito1, 11);

    return cpf[9] == digito1 && cpf[10] == digito2;
  }

  cpfInput.addEventListener("input", () => {
    const cpfNumerico = cpfInput.value.replace(/\D/g, "").slice(0, 11);
    cpfInput.value = formatCPF(cpfNumerico);

    const cpfValido = cpfNumerico.length === 11 && validarCPF(cpfNumerico);

    if (cpfError) {
      if (cpfValido) {
        cpfError.style.display = "none";
        cpfError.textContent = "";
        btn.classList.remove("disabled");
      } else {
        if (cpfNumerico.length === 11) {
          cpfError.textContent = "CPF inválido. Verifique os números digitados.";
          cpfError.style.display = "block";
          btn.classList.add("disabled");
        } else {
          cpfError.textContent = "";
          cpfError.style.display = "none";
          btn.classList.add("disabled");
        }
      }
    }
  });

  cpfInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  document.querySelector(".continue-button").addEventListener("click", (e) => {
    const cpfNumerico = cpfInput.value.replace(/\D/g, "").slice(0, 11);
    if (!validarCPF(cpfNumerico)) {
      e.preventDefault();
      cpfError.textContent = "CPF inválido. Corrija para continuar.";
      cpfError.style.display = "block";
    } else {
      window.location.href = "../código/senha2.html";
    }
  });
});

