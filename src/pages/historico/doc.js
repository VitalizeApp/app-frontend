// Dados de exemplo para o histórico (com ID e novos campos)
let historicoCompleto = [
    { id: 1, hospital: 'Hospital São Lucas', data: '10/02/2024', prescricao: 'Antitérmico e repouso', tipo: 'privado', icone: 'fa-hospital-user', nomeArquivo: 'rel_hospitalsaolucas_100224.pdf', conteudoSimulado: 'Paciente João Silva, CPF 123.456.789-00\nConsulta em 10/02/2024\nSintomas: Febre alta, dor de cabeça.\nDiagnóstico: Virose.\nPrescrição: Dipirona 500mg a cada 6 horas. Repouso por 3 dias.\nDr. Carlos Andrade - CRM 12345/SP' },
    { id: 2, hospital: 'Clínica CardioVida', data: '15/03/2024', prescricao: 'Manter medicação e exercícios', tipo: 'privado', icone: 'fa-heart-pulse', nomeArquivo: 'checkup_cardiovida_150324.pdf', conteudoSimulado: 'Paciente Maria Oliveira, CPF 987.654.321-00\nCheck-up Cardiológico Anual - 15/03/2024\nECG: Normal.\nPressão Arterial: 120/80 mmHg.\nRecomendações: Manter medicação atual para hipertensão. Continuar com dieta balanceada e exercícios físicos regulares (caminhada 3x por semana).\nRetorno em 6 meses.\nDra. Ana Costa - CRM 67890/RJ' },
    { id: 3, hospital: 'Instituto Ortopédico', data: '20/04/2024', prescricao: 'Fisioterapia por 4 semanas', tipo: 'privado', icone: 'fa-bone', nomeArquivo: 'enc_ortopedico_200424.pdf', conteudoSimulado: 'Paciente Pedro Santos, CPF 234.567.890-11\nConsulta Ortopédica - 20/04/2024\nQueixa: Dor no joelho direito após atividade física.\nExame Físico: Leve edema, dor à palpação.\nDiagnóstico: Tendinite patelar.\nTratamento: 10 sessões de fisioterapia, anti-inflamatório por 7 dias. Evitar impacto.\nDr. Ricardo Lima - CRM 23456/MG' },
    { id: 4, hospital: 'UPA Cidade Nova', data: '01/05/2024', prescricao: 'Sutura e analgésico', tipo: 'publico', icone: 'fa-house-chimney-medical', nomeArquivo: 'atend_upa_010524.pdf', conteudoSimulado: 'Paciente Carla Dias, CNS 899.0000.1111.2222\nAtendimento UPA Cidade Nova - 01/05/2024\nHistórico: Corte no antebraço esquerdo.\nProcedimento: Limpeza da ferida, sutura com 3 pontos. Administração de analgésico.\nOrientações: Manter curativo limpo e seco. Retirar pontos em 7-10 dias no posto de saúde.\nEnf. Responsável: Mariana Souza - COREN 34567' },
];

// Elementos do DOM
const botoesAba = document.querySelectorAll('.botao-aba');
const conteudosAba = document.querySelectorAll('.conteudo-aba');

const modalUpload = document.getElementById('modalUpload');
const abrirModalUploadBtn = document.getElementById('abrirModalUpload');
const fecharModalUploadBtn = document.getElementById('fecharModalUpload');
const botaoCancelarUpload = document.getElementById('botaoCancelarUpload');
const formularioUpload = document.getElementById('formularioUpload');
const campoArquivoInput = document.getElementById('campoArquivo');
const tipoProcedimentoSelect = document.getElementById('tipoProcedimento');

const modalDetalheExame = document.getElementById('modalDetalheExame');
const fecharModalDetalheBtn = document.getElementById('fecharModalDetalhe');
const tituloDetalheExameEl = document.getElementById('tituloDetalheExame');
const detalheHospitalEl = document.getElementById('detalheHospital');
const detalheDataEl = document.getElementById('detalheData');
const detalhePrescricaoEl = document.getElementById('detalhePrescricao');
const detalheVisibilidadeEl = document.getElementById('detalheVisibilidade');
const conteudoArquivoFormatadoEl = document.getElementById('conteudoArquivoFormatado');
const botaoBaixarExame = document.getElementById('botaoBaixarExame');

