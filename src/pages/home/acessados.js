document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();

    // Dados Fictícios Globais
    const mockVacinas = [
        { id: 'v1', nome: 'Febre Amarela', data: '2023-01-15', dose: 'Dose Única', local: 'Posto Central', lote: 'FA123' },
        { id: 'v2', nome: 'COVID-19 Pfizer', data: '2023-03-20', dose: '2ª Dose', local: 'Drive-Thru Saúde', lote: 'PF456'},
        { id: 'v3', nome: 'Gripe (Influenza)', data: '2024-04-10', dose: 'Anual', local: 'Clínica Prevenir', lote: 'INF789' },
        { id: 'v4', nome: 'Hepatite B', data: '2022-11-05', dose: '3ª Dose', local: 'Posto Central', lote: 'HB012' }
    ];

    const mockProcedimentos = [
        { id: 'p1', nome: 'Consulta Cardiológica de Rotina', data: '2024-05-10', medico: 'Dr. Ricardo Coração', local: 'Hospital de Todos', observacoes: 'Check-up anual, tudo normal.' },
        { id: 'p2', nome: 'Limpeza Dentária', data: '2023-11-22', medico: 'Dra. Soraya Dente', local: 'Clínica Sorriso Feliz', observacoes: 'Profilaxia e aplicação de flúor.' },
        { id: 'p3', nome: 'Exame de Sangue (Hemograma)', data: '2024-01-30', medico: 'Solic. Dr. Geraldo Clínico', local: 'Laboratório Vida', observacoes: 'Resultados dentro dos padrões.' },
        { id: 'p4', nome: 'Sessão de Fisioterapia', data: '2023-09-05', medico: 'Fisio. Ana Mover', local: 'Clínica Reabilitar', observacoes: 'Fortalecimento do joelho esquerdo.' }
    ];

    const mockAtestados = [
        { id: 'a1', motivo: 'Conjuntivite Viral', dataEmissao: '2024-03-01', dataInicio: '2024-03-01', dataFim: '2024-03-05', medico: 'Dr. Olavo Vista', local: 'Clínica OftalmoCenter', cid: 'B30.9' },
        { id: 'a2', motivo: 'Comparecimento em Consulta', dataEmissao: '2023-12-10', dataInicio: '2023-12-10', dataFim: '2023-12-10', medico: 'Dr. Carlos Pontual', local: 'Hospital da Cidade', observacoes: 'Acompanhante.'},
        { id: 'a3', motivo: 'Gastroenterite Aguda', dataEmissao: '2024-05-15', dataInicio: '2024-05-15', dataFim: '2024-05-17', medico: 'Dra. Estela Digest', local: 'UPA Central', cid: 'A09'}
    ];

    // Funções de Renderização
    function renderVacinas(listaVacinasEl, vacinas) {
        if (!listaVacinasEl) return;
        listaVacinasEl.innerHTML = '';
        if (vacinas.length === 0) {
            listaVacinasEl.innerHTML = '<p class="loading-data">Nenhuma vacina encontrada.</p>';
            return;
        }
        vacinas.forEach(vacina => {
            const itemEl = document.createElement('div');
            itemEl.className = 'item-documento';
            itemEl.innerHTML = `
                <h4>${vacina.nome}</h4>
                <p><strong>Data:</strong> ${new Date(vacina.data + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
                <p><strong>Dose:</strong> ${vacina.dose}</p>
                <p><strong>Local:</strong> ${vacina.local}</p>
                <p><strong>Lote:</strong> ${vacina.lote || 'Não informado'}</p>
            `;
            listaVacinasEl.appendChild(itemEl);
        });
    }

    function renderProcedimentos(listaProcedimentosEl, procedimentos) {
        if (!listaProcedimentosEl) return;
        listaProcedimentosEl.innerHTML = '';
        if (procedimentos.length === 0) {
            listaProcedimentosEl.innerHTML = '<p class="loading-data">Nenhum procedimento encontrado.</p>';
            return;
        }
        procedimentos.forEach(proc => {
            const itemEl = document.createElement('div');
            itemEl.className = 'item-documento';
            itemEl.innerHTML = `
                <h4>${proc.nome}</h4>
                <p><strong>Data:</strong> ${new Date(proc.data + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
                <p><strong>Médico/Profissional:</strong> ${proc.medico}</p>
                <p><strong>Local:</strong> ${proc.local}</p>
                ${proc.observacoes ? `<p><strong>Observações:</strong> ${proc.observacoes}</p>` : ''}
            `;
            listaProcedimentosEl.appendChild(itemEl);
        });
    }

    function renderAtestados(listaAtestadosEl, atestados) {
        if (!listaAtestadosEl) return;
        listaAtestadosEl.innerHTML = '';
        if (atestados.length === 0) {
            listaAtestadosEl.innerHTML = '<p class="loading-data">Nenhum atestado encontrado.</p>';
            return;
        }
        atestados.forEach(atestado => {
            const itemEl = document.createElement('div');
            itemEl.className = 'item-documento';
            itemEl.innerHTML = `
                <h4>Atestado: ${atestado.motivo}</h4>
                <p><strong>Data de Emissão:</strong> ${new Date(atestado.dataEmissao + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
                <p><strong>Período:</strong> ${new Date(atestado.dataInicio + 'T00:00:00').toLocaleDateString('pt-BR')} até ${new Date(atestado.dataFim + 'T00:00:00').toLocaleDateString('pt-BR')}</p>
                <p><strong>Médico:</strong> ${atestado.medico}</p>
                <p><strong>Local:</strong> ${atestado.local}</p>
                ${atestado.cid ? `<p><strong>CID:</strong> ${atestado.cid}</p>` : ''}
                ${atestado.observacoes ? `<p><strong>Observações:</strong> ${atestado.observacoes}</p>` : ''}
            `;
            listaAtestadosEl.appendChild(itemEl);
        });
    }

    // Funções de Ordenação
    function sortData(data, Criterio) {
        const dataCopia = [...data]; // Evitar modificar o array original
        switch (Criterio) {
            case 'recentes':
                return dataCopia.sort((a, b) => new Date(b.data || b.dataEmissao) - new Date(a.data || a.dataEmissao));
            case 'antigas':
                return dataCopia.sort((a, b) => new Date(a.data || a.dataEmissao) - new Date(b.data || b.dataEmissao));
            case 'nomeAZ':
                return dataCopia.sort((a, b) => a.nome.localeCompare(b.nome));
            case 'validade': // Específico para atestados, ordena por data de fim mais próxima
                return dataCopia.sort((a, b) => new Date(a.dataFim) - new Date(b.dataFim));
            default:
                return dataCopia;
        }
    }


    // Lógica Específica da Página
    if (currentPage === 'carteira_vacinacao.html') {
        const listaVacinasEl = document.getElementById('listaVacinas');
        const filtroVacinasEl = document.getElementById('filtroVacinas');
        let vacinasOrdenadas = sortData(mockVacinas, 'recentes');
        renderVacinas(listaVacinasEl, vacinasOrdenadas);

        if (filtroVacinasEl) {
            filtroVacinasEl.addEventListener('change', (e) => {
                vacinasOrdenadas = sortData(mockVacinas, e.target.value);
                renderVacinas(listaVacinasEl, vacinasOrdenadas);
            });
        }
    } else if (currentPage === 'historico_procedimentos.html') {
        const listaProcedimentosEl = document.getElementById('listaProcedimentos');
        const filtroProcedimentosEl = document.getElementById('filtroProcedimentos');
        let procedimentosOrdenados = sortData(mockProcedimentos, 'recentes');
        renderProcedimentos(listaProcedimentosEl, procedimentosOrdenados);

        if (filtroProcedimentosEl) {
            filtroProcedimentosEl.addEventListener('change', (e) => {
                procedimentosOrdenados = sortData(mockProcedimentos, e.target.value);
                renderProcedimentos(listaProcedimentosEl, procedimentosOrdenados);
            });
        }
    } else if (currentPage === 'atestados.html') {
        const listaAtestadosEl = document.getElementById('listaAtestados');
        const filtroAtestadosEl = document.getElementById('filtroAtestados');
        let atestadosOrdenados = sortData(mockAtestados, 'recentes'); // Ordena por data de emissão por padrão
        renderAtestados(listaAtestadosEl, atestadosOrdenados);

        if (filtroAtestadosEl) {
            filtroAtestadosEl.addEventListener('change', (e) => {
                atestadosOrdenados = sortData(mockAtestados, e.target.value);
                renderAtestados(listaAtestadosEl, atestadosOrdenados);
            });
        }
    }
    // Adicione aqui a lógica para a página home.html se necessário,
    // como carregar o nome do utilizador, etc.
    // if (currentPage === 'home.html' || currentPage === '') {
    // }
});
