// Dados de exemplo (adaptar conforme necessário)
let historicoCompleto = [
    { id: 1, hospital: 'Clínica Imuniza', data: '2023-04-10', tipo: 'privado', iconeFa: 'fa-syringe', nomeArquivo: 'vac_febreamarela_100423.pdf', tipoDocumentoGeral: 'Carteira de Vacina', nomeEspecifico: 'Vacina Febre Amarela', categoriaProcedimento: 'vacinas', conteudoSimulado: 'Lote: FA123\nDose: Única\nLocal: Clínica Imuniza Bem' },
    { id: 2, hospital: 'Hospital VitaCheck', data: '2024-01-15', tipo: 'privado', iconeFa: 'fa-vial', nomeArquivo: 'hemograma_anual_150124.pdf', tipoDocumentoGeral: 'Exame Laboratorial', nomeEspecifico: 'Hemograma Completo', categoriaProcedimento: 'exames_laboratoriais', conteudoSimulado: 'Leucócitos: 7.500/mm³' },
    { id: 3, hospital: 'Posto de Saúde Central', data: '2023-05-20', tipo: 'publico', iconeFa: 'fa-syringe', nomeArquivo: 'vac_gripe_200523.pdf', tipoDocumentoGeral: 'Carteira de Vacina', nomeEspecifico: 'Vacina Influenza (Gripe)', categoriaProcedimento: 'vacinas', conteudoSimulado: 'Lote: GRIPE2023-XYZ\nDose: Anual' },
    { id: 4, hospital: 'Clínica ImagemX', data: '2024-02-22', tipo: 'privado', iconeFa: 'fa-x-ray', nomeArquivo: 'raiox_torax_220224.pdf', tipoDocumentoGeral: 'Exame de Imagem', nomeEspecifico: 'Raio-X do Tórax PA/Perfil', categoriaProcedimento: 'exames_imagem', conteudoSimulado: 'Sem alterações significativas.' },
    { id: 5, hospital: 'Consultório Dr. Silva', data: '2024-03-05', tipo: 'privado', iconeFa: 'fa-file-medical', nomeArquivo: 'atestado_aptidao_050324.pdf', tipoDocumentoGeral: 'Atestado Médico', nomeEspecifico: 'Atestado de Aptidão Física', categoriaProcedimento: 'atestados', conteudoSimulado: 'Apto para atividades físicas.', turno: 'Integral' },
    { id: 6, hospital: 'Clínica Imuniza', data: '2024-04-26', tipo: 'privado', iconeFa: 'fa-syringe', nomeArquivo: 'vac_hepatiteb_100424.pdf', tipoDocumentoGeral: 'Carteira de Vacina', nomeEspecifico: 'Vacina Hepatite B', categoriaProcedimento: 'vacinas', conteudoSimulado: 'Lote: HB456\nDose: 1ª Dose' },
    { id: 7, hospital: 'Hospital Geral do Estado', data: '2025-03-05', tipo: 'publico', iconeFa: 'fa-syringe', nomeArquivo: 'vac_hepatiteA_050325.pdf', tipoDocumentoGeral: 'Carteira de Vacina', nomeEspecifico: 'Vacina Hepatite A', categoriaProcedimento: 'vacinas', conteudoSimulado: 'Lote: HA789\nDose: Única'},
    { id: 8, hospital: 'Hospital Geral do Estado', data: '2025-01-08', tipo: 'publico', iconeFa: 'fa-syringe', nomeArquivo: 'vac_influenza_080125.pdf', tipoDocumentoGeral: 'Carteira de Vacina', nomeEspecifico: 'Vacina Influenza', categoriaProcedimento: 'vacinas', conteudoSimulado: 'Lote: FLU2025\nDose: Anual'},
    { id: 9, hospital: 'Hospital Geral do Estado', data: '2025-04-30', tipo: 'publico', iconeFa: 'fa-vial', nomeArquivo: 'hemograma_300425.pdf', tipoDocumentoGeral: 'Exame Laboratorial', nomeEspecifico: 'Hemograma completo', categoriaProcedimento: 'exames_laboratoriais', conteudoSimulado: 'Valores de referência.'},
    { id: 10, hospital: 'Hospital Geral do Estado', data: '2025-03-10', tipo: 'publico', iconeFa: 'fa-vial', nomeArquivo: 'colesterol_100325.pdf', tipoDocumentoGeral: 'Exame Laboratorial', nomeEspecifico: 'Colesterol (Perfil lipídico)', categoriaProcedimento: 'exames_laboratoriais', conteudoSimulado: 'HDL, LDL, Triglicerídeos.'},
    { id: 11, hospital: 'Hospital Geral do Estado', data: '2025-01-08', tipo: 'publico', iconeFa: 'fa-vial', nomeArquivo: 'glicemia_080125.pdf', tipoDocumentoGeral: 'Exame Laboratorial', nomeEspecifico: 'Glicemia', categoriaProcedimento: 'exames_laboratoriais', conteudoSimulado: 'Glicose em jejum.'},
    { id: 12, hospital: 'Hospital Geral do Estado', data: '2025-04-26', tipo: 'publico', iconeFa: 'fa-file-medical', nomeArquivo: 'atestado_HGE_260425.pdf', tipoDocumentoGeral: 'Atestado Médico', nomeEspecifico: 'Atestado de Comparecimento', categoriaProcedimento: 'atestados', turno: 'Matutino', conteudoSimulado: 'Compareceu à consulta.'},
    { id: 13, hospital: 'Hospital Geral do Estado', data: '2025-03-05', tipo: 'publico', iconeFa: 'fa-file-medical', nomeArquivo: 'atestado_HGE_050325.pdf', tipoDocumentoGeral: 'Atestado Médico', nomeEspecifico: 'Atestado para Repouso', categoriaProcedimento: 'atestados', turno: 'Vespertino', conteudoSimulado: 'Repouso por 2 dias.'},
    { id: 14, hospital: 'Hospital Geral do Estado', data: '2025-01-08', tipo: 'publico', iconeFa: 'fa-file-medical', nomeArquivo: 'atestado_HGE_080125.pdf', tipoDocumentoGeral: 'Atestado Médico', nomeEspecifico: 'Atestado para Justificativa', categoriaProcedimento: 'atestados', turno: 'Matutino', conteudoSimulado: 'Necessidade de ausência.'},
];