let idItemAtualParaBaixar = null; // Armazena o ID do item no modal de detalhes

// Função para criar um item do histórico no HTML
function criarItemHistoricoHTML(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-historico');
    itemDiv.setAttribute('data-id', item.id); // Adiciona data-id para identificar o item

    itemDiv.innerHTML = `
        <div class="icone-item">
            <i class="fas ${item.icone || 'fa-clinic-medical'}"></i>
        </div>
        <div class="detalhes-item">
            <h3>${item.hospital || item.nomeArquivo}</h3>
            <p>Data: ${item.data}</p>
            <p>Prescrição/Tipo: ${item.prescricao || item.tipoProcedimento}</p>
            <p class="texto-pequeno">Visibilidade: ${item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1)}</p>
        </div>
    `;
    // Adiciona evento de clique para abrir detalhes
    itemDiv.addEventListener('click', () => abrirDetalhesExame(item.id));
    return itemDiv;
}

// Função para renderizar itens do histórico
function renderizarHistorico(filtroAba = 'tudo') {
    conteudosAba.forEach(conteudo => conteudo.innerHTML = ''); // Limpa todas as abas

    let itensParaRenderizar;
    const abaAtiva = document.querySelector('.botao-aba.ativo').dataset.aba;

    if (abaAtiva === 'tudo') {
        itensParaRenderizar = historicoCompleto;
    } else {
        itensParaRenderizar = historicoCompleto.filter(item => item.tipo === abaAtiva);
    }

    const containerAlvo = document.getElementById(abaAtiva);

    if (containerAlvo) {
        if (itensParaRenderizar.length === 0) {
            containerAlvo.innerHTML = `<p class="sem-registros">Nenhum registro encontrado.</p>`;
        } else {
            // Ordena por ID decrescente para mostrar os mais recentes primeiro
            itensParaRenderizar.sort((a, b) => b.id - a.id).forEach(item => {
                containerAlvo.appendChild(criarItemHistoricoHTML(item));
            });
        }
    }
}

// Manipulação das Abas
botoesAba.forEach(botao => {
    botao.addEventListener('click', () => {
        const abaAlvoId = botao.dataset.aba;

        botoesAba.forEach(btn => btn.classList.remove('ativo'));
        botao.classList.add('ativo');

        conteudosAba.forEach(conteudo => conteudo.classList.remove('conteudo-ativo'));
        const conteudoAtivo = document.getElementById(abaAlvoId);
        if (conteudoAtivo) {
            conteudoAtivo.classList.add('conteudo-ativo');
        }
        renderizarHistorico(abaAlvoId);
    });
});

// --- Lógica do Modal de Upload ---
function mostrarModalUpload() {
    modalUpload.classList.add('mostrar');
}
function fecharModalUpload() {
    modalUpload.classList.remove('mostrar');
    formularioUpload.reset();
}

abrirModalUploadBtn.addEventListener('click', mostrarModalUpload);
fecharModalUploadBtn.addEventListener('click', fecharModalUpload);
botaoCancelarUpload.addEventListener('click', fecharModalUpload);

formularioUpload.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const arquivo = campoArquivoInput.files[0];
    const tipoProcedimento = tipoProcedimentoSelect.value;
    const visibilidade = document.querySelector('input[name="visibilidade"]:checked').value;

    if (arquivo && tipoProcedimento) {
        const novoId = historicoCompleto.length > 0 ? Math.max(...historicoCompleto.map(item => item.id)) + 1 : 1;
        const dataAtual = new Date().toLocaleDateString('pt-BR');

        const novoItem = {
            id: novoId,
            hospital: `Documento Enviado (${tipoProcedimento})`, // Simulação
            data: dataAtual,
            prescricao: tipoProcedimento, // Usando tipoProcedimento como prescrição para simplificar
            tipo: visibilidade, // 'privado' ou 'publico'
            icone: 'fa-file-alt', // Ícone genérico para arquivo
            nomeArquivo: arquivo.name,
            conteudoSimulado: `Arquivo: ${arquivo.name}\nTipo: ${arquivo.type}\nTamanho: ${Math.round(arquivo.size / 1024)} KB\nVisibilidade: ${visibilidade}\n\nEste é um conteúdo simulado para o arquivo enviado.`
        };

        historicoCompleto.push(novoItem);
        renderizarHistorico(); // Re-renderiza a aba ativa
        fecharModalUpload();
        alert(`Documento "${arquivo.name}" enviado como ${visibilidade} e adicionado ao histórico!`);
    } else {
        alert('Por favor, selecione um arquivo, o tipo de procedimento e a visibilidade.');
    }
});


