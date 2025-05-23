function ativar() {
  const addRem = document.getElementById("addrem");
  const addCon = document.getElementById("addcon");
  const barra = document.getElementById("barra");

  // Verifica se os botões já existem
  const botaoRemExistente = addRem.querySelector(".add");
  const botaoConExistente = addCon.querySelector(".add");

  
  const el = document.getElementById("toggle");
  const img = el.querySelector("img");
    if (el.classList.contains("criar")) {
    el.classList.replace("criar", "criaralt");
    img.src = "imgsLembrete/check.svg";
  } else {
    el.classList.replace("criaralt", "criar");
    img.src = "imgsLembrete/editar.svg";
  }

  // Se já existem, remove ambos
  if (botaoRemExistente || botaoConExistente) {
   if (botaoRemExistente) {
    addRem.classList.remove("expandido");
    setTimeout(() => botaoRemExistente.parentElement.remove(), 400); // espera a transição
  }

  if (botaoConExistente) {
    addCon.classList.remove("expandido");
    setTimeout(() => botaoConExistente.parentElement.remove(), 400);
  }
  
 barra.classList.remove("invisivel"); // mostra

    return;
  }

  // Cria botão para Remédios
  const linkRem = document.createElement("a");
  linkRem.href = "RemECon/Remedios/remedio.html";

  const novoElementoRem = document.createElement("div");
  novoElementoRem.className = "add";
  Object.assign(novoElementoRem.style, {
    height: "6vh",
    width: "6vh",
    alignSelf: "center",
    background: "url(imgsLembrete/add.svg) center/cover no-repeat",
    cursor: "pointer",
  });
addRem.classList.add("expandido");
addCon.classList.add("expandido");
  linkRem.appendChild(novoElementoRem);
  addRem.appendChild(linkRem);

  // Força o repaint antes de adicionar a classe que ativa a transição
  requestAnimationFrame(() => {
    novoElementoRem.classList.add("show");
  });

  // Cria botão para Consultas
  const linkCon = document.createElement("a");
  linkCon.href = "RemECon/Consultas/consultas.html";

  const novoElementoCon = document.createElement("div");
  novoElementoCon.className = "add";
  Object.assign(novoElementoCon.style, {
    height: "6vh",
    width: "6vh",
    alignSelf: "center",
    background: "url(imgsLembrete/add.svg) center/cover no-repeat",
    cursor: "pointer",
  });

  addRem.classList.add("expandido");
  addCon.classList.add("expandido");

  linkCon.appendChild(novoElementoCon);
  addCon.appendChild(linkCon);

  requestAnimationFrame(() => {
    novoElementoCon.classList.add("show");
  });

  barra.classList.add("invisivel"); // esconde

}