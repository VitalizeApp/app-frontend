// Carregar o menu dentro da div com id "barraDeNavegacao"
fetch('../../componentes/barra_de_navegacao/index.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('barraDeNavegacao').innerHTML = html;

        // Adiciona o CSS do menu
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../../componentes/barra_de_navegacao/menu.css';
        document.head.appendChild(link);

        // Adiciona o script do menu
        const script = document.createElement('script');
        script.src = '../../componentes/barra_de_navegacao/script.js';
        document.body.appendChild(script);
    });

// Função para alternar modo escuro
function alterarModo() {
    document.body.classList.toggle("dark-mode");
}
