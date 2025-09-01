document.addEventListener("DOMContentLoaded", () => {
  const senhaInput = document.getElementById("senha");
  const toggle = document.getElementById("toggleSenha");
  const cpfInput = document.getElementById("cpf");
  const cpfError = document.getElementById("cpf-error");

  toggle.addEventListener("click", () => {
    const tipo = senhaInput.type === "password" ? "text" : "password";
    senhaInput.type = tipo;
    toggle.src =
      tipo === "password"
        ? "/src/pages/Login/img/visibility_on.svg"
        : "/src/pages/Login/img/visibility_off.svg";
    toggle.alt = tipo === "password" ? "Mostrar senha" : "Esconder senha";
  });

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
      } else {
        if (cpfNumerico.length === 11) {
          cpfError.textContent = "CPF inválido. Verifique os números digitados.";
          cpfError.style.display = "block";
        } else {
          cpfError.textContent = "";
          cpfError.style.display = "none";
        }
      }
    }
  });

  cpfInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      senhaInput.focus();
    }
  });

  document.querySelector(".campoBotao").addEventListener("click", (e) => {
    const cpfNumerico = cpfInput.value.replace(/\D/g, "").slice(0, 11);
    if (!validarCPF(cpfNumerico)) {
      e.preventDefault();
      cpfError.textContent = "CPF inválido. Corrija para continuar.";
      cpfError.style.display = "block";
    } else {
      
    }
  });
});

document.getElementById('loginform').addEventListener('submit', async (e) => {
  e.preventDefault(); // impede o envio automático

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    // se login deu certo → vai para a próxima página
    window.location.href = "/geral/pages/home/home.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
});