// --- Lógica do Modal de Detalhes do Exame ---
function abrirDetalhesExame(idItem) {
    const item = historicoCompleto.find(i => i.id === idItem);
    if (!item) return;

    idItemAtualParaBaixar = idItem; // Define o ID para o botão de baixar

    tituloDetalheExameEl.textContent = item.hospital || item.nomeArquivo;
    detalheHospitalEl.textContent = item.hospital || 'N/A';
    detalheDataEl.textContent = item.data;
    detalhePrescricaoEl.textContent = item.prescricao || item.tipoProcedimento || 'N/A';
    detalheVisibilidadeEl.textContent = item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1);
    conteudoArquivoFormatadoEl.textContent = item.conteudoSimulado || 'Nenhum conteúdo detalhado disponível.';

    modalDetalheExame.classList.add('mostrar');
}

function fecharModalDetalhes() {
    modalDetalheExame.classList.remove('mostrar');
    idItemAtualParaBaixar = null;
}
fecharModalDetalheBtn.addEventListener('click', fecharModalDetalhes);

// Fechar modais clicando fora deles
window.addEventListener('click', (evento) => {
    if (evento.target === modalUpload) {
        fecharModalUpload();
    }
    if (evento.target === modalDetalheExame) {
        fecharModalDetalhes();
    }
});

// Lógica de Download Simulado
botaoBaixarExame.addEventListener('click', () => {
    if (idItemAtualParaBaixar === null) return;

    const item = historicoCompleto.find(i => i.id === idItemAtualParaBaixar);
    if (!item) {
        alert("Erro: Item não encontrado para download.");
        return;
    }

    const nomeArquivoDownload = item.nomeArquivo ? item.nomeArquivo.split('.')[0] + '_detalhes.txt' : `exame_${item.id}_detalhes.txt`;
    let conteudoParaBaixar = `DETALHES DO DOCUMENTO/EXAME\n`;
    conteudoParaBaixar += `------------------------------------------\n`;
    conteudoParaBaixar += `ID: ${item.id}\n`;
    conteudoParaBaixar += `Nome Original: ${item.nomeArquivo || 'N/A'}\n`;
    conteudoParaBaixar += `Instituição/Origem: ${item.hospital || 'Documento Pessoal'}\n`;
    conteudoParaBaixar += `Data: ${item.data}\n`;
    conteudoParaBaixar += `Tipo/Prescrição: ${item.prescricao || item.tipoProcedimento || 'N/A'}\n`;
    conteudoParaBaixar += `Visibilidade: ${item.tipo}\n`;
    conteudoParaBaixar += `------------------------------------------\n\n`;
    conteudoParaBaixar += `CONTEÚDO SIMULADO:\n${item.conteudoSimulado || 'Sem conteúdo adicional.'}`;

    const blob = new Blob([conteudoParaBaixar], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const linkDownload = document.createElement('a');
    linkDownload.href = url;
    linkDownload.download = nomeArquivoDownload;
    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
    URL.revokeObjectURL(url);

    alert(`Download de "${nomeArquivoDownload}" iniciado (simulação).`);
});


// Inicializa a visualização
document.addEventListener('DOMContentLoaded', () => {
    const abaTudoBotao = document.querySelector('.botao-aba[data-aba="tudo"]');
    const conteudoTudo = document.getElementById('tudo');

    if (abaTudoBotao) abaTudoBotao.classList.add('ativo');
    if (conteudoTudo) conteudoTudo.classList.add('conteudo-ativo');

    renderizarHistorico('tudo');
});
