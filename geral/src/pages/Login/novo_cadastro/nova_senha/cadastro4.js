document.addEventListener("DOMContentLoaded", () => {
  const senhaInput = document.getElementById("new-password");
  const confirmSenhaInput = document.getElementById("confirm-password");
  const alertaSticky = document.getElementById("senha-alerta");
  const concluirBtn = document.querySelector(".conclude-button");

  const reqs = {
    length: document.getElementById("req-length"),
    upper: document.getElementById("req-upper"),
    lower: document.getElementById("req-lower"),
    number: document.getElementById("req-number"),
    special: document.getElementById("req-special"),
  };

  function verificarRequisitos(senha) {
    reqs.length.checked = /.{8,}/.test(senha);
    reqs.upper.checked = /[A-Z]/.test(senha);
    reqs.lower.checked = /[a-z]/.test(senha);
    reqs.number.checked = /\d/.test(senha);
    reqs.special.checked = /[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]/.test(senha);
  }

  function mostrarSticky(mensagem, tipo) {
    alertaSticky.textContent = mensagem;
    alertaSticky.className = `sticky-alert show ${tipo}`;
  }

  function verificarSenhasIguais() {
    const senha = senhaInput.value;
    const confirm = confirmSenhaInput.value;

    if (!senha || !confirm) {
      alertaSticky.classList.remove("show");
      concluirBtn.disabled = true;
      concluirBtn.style.opacity = "0.6";
      return;
    }

    if (senha === confirm) {
      mostrarSticky("✔️ As senhas coincidem.", "success");
      concluirBtn.disabled = false;
      concluirBtn.style.opacity = "1";
    } else {
      mostrarSticky("❌ As senhas não coincidem.", "error");
      concluirBtn.disabled = true;
      concluirBtn.style.opacity = "0.6";
    }
  }

  senhaInput.addEventListener("input", () => {
    verificarRequisitos(senhaInput.value);
    verificarSenhasIguais();
  });

  confirmSenhaInput.addEventListener("input", verificarSenhasIguais);

  // Inicialmente desabilita o botão
  concluirBtn.disabled = true;
  concluirBtn.style.opacity = "0.6";
});
