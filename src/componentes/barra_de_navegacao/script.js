// menu.js
function inicializarMenu() {
  const list = document.querySelectorAll('.list');
  const indicador = document.querySelectorAll('.circulo');

  function linkAtivo() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');

    // animação do círculo
    if (indicador) {
      const left = this.offsetLeft + this.offsetWidth / 2 - 20;
      indicador.style.left = `${left}px`;
    }

    // redirecionamento
    const destino = this.getAttribute('data-link');
    if (destino) {
      window.location.href = destino;
    }
  }

  list.forEach((item) => {
    item.addEventListener('click', linkAtivo);
  });

  // Ativar o .active correto com base na URL atual
  const urlAtual = window.location.pathname;
  list.forEach((item) => {
    const destino = item.getAttribute('data-link');
    if (urlAtual.includes(destino)) {
      item.classList.add('active');

      // posicionar o círculo na inicialização
      const left = item.offsetLeft + item.offsetWidth / 2 - 20;
      if (indicador) indicador.style.left = `${left}px`;
    }
  });
}