// Elementos do DOM
const tituloPrincipalHistoricoEl = document.getElementById('tituloPrincipalHistorico');
const navegacaoPrincipalAbasEl = document.getElementById('navegacaoPrincipalAbas');
const containerListaGeralEl = document.getElementById('containerListaGeral');
const containerVisaoEspecificaEl = document.getElementById('containerVisaoEspecifica');
const tituloVisaoEspecificaEl = document.getElementById('tituloVisaoEspecifica');
const barraProcuraEspecificaEl = document.getElementById('barraProcuraEspecifica');
const listaDocumentosEspecificosEl = document.getElementById('listaDocumentosEspecificos');
const botaoVoltarPrincipalEl = document.getElementById('botaoVoltarPrincipal');

const botoesAbaGeral = document.querySelectorAll('#navegacaoPrincipalAbas .botao-aba');
const conteudosAbaGeral = document.querySelectorAll('#containerListaGeral .conteudo-aba');

// Modal Upload
const modalUpload = document.getElementById('modalUpload');
const abrirModalUploadBtn = document.getElementById('abrirModalUpload');
const fecharModalUploadBtn = document.getElementById('fecharModalUpload');
const botaoCancelarUpload = document.getElementById('botaoCancelarUpload');
const formularioUpload = document.getElementById('formularioUpload');
const campoArquivoInput = document.getElementById('campoArquivo');
const tipoProcedimentoUploadSelect = document.getElementById('tipoProcedimentoUpload');
const nomeEspecificoDocumentoInput = document.getElementById('nomeEspecificoDocumento');


// Modal Detalhes
const modalDetalheExame = document.getElementById('modalDetalheExame');
const fecharModalDetalheBtn = document.getElementById('fecharModalDetalhe');
const tituloDetalheExameEl = document.getElementById('tituloDetalheExame');
const detalheNomeDocumentoEl = document.getElementById('detalheNomeDocumento');
const detalheHospitalEl = document.getElementById('detalheHospital');
const detalheDataEl = document.getElementById('detalheData');
const detalhePrescricaoEl = document.getElementById('detalhePrescricao'); // Usado para Tipo Geral
const detalheVisibilidadeEl = document.getElementById('detalheVisibilidade');
const conteudoArquivoFormatadoEl = document.getElementById('conteudoArquivoFormatado');
const botaoBaixarExame = document.getElementById('botaoBaixarExame');
let idItemAtualParaBaixar = null;

