const map = L.map('map').setView([-23.55052, -46.633308], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Elementos
const banner = document.getElementById('banner');
const hospitalNameEl = document.getElementById('hospital-name');
const scheduleButton = document.getElementById('schedule-button');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

// Exibe o banner com o nome do hospital
function showHospital(name) {
  hospitalNameEl.textContent = name;
  banner.style.display = 'block';
}

// Busca simulada pelo nome
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) showHospital(query);
});

// Redireciona para agendamento
scheduleButton.addEventListener('click', () => {
  window.location.href = 'agendar.html';
});

// Fecha banner ao clicar no mapa
map.on('click', () => banner.style.display = 'none');