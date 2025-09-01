let cadastro = {};

function salvarcpf(){
    const cpf = document.getElementById('cpf').value;

    fetch('/cadastrar/cpf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: json.stringify({cpf})
    })
    .then( res =>{
        if (res.ok) alert('CPF salvo');
        else alert('Erro ao salvar o CPF');
    })
}

function salvaremail(){
    const email = document.getElementById('email').value;

    fetch('/cadastrar/email', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: json.stringify({email})
    })

}
function salvarsenha(){
    const senha = document.getElementById('new-password').value;

    fetch('cadastrar/senha', {
        method: 'POST',
        header: { 'Content-Type': 'applicaiton/json'},
        body: json.stringify({senha})
    })
}
/*
async function enviarCadastro() {
  const response = await fetch('/cadastro/finalizar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cadastro)
  });

  if (response.ok) {
    alert("Conta criada com sucesso!");
  } else {
    alert("Erro ao cadastrar");
  }
}
*/