// --- FUNÇÕES DE RENDERIZAÇÃO ---

// Formatar data para exibição (DD/MM/YYYY)
function formatarDataExibicao(dataISO) {
    if (!dataISO) return 'Data não informada';
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
}

// Criar HTML para item da lista geral de histórico
function criarItemHistoricoGeralHTML(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-historico');
    itemDiv.setAttribute('data-id', item.id);
    itemDiv.innerHTML = `
        <div class="icone-item">
            <i class="fas ${item.icone || 'fa-file-alt'}"></i>
        </div>
        <div class="detalhes-item">
            <h3>${item.nomeEspecifico || item.tipoDocumentoGeral}</h3>
            <p>${item.hospital || 'Local não informado'}</p>
            <p class="texto-pequeno">Data: ${formatarDataExibicao(item.data)}</p>
        </div>
    `;
    itemDiv.addEventListener('click', () => abrirDetalhesDocumento(item.id));
    return itemDiv;
}

// Renderizar lista geral de histórico (Tudo, Privado, Público)
function renderizarListaGeral(filtroVisibilidade = 'tudo') {
    conteudosAbaGeral.forEach(conteudo => conteudo.innerHTML = '');
    let itensParaRenderizar;

    if (filtroVisibilidade === 'tudo') {
        itensParaRenderizar = historicoCompleto;
    } else {
        itensParaRenderizar = historicoCompleto.filter(item => item.tipo === filtroVisibilidade);
    }

    // Ordenar por data mais recente
    itensParaRenderizar.sort((a, b) => new Date(b.data) - new Date(a.data));

    const containerAlvo = document.getElementById(filtroVisibilidade);
    if (containerAlvo) {
        if (itensParaRenderizar.length === 0) {
            containerAlvo.innerHTML = `<p class="sem-registros">Nenhum registro encontrado.</p>`;
        } else {
            itensParaRenderizar.forEach(item => {
                containerAlvo.appendChild(criarItemHistoricoGeralHTML(item));
            });
        }
    }
}

// Criar HTML para item da lista de documentos específicos
function criarItemDocumentoEspecificoHTML(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-documento-especifico');
    itemDiv.setAttribute('data-id', item.id); // Para abrir detalhes
    itemDiv.innerHTML = `
        <h4>${item.nomeEspecifico || 'Documento sem nome'}</h4>
        <p>${item.hospital || 'Local não informado'}</p>
        <p class="data-documento">Data: ${formatarDataExibicao(item.data)}</p>
    `;
    itemDiv.addEventListener('click', () => abrirDetalhesDocumento(item.id));
    return itemDiv;
}

// Renderizar visão de procedimento específico (Ex: Carteira de Vacinação)
function renderizarVisaoProcedimento(categoria, termoBusca = '') {
    listaDocumentosEspecificosEl.innerHTML = '';
    let itensFiltrados = historicoCompleto.filter(item => item.categoriaProcedimento === categoria);

    if (termoBusca) {
        const termo = termoBusca.toLowerCase();
        itensFiltrados = itensFiltrados.filter(item =>
            (item.nomeEspecifico && item.nomeEspecifico.toLowerCase().includes(termo)) ||
            (item.hospital && item.hospital.toLowerCase().includes(termo)) ||
            (item.tipoDocumentoGeral && item.tipoDocumentoGeral.toLowerCase().includes(termo))
        );
    }

    // Ordenar por data mais recente
    itensFiltrados.sort((a, b) => new Date(b.data) - new Date(a.data));

    if (itensFiltrados.length === 0) {
        listaDocumentosEspecificosEl.innerHTML = `<p class="sem-registros">Nenhum documento encontrado para esta categoria.</p>`;
    } else {
        itensFiltrados.forEach(item => {
            listaDocumentosEspecificosEl.appendChild(criarItemDocumentoEspecificoHTML(item));
        });
    }
}

