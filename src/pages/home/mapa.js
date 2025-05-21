document.addEventListener('DOMContentLoaded', () => {
  // --- Elementos Comuns ---
  const locationRequestPromptEl = document.getElementById('locationRequestPrompt');
  const dismissLocationPromptButtonEl = document.getElementById('dismissLocationPrompt');
  const currentYearEl = document.getElementById('currentYear');

  // --- Elementos da Tela de Mapa (mapa.html) ---
  const mapSearchTypeEl = document.getElementById('mapSearchType');
  const mapSearchTermEl = document.getElementById('mapSearchTerm');
  const mapSearchTermLabelEl = document.getElementById('mapSearchTermLabel');
  const mapSearchButtonEl = document.getElementById('mapSearchButton');
  const mapSearchResultsEl = document.getElementById('mapSearchResults');
  const mapFrameContainerEl = document.getElementById('mapFrameContainer');
  const mapFacilityDetailsEl = document.getElementById('mapFacilityDetails');
  const resetMapButtonEl = document.getElementById('resetMapButton');


  // --- Elementos da Tela de Agendamento (agendamento.html) ---
  const specialtiesContainerEl = document.getElementById('specialtiesContainer');
  const examsContainerEl = document.getElementById('examsContainer');

  // --- Dados Mock ---
  const mockFacilitiesData = [
    { id: '1', name: 'Hospital da Criança Feliz', address: 'Rua das Palmeiras, 123, Nazaré, Salvador, BA', lat: -12.9700, lng: -38.5100, phone: '(71) 3333-4444', website: 'http://hospitalcriancafeliz.com.br', onlineBookingInfo: 'Acesse nosso site e clique em "Agendamentos".\nOu ligue para (71) 3333-4444.', type: 'hospital', services: [{name: 'Consulta Pediátrica'}, {name: 'Raio-X Pediátrico'}, {name: 'Vacinação Infantil'}] },
    { id: '2', name: 'Clínica Bem Estar', address: 'Av. Oceânica, 456, Barra, Salvador, BA', lat: -13.0067, lng: -38.5127, phone: '(71) 3222-5555', website: 'http://clinicabemestar.com.br', onlineBookingInfo: 'Marque pelo telefone (71) 3222-5555. \nVisite nosso site para mais informações.', type: 'clinica', services: [{name: 'Fisioterapia'}, {name: 'Consulta Cardiológica'}, {name: 'Pilates Clínico'}]},
    { id: '3', name: 'Posto de Saúde Central SUS', address: 'Praça da Sé, 789, Centro Histórico, Salvador, BA', lat: -12.9747, lng: -38.5107, phone: '(71) 3111-0000', website: null, onlineBookingInfo: 'Agendamentos presenciais ou pelo telefone da central SUS: (71) 3111-0000.', type: 'posto', services: [{name: 'Vacinação'}, {name: 'Consulta Clínica Geral'}, {name: 'Curativos'}, {name: 'Fisioterapia (encaminhamento)'}]},
    { id: '4', name: 'Hospital São Rafael (Privado)', address: 'Av. São Rafael, 2152, Salvador, BA', lat: -12.9275, lng: -38.4322, phone: '(71) 3281-6000', website: 'https://www.rededorsaoluiz.com.br/hospital/sao-rafael', onlineBookingInfo: 'Agende online no portal Rede D\'Or ou pelo telefone: (71) 3281-6000.', type: 'hospital', services: [{name: 'Cirurgia Cardíaca'}, {name: 'Oncologia'}, {name: 'Tomografia Computadorizada'}, {name: 'Ressonância Magnética'}]},
    { id: '5', name: 'UPA Barris (Urgência)', address: 'Rua Conselheiro Spínola, S/N, Salvador, BA', lat: -12.9820, lng: -38.5154, phone: '(71) 3328-1043', website: null, onlineBookingInfo: 'Atendimento de urgência por ordem de chegada. Dúvidas: (71) 3328-1043.', type: 'upa', services: [{name: 'Atendimento de Urgência'}, {name: 'Suturas'}, {name: 'Medicação Emergencial'}]}
  ];

  const mockSpecialties = [
      { name: 'Cardiologia', icon: 'fas fa-heartbeat' }, { name: 'Neurologia', icon: 'fas fa-brain' },
      { name: 'Odontologia', icon: 'fas fa-tooth' }, { name: 'Pediatria', icon: 'fas fa-child' },
      { name: 'Ginecologia', icon: 'fas fa-female' }, { name: 'Dermatologia', icon: 'fas fa-allergies' },
      { name: 'Ortopedia', icon: 'fas fa-bone' }, { name: 'Clínica Geral', icon: 'fas fa-stethoscope' }
  ];
  const mockExams = [
      { name: 'Glicemia em Jejum', icon: 'fas fa-vial' }, { name: 'Perfil Lipídico', icon: 'fas fa-tint' },
      { name: 'Urina Tipo I', icon: 'fas fa-flask' }, { name: 'Raio-X de Tórax', icon: 'fas fa-x-ray' },
      { name: 'Hemograma Completo', icon: 'fas fa-syringe' }
  ];

  let userHasInteractedWithLocationPrompt = false;
  const initialMapCenter = { lat: -12.9714, lng: -38.5014 };
  const initialMapZoom = 13;

  const icons = { // Usado para tipos de estabelecimentos nos detalhes
      hospital: '<i class="fas fa-hospital icon-svg" style="color: #D9534F;"></i>',
      clinica: '<i class="fas fa-clinic-medical icon-svg" style="color: #5CB85C;"></i>',
      posto: '<i class="fas fa-plus-square icon-svg" style="color: #F0AD4E;"></i>',
      upa: '<i class="fas fa-ambulance icon-svg" style="color: #5BC0DE;"></i>',
      mapPin: '<i class="fas fa-map-marker-alt icon-svg"></i>',
      phone: '<i class="fas fa-phone-alt icon-svg"></i>',
      globe: '<i class="fas fa-globe icon-svg"></i>',
      calendar: '<i class="fas fa-calendar-alt icon-svg"></i>',
      procedure: '<i class="fas fa-notes-medical icon-svg" style="color: var(--azul-claro-principal);"></i>'
  };

  function updateMap(lat, lng, zoom) {
      if (mapFrameContainerEl) {
          const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed&hl=pt-BR`;
          mapFrameContainerEl.innerHTML = `<iframe src="${mapUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
      }
  }

  function renderMapFacilityItem(facility, matchedProcedureName = null) {
      let procedureHtml = '';
      if (matchedProcedureName) {
          procedureHtml = `<p class="matched-procedure">${icons.procedure} Oferece: ${matchedProcedureName}</p>`;
      }
      // Decide qual ícone usar para o tipo de instalação baseado no mock
      let typeIconHtml = '<i class="fas fa-hospital-alt icon-svg"></i>'; // Padrão
      if (facility.type === 'hospital') typeIconHtml = icons.hospital;
      else if (facility.type === 'clinica') typeIconHtml = icons.clinica;
      else if (facility.type === 'posto') typeIconHtml = icons.posto;
      else if (facility.type === 'upa') typeIconHtml = icons.upa;


      return `
          <div class="result-item" data-id="${facility.id}" ${matchedProcedureName ? `data-procedure="${matchedProcedureName}"` : ''}>
              <h3>
                  ${typeIconHtml}
                  ${facility.name}
              </h3>
              <p>
                  ${icons.mapPin}
                  ${facility.address}
              </p>
              ${procedureHtml}
          </div>
      `;
  }

  function displayMapSearchResults(results, searchType = 'facility') {
      if (!mapSearchResultsEl) return;
      mapSearchResultsEl.innerHTML = '';
      if (results.length === 0) {
          mapSearchResultsEl.innerHTML = '<p>Nenhum resultado encontrado.</p>';
          return;
      }
      results.forEach(result => {
          mapSearchResultsEl.innerHTML += renderMapFacilityItem(result.facility || result, result.matchedProcedureName);
      });

      document.querySelectorAll('#mapSearchResults .result-item').forEach(item => {
          item.addEventListener('click', () => {
              const facilityId = item.getAttribute('data-id');
              const matchedProcedureName = item.getAttribute('data-procedure');
              const selectedFacility = mockFacilitiesData.find(f => f.id === facilityId);
              if (selectedFacility) {
                  displayMapFacilityDetails(selectedFacility, matchedProcedureName);
              }
          });
      });
  }
  
  function handleMapSearch() {
      if (!mapSearchTermEl || !mapSearchTypeEl) return;
      const searchTerm = mapSearchTermEl.value.toLowerCase();
      const searchType = mapSearchTypeEl.value;
      let results = [];

      if (searchType === 'facility') {
          results = mockFacilitiesData.filter(facility =>
              facility.name.toLowerCase().includes(searchTerm) ||
              facility.address.toLowerCase().includes(searchTerm)
          );
      } else { 
          mockFacilitiesData.forEach(facility => {
              const foundService = facility.services.find(service =>
                  service.name.toLowerCase().includes(searchTerm)
              );
              if (foundService) {
                  results.push({ facility: facility, matchedProcedureName: foundService.name });
              }
          });
      }
      displayMapSearchResults(results, searchType);
  }

  function displayMapFacilityDetails(facility, matchedProcedureName = null) {
      if (!mapFacilityDetailsEl) return;
      updateMap(facility.lat, facility.lng, 16);
      
      let typeIconHtml = icons[facility.type] || '<i class="fas fa-hospital-alt icon-svg"></i>';

      let detailsHtml = `
          <h2>
              ${typeIconHtml}
              ${facility.name}
          </h2>
          <p>
              ${icons.mapPin} ${facility.address}
          </p>
      `;
      if (facility.phone) {
          detailsHtml += `<p>${icons.phone} <a href="tel:${facility.phone.replace(/\D/g,'')}">${facility.phone}</a></p>`;
      }
      if (facility.website) {
          detailsHtml += `<p>${icons.globe} <a href="${facility.website}" target="_blank" rel="noopener noreferrer">Visitar site</a></p>`;
      }

      if (matchedProcedureName) {
          detailsHtml += `<div class="matched-procedure-detail">
                              <p>${icons.procedure} Este local foi encontrado porque oferece: <strong>${matchedProcedureName}</strong></p>
                         </div>`;
      }

      detailsHtml += `<div class="booking-info">
                          <h3>${icons.calendar} Como Agendar:</h3>
                          <p class="whitespace-pre-line">${facility.onlineBookingInfo || 'Informações de agendamento não disponíveis.'}</p>
                     </div>`;
      mapFacilityDetailsEl.innerHTML = detailsHtml;
      mapFacilityDetailsEl.classList.remove('hidden');
  }
  
  function resetMapView() {
      if (mapSearchTermEl) mapSearchTermEl.value = '';
      if (mapSearchResultsEl) mapSearchResultsEl.innerHTML = '';
      if (mapFacilityDetailsEl) mapFacilityDetailsEl.classList.add('hidden');
      if (mapSearchTypeEl) mapSearchTypeEl.value = 'facility'; // Reseta para busca por local
      updateMapSearchPlaceholder(); // Atualiza o placeholder
      updateMap(initialMapCenter.lat, initialMapCenter.lng, initialMapZoom);
  }

  function updateMapSearchPlaceholder() {
      if (!mapSearchTypeEl || !mapSearchTermLabelEl || !mapSearchTermEl) return;
      if (mapSearchTypeEl.value === 'facility') {
          mapSearchTermLabelEl.textContent = 'Nome do Local:';
          mapSearchTermEl.placeholder = 'Hospital, clínica...';
      } else {
          mapSearchTermLabelEl.textContent = 'Nome do Procedimento:';
          mapSearchTermEl.placeholder = 'Raio-X, Consulta Pediátrica...';
      }
  }


  function renderSpecialties() {
      if (!specialtiesContainerEl) return;
      specialtiesContainerEl.innerHTML = '';
      mockSpecialties.slice(0, 6).forEach(specialty => {
          specialtiesContainerEl.innerHTML += `
              <div class="specialty-item" data-name="${specialty.name}">
                  <i class="${specialty.icon}"></i>
                  <span>${specialty.name}</span>
              </div>
          `;
      });
      document.querySelectorAll('#specialtiesContainer .specialty-item').forEach(item => {
          item.addEventListener('click', () => alert(`Buscando por: ${item.dataset.name}`));
      });
  }

  function renderExams() {
      if (!examsContainerEl) return;
      examsContainerEl.innerHTML = '';
      mockExams.slice(0, 3).forEach(exam => {
          examsContainerEl.innerHTML += `
              <div class="exam-item" data-name="${exam.name}">
                  <i class="${exam.icon}"></i>
                  <span>${exam.name}</span>
                  <button class="button-agendar">AGENDAR</button>
              </div>
          `;
      });
      document.querySelectorAll('#examsContainer .button-agendar').forEach(button => {
          button.addEventListener('click', (e) => {
              e.stopPropagation();
              const examName = button.closest('.exam-item').dataset.name;
              alert(`Agendar ${examName}`);
          });
      });
       document.querySelectorAll('#examsContainer .exam-item').forEach(item => {
          item.addEventListener('click', () => alert(`Detalhes sobre: ${item.dataset.name}`));
      });
  }

  function initializeLocationFeatures() {
      if (locationRequestPromptEl && dismissLocationPromptButtonEl) {
          if (navigator.permissions) {
              navigator.permissions.query({name:'geolocation'}).then(permissionStatus => {
                  if (permissionStatus.state === 'granted') {
                      locationRequestPromptEl.classList.add('hidden');
                      userHasInteractedWithLocationPrompt = true;
                      navigator.geolocation.getCurrentPosition(pos => updateMap(pos.coords.latitude, pos.coords.longitude, 14), err => updateMap(initialMapCenter.lat, initialMapCenter.lng, initialMapZoom));
                  } else if (permissionStatus.state === 'denied') {
                      locationRequestPromptEl.innerHTML = `<div class="container"><p><strong>Acesso à localização negado.</strong> Habilite nas configurações.</p></div>`;
                      locationRequestPromptEl.classList.remove('hidden');
                      userHasInteractedWithLocationPrompt = true;
                      updateMap(initialMapCenter.lat, initialMapCenter.lng, initialMapZoom);
                  } else {
                      locationRequestPromptEl.classList.remove('hidden');
                      updateMap(initialMapCenter.lat, initialMapCenter.lng, initialMapZoom);
                  }
              });
          } else if (navigator.geolocation) {
              locationRequestPromptEl.classList.remove('hidden');
              updateMap(initialMapCenter.lat, initialMapCenter.lng, initialMapZoom);
          } else {
               if (mapFrameContainerEl) mapFrameContainerEl.innerHTML = '<p class="map-placeholder">Serviço de mapa não disponível.</p>';
               if(locationRequestPromptEl) locationRequestPromptEl.classList.add('hidden');
          }

          dismissLocationPromptButtonEl.addEventListener('click', () => {
              locationRequestPromptEl.classList.add('hidden');
              userHasInteractedWithLocationPrompt = true;
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                      pos => updateMap(pos.coords.latitude, pos.coords.longitude, 14),
                      () => {}
                  );
              }
          });
      } else {
           updateMap(initialMapCenter.lat, initialMapCenter.lng, initialMapZoom);
      }
  }

  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === 'mapa.html' || currentPage === '') {
      initializeLocationFeatures();
      if (mapSearchButtonEl) mapSearchButtonEl.addEventListener('click', handleMapSearch);
      if (mapSearchTermEl) mapSearchTermEl.addEventListener('keypress', (e) => e.key === 'Enter' && handleMapSearch());
      if (resetMapButtonEl) resetMapButtonEl.addEventListener('click', resetMapView);
      if (mapSearchTypeEl) {
          mapSearchTypeEl.addEventListener('change', () => {
              updateMapSearchPlaceholder();
              // Opcional: Limpar resultados ao mudar tipo de busca
              if (mapSearchResultsEl) mapSearchResultsEl.innerHTML = '';
              if (mapFacilityDetailsEl) mapFacilityDetailsEl.classList.add('hidden');
          });
          updateMapSearchPlaceholder();
      }
      document.getElementById('navMapButton')?.classList.add('active');
      document.getElementById('navAppointmentButton')?.classList.remove('active');
  }

  if (currentPage === 'agendamento.html') {
      renderSpecialties();
      renderExams();
      document.getElementById('navMapButton')?.classList.remove('active');
      document.getElementById('navAppointmentButton')?.classList.add('active');
  }

  if (currentYearEl) {
      currentYearEl.textContent = new Date().getFullYear();
  }
});
