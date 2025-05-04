const btnBack = document.querySelector('.btn-back');
const confirmButton = document.getElementById('confirm-button');

btnBack.addEventListener('click',()=> window.history.back());
confirmButton.addEventListener('click',()=>{
  const nome = document.getElementById('name').value.trim();
  const data = document.getElementById('date').value;
  const hora = document.getElementById('time').value;
  if(nome && data && hora) {
    alert(`Consulta agendada para ${nome} em ${data} às ${hora}`);
    // aqui você pode redirecionar ou enviar dados a um servidor
  } else {
    alert('Preencha todos os campos antes de confirmar.');
  }
});