// --- LÓGICA DE NAVEGAÇÃO E VISUALIZAÇÃO ---
function mostrarVisaoGeral() {
    tituloPrincipalHistoricoEl.textContent = 'Histórico';
    navegacaoPrincipalAbasEl.style.display = 'flex';
    containerListaGeralEl.style.display = 'block';
    containerVisaoEspecificaEl.style.display = 'none';
    botaoVoltarPrincipalEl.style.display = 'none'; // Esconde botão de voltar
    // Garante que a aba "Tudo" esteja ativa e renderizada
    const abaTudo = document.querySelector('#navegacaoPrincipalAbas .botao-aba[data-aba="tudo"]');
    if (abaTudo) {
        botoesAbaGeral.forEach(btn => btn.classList.remove('ativo'));
        conteudosAbaGeral.forEach(cont => cont.classList.remove('conteudo-ativo'));
        abaTudo.classList.add('ativo');
        document.getElementById('tudo').classList.add('conteudo-ativo');
        renderizarListaGeral('tudo');
    }
}

function mostrarVisaoEspecifica(categoria) {
    const titulos = {
        vacinas: 'Carteira de Vacinação',
        exames_laboratoriais: 'Exames Laboratoriais',
        exames_imagem: 'Exames de Imagem',
        atestados: 'Atestados Médicos',
        // Adicionar outros conforme necessário
    };
    const titulo = titulos[categoria] || 'Documentos';

    tituloPrincipalHistoricoEl.textContent = titulo; // Muda o título principal da página
    tituloVisaoEspecificaEl.textContent = titulo; // Título dentro da seção específica (pode ser redundante ou removido)
    navegacaoPrincipalAbasEl.style.display = 'none';
    containerListaGeralEl.style.display = 'none';
    containerVisaoEspecificaEl.style.display = 'block';
    botaoVoltarPrincipalEl.style.display = 'flex'; // Mostra botão de voltar

    // Limpa e configura a barra de busca para a categoria atual
    barraProcuraEspecificaEl.value = '';
    barraProcuraEspecificaEl.oninput = () => renderizarVisaoProcedimento(categoria, barraProcuraEspecificaEl.value);
    
    renderizarVisaoProcedimento(categoria);
}

// --- MODAL DE DETALHES ---
function abrirDetalhesDocumento(idItem) {
    const item = historicoCompleto.find(i => i.id === idItem);
    if (!item) return;
    idItemAtualParaBaixar = idItem;

    tituloDetalheExameEl.textContent = item.nomeEspecifico || item.tipoDocumentoGeral || 'Detalhes do Documento';
    detalheNomeDocumentoEl.textContent = item.nomeEspecifico || 'Não especificado';
    detalheHospitalEl.textContent = item.hospital || 'N/A';
    detalheDataEl.textContent = formatarDataExibicao(item.data);
    detalhePrescricaoEl.textContent = item.tipoDocumentoGeral || 'N/A'; // Usando campo prescricao para tipo geral
    detalheVisibilidadeEl.textContent = item.tipo.charAt(0).toUpperCase() + item.tipo.slice(1);
    conteudoArquivoFormatadoEl.textContent = item.conteudoSimulado || 'Nenhum conteúdo detalhado disponível.';
    modalDetalheExame.classList.add('mostrar');
}
function fecharModalDetalhes() {
    modalDetalheExame.classList.remove('mostrar');
    idItemAtualParaBaixar = null;
}
fecharModalDetalheBtn.addEventListener('click', fecharModalDetalhes);

// --- MODAL DE UPLOAD ---
function mostrarModalUpload() { modalUpload.classList.add('mostrar'); }
function fecharModalUpload() { modalUpload.classList.remove('mostrar'); formularioUpload.reset(); }
abrirModalUploadBtn.addEventListener('click', mostrarModalUpload);
fecharModalUploadBtn.addEventListener('click', fecharModalUpload);
botaoCancelarUpload.addEventListener('click', fecharModalUpload);

formularioUpload.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const arquivo = campoArquivoInput.files[0];
    const tipoDocumentoGeral = tipoProcedimentoUploadSelect.value;
    const nomeEspecifico = nomeEspecificoDocumentoInput.value;
    const visibilidade = document.querySelector('input[name="visibilidade"]:checked').value;

    // Mapear tipoDocumentoGeral para categoriaProcedimento e ícone
    const mapTipoParaCategoria = {
        'Carteira de Vacina': { categoria: 'vacinas', icone: 'fa-syringe' },
        'Exame Laboratorial': { categoria: 'exames_laboratoriais', icone: 'fa-notes-medical' },
        'Exame de Imagem': { categoria: 'exames_imagem', icone: 'fa-x-ray' },
        'Atestado Médico': { categoria: 'atestados', icone: 'fa-file-medical' },
        'Consulta Médica': { categoria: 'consultas', icone: 'fa-user-doctor' },
        'Receita Médica': { categoria: 'receitas', icone: 'fa-prescription-bottle-medical' },
        'Relatório de Consulta': { categoria: 'relatorios', icone: 'fa-file-invoice' },
        'Laudo Médico': { categoria: 'laudos', icone: 'fa-file-signature' },
        'Outro': { categoria: 'outros', icone: 'fa-file-alt' }
    };
    const infoCategoria = mapTipoParaCategoria[tipoDocumentoGeral] || mapTipoParaCategoria['Outro'];

    if (arquivo && tipoDocumentoGeral && nomeEspecifico) {
        const novoId = historicoCompleto.length > 0 ? Math.max(...historicoCompleto.map(item => item.id)) + 1 : 1;
        // Usar data atual ou permitir que o usuário insira a data do documento? Por ora, data atual.
        const dataAtual = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

        const novoItem = {
            id: novoId,
            hospital: `Documento Enviado`, // Poderia ser um campo "Origem"
            data: dataAtual,
            tipo: visibilidade,
            icone: infoCategoria.icone,
            nomeArquivo: arquivo.name,
            tipoDocumentoGeral: tipoDocumentoGeral,
            nomeEspecifico: nomeEspecifico,
            categoriaProcedimento: infoCategoria.categoria,
            conteudoSimulado: `Arquivo: ${arquivo.name}\nTipo Geral: ${tipoDocumentoGeral}\nNome: ${nomeEspecifico}\nVisibilidade: ${visibilidade}\n\nConteúdo simulado.`
        };
        historicoCompleto.push(novoItem);
        
        // Verifica se uma visão específica está ativa e atualiza, senão atualiza a geral
        const urlParams = new URLSearchParams(window.location.search);
        const viewParam = urlParams.get('view');
        if (viewParam && containerVisaoEspecificaEl.style.display === 'block') {
            renderizarVisaoProcedimento(viewParam, barraProcuraEspecificaEl.value);
        } else {
            const abaAtivaGeral = document.querySelector('#navegacaoPrincipalAbas .botao-aba.ativo')?.dataset.aba || 'tudo';
            renderizarListaGeral(abaAtivaGeral);
        }
        fecharModalUpload();
        alert(`Documento "${nomeEspecifico}" enviado!`);
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});

// --- DOWNLOAD SIMULADO ---
botaoBaixarExame.addEventListener('click', () => { /* ... (código de download existente, adaptar campos se necessário) ... */ });


// --- INICIALIZAÇÃO E EVENTOS ---
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewParam = urlParams.get('view'); // Ex: ?view=vacinas

    if (viewParam) {
        mostrarVisaoEspecifica(viewParam);
    } else {
        mostrarVisaoGeral();
    }

    // Eventos para abas da lista geral
    botoesAbaGeral.forEach(botao => {
        botao.addEventListener('click', () => {
            const abaAlvoId = botao.dataset.aba;
            botoesAbaGeral.forEach(btn => btn.classList.remove('ativo'));
            botao.classList.add('ativo');
            conteudosAbaGeral.forEach(conteudo => conteudo.classList.remove('conteudo-ativo'));
            const conteudoAtivo = document.getElementById(abaAlvoId);
            if (conteudoAtivo) {
                conteudoAtivo.classList.add('conteudo-ativo');
            }
            renderizarListaGeral(abaAlvoId);
        });
    });

    // Evento para o botão de voltar da visão específica para a geral
    botaoVoltarPrincipalEl.addEventListener('click', (e) => {
        e.preventDefault();
        // Limpa o parâmetro 'view' da URL para não recarregar a visão específica ao atualizar
        history.pushState(null, '', window.location.pathname); 
        mostrarVisaoGeral();
    });
});

// Fechar modais clicando fora
window.addEventListener('click', (evento) => {
    if (evento.target === modalUpload) fecharModalUpload();
    if (evento.target === modalDetalheExame) fecharModalDetalhes();
});
