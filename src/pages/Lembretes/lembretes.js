function ativar() {
  const addRem = document.getElementById("addrem");
  const addCon = document.getElementById("addcon");

  // Verifica se os botões já existem
  const botaoRemExistente = addRem.querySelector(".add");
  const botaoConExistente = addCon.querySelector(".add");

  // Se já existem, remove ambos
  if (botaoRemExistente || botaoConExistente) {
    if (botaoRemExistente) botaoRemExistente.remove();
    if (botaoConExistente) botaoConExistente.remove();
    return;
  }

  // Cria botão para Remédios
  const linkRem = document.createElement("a");
  linkRem.href = "remedios.html";

  const novoElementoRem = document.createElement("div");
  novoElementoRem.className = "add";
  novoElementoRem.style.height = "6vh";
  novoElementoRem.style.width = "6vh";
  novoElementoRem.style.alignSelf = "center";
  novoElementoRem.style.background = "url(imgsLembrete/add.svg) center/cover no-repeat";
  novoElementoRem.style.cursor = "pointer";

  linkRem.appendChild(novoElementoRem);
  addRem.appendChild(linkRem);

  // Cria botão para Consultas
  const linkCon = document.createElement("a");
  linkCon.href = "consultas.html";

  const novoElementoCon = document.createElement("div");
  novoElementoCon.className = "add";
  novoElementoCon.style.height = "6vh";
  novoElementoCon.style.width = "6vh";
  novoElementoCon.style.alignSelf = "center";
  novoElementoCon.style.background = "url(imgsLembrete/add.svg) center/cover no-repeat";
  novoElementoCon.style.cursor = "pointer";

  linkCon.appendChild(novoElementoCon);
  addCon.appendChild(linkCon);
}