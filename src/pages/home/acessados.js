document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop() || 'home.html';

    const historicoCompleto = [
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

    function formatarDataParaExibicao(dataISO) {
        if (!dataISO) return 'N/D';
        const dataObj = new Date(dataISO + 'T00:00:00');
        return dataObj.toLocaleDateString('pt-BR');
    }

    function renderItems(containerEl, items, itemRenderer, noItemsMessage) {
        if (!containerEl) return;
        containerEl.innerHTML = '';
        if (!items || items.length === 0) {
            containerEl.innerHTML = `<p class="loading-data">${noItemsMessage}</p>`;
            return;
        }
        items.forEach(item => containerEl.appendChild(itemRenderer(item)));
    }

    function createVacinaItem(vacina) {
        const itemEl = document.createElement('div');
        itemEl.className = 'item-documento-card';
        itemEl.innerHTML = `
            <div class="item-icon"><i class="fas fa-syringe"></i></div>
            <div class="item-conteudo">
                <h4>${vacina.nomeEspecifico}</h4>
                <p><strong>Local:</strong> ${vacina.hospital}</p>
                <p><strong>Data:</strong> ${formatarDataParaExibicao(vacina.data)}</p>
            </div>
        `;
        return itemEl;
    }

    function createExameItem(exame) {
        const itemEl = document.createElement('div');
        itemEl.className = 'item-documento-card';
        const iconClass = exame.iconeFa || 'fa-vial';
        itemEl.innerHTML = `
            <div class="item-icon"><i class="fas ${iconClass}"></i></div>
            <div class="item-conteudo">
                <h4>${exame.nomeEspecifico}</h4>
                <p><strong>Local:</strong> ${exame.hospital}</p>
                <p><strong>Data:</strong> ${formatarDataParaExibicao(exame.data)}</p>
            </div>
        `;
        return itemEl;
    }

    function createAtestadoItem(atestado) {
        const itemEl = document.createElement('div');
        itemEl.className = 'item-documento-card';
        itemEl.innerHTML = `
            <div class="item-conteudo">
                <h4>${atestado.hospital}</h4>
                <p><strong>Atestado:</strong> ${atestado.nomeEspecifico}</p>
                <p><strong>Data:</strong> ${formatarDataParaExibicao(atestado.data)}</p>
                ${atestado.turno ? `<p><strong>Turno:</strong> ${atestado.turno}</p>` : ''}
            </div>
            <button class="item-download-button" aria-label="Baixar atestado" data-filename="${atestado.nomeArquivo}" data-content="${encodeURIComponent(atestado.conteudoSimulado)}">
                <i class="fas fa-download"></i>
            </button>
        `;
        itemEl.querySelector('.item-download-button').addEventListener('click', function(e) {
            e.stopPropagation();
            const filename = this.dataset.filename;
            const simulatedContent = decodeURIComponent(this.dataset.content);
            
            const blob = new Blob([simulatedContent], { type: 'text/plain;charset=utf-8' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = filename || 'documento.txt'; // Usa nomeArquivo ou um padrão
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);
            alert(`Download de "${filename || 'documento.txt'}" iniciado (simulado).`);
        });
        return itemEl;
    }

    function sortAndFilterData(data, sortCriteria, filterTerm) {
        let filteredData = [...data];
        if (filterTerm) {
            const lowerFilterTerm = filterTerm.toLowerCase();
            filteredData = filteredData.filter(item =>
                (item.nomeEspecifico && String(item.nomeEspecifico).toLowerCase().includes(lowerFilterTerm)) ||
                (item.hospital && String(item.hospital).toLowerCase().includes(lowerFilterTerm)) ||
                (item.tipoDocumentoGeral && String(item.tipoDocumentoGeral).toLowerCase().includes(lowerFilterTerm)) ||
                (item.conteudoSimulado && String(item.conteudoSimulado).toLowerCase().includes(lowerFilterTerm))
            );
        }

        switch (sortCriteria) {
            case 'recentes':
                return filteredData.sort((a, b) => new Date(b.data) - new Date(a.data));
            case 'antigas':
                return filteredData.sort((a, b) => new Date(a.data) - new Date(b.data));
            case 'nomeAZ':
                return filteredData.sort((a, b) => String(a.nomeEspecifico).localeCompare(String(b.nomeEspecifico)));
            default:
                return filteredData;
        }
    }

    function setupDocumentPage(pageType) {
        const listaEl = document.getElementById('listaDocumentos');
        const filtroEl = document.getElementById('filtroDocumento');
        const searchInputEl = document.getElementById('searchDocumentInput');
        const searchButtonEl = searchInputEl ? searchInputEl.closest('.document-search-wrapper').querySelector('.document-search-button') : null;

        let dataSource;
        let itemRenderer;
        let noItemsMsg;
        let pageTitle = "";

        if (pageType === 'vacinas') {
            dataSource = historicoCompleto.filter(item => item.categoriaProcedimento === 'vacinas');
            itemRenderer = createVacinaItem;
            noItemsMsg = 'Nenhuma vacina encontrada.';
            pageTitle = "Carteira de Vacinação";
            if(searchInputEl) searchInputEl.placeholder = "Procurar vacinas...";
        } else if (pageType === 'exames') {
            dataSource = historicoCompleto.filter(item => 
                item.categoriaProcedimento === 'exames_laboratoriais' || 
                item.categoriaProcedimento === 'exames_imagem'
            );
            itemRenderer = createExameItem;
            noItemsMsg = 'Nenhum exame encontrado.';
            pageTitle = "Exames";
            if(searchInputEl) searchInputEl.placeholder = "Procurar exames...";
        } else if (pageType === 'atestados') {
            dataSource = historicoCompleto.filter(item => item.categoriaProcedimento === 'atestados');
            itemRenderer = createAtestadoItem;
            noItemsMsg = 'Nenhum atestado encontrado.';
            pageTitle = "Atestados";
            if(searchInputEl) searchInputEl.placeholder = "Procurar atestados...";
        } else {
            return; 
        }
        
        const pageTitleEl = document.querySelector('.document-page-title');
        if (pageTitleEl) pageTitleEl.textContent = pageTitle;

        function updateList() {
            const sortCriteria = filtroEl ? filtroEl.value : 'recentes';
            const filterTerm = searchInputEl ? searchInputEl.value : '';
            const sortedAndFilteredData = sortAndFilterData(dataSource, sortCriteria, filterTerm);
            renderItems(listaEl, sortedAndFilteredData, itemRenderer, noItemsMsg);
        }

        if (filtroEl) filtroEl.addEventListener('change', updateList);
        if (searchInputEl && searchButtonEl) {
            searchButtonEl.addEventListener('click', updateList);
            searchInputEl.addEventListener('keypress', (e) => { if (e.key === 'Enter') updateList(); });
            searchInputEl.addEventListener('input', updateList);
        }
        if (listaEl) updateList();
    }

    if (currentPage === 'vacinas.html') {
        setupDocumentPage('vacinas');
    } else if (currentPage === 'exames.html') {
        setupDocumentPage('exames');
    } else if (currentPage === 'atestados.html') {
        setupDocumentPage('atestados');
    }

    const navButtons = document.querySelectorAll('.nav-button');
    let activePageForNav = currentPage.replace('.html', '');
    if (activePageForNav === '') activePageForNav = 'home';

    if (['carteira_vacinacao', 'exames', 'atestados'].includes(activePageForNav)) {
        activePageForNav = 'documentos';
    }

   
});
