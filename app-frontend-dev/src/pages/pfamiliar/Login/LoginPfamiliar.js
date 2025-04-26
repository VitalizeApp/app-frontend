const button = document.getElementById('ciclo');
const img = document.getElementById('olho')
const tipo = document.getElementById('caixasenha')

let mostrando = tipo.type === 'text';

button.addEventListener('click', () => {
  if (mostrando) {
    img.src = '/src/pages/Login/img/visibility_off.svg'
    img.alt = 'Esconder'
    tipo.type = 'password'
  } else {
    img.src = '/src/pages/Login/img/visibility_on.svg'
    img.alt = 'Mostrar'
    tipo.type = 'text'
  }
  mostrando = !mostrando
});