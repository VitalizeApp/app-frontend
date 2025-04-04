function alterarModo(){
    document.body.classList.toggle("dark-mode");
}


fetch('/src/componentes/barra_de_navegacao/index.html')
.then(response => response.text())
.then(html => {
    document.getElementById('barraDeNavegacao').innerHTML = html;
    
    // Carregar CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/componentes/barra_de_navegacao/menu.css';
    document.head.appendChild(link);
    
    // Carregar JS
    const script = document.createElement('script');
    script.src = '/src/componentes/barra_de_navegacao/script.js';
    document.body.appendChild(script);
});



