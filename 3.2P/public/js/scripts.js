// This script runs in the browser and obtains the card data from Express.
let allChargers = [];
let modalInstance = null;

const cardSection = document.getElementById('card-section');
const loadingMessage = document.getElementById('loading-message');
const filterSelect = document.getElementById('connector-filter');
const detailsModal = document.getElementById('details-modal');

// Build each Materialize card using DOM methods, avoiding HTML injection.
function createCard(charger) {
  const column = document.createElement('div');
  column.className = 'col s12 m6 l4';

  const card = document.createElement('article');
  card.className = 'card charger-card';

  const imageArea = document.createElement('div');
  imageArea.className = 'card-image';
  const image = document.createElement('img');
  image.src = charger.image;
  image.alt = `Illustration for ${charger.title}`;
  imageArea.appendChild(image);

  const content = document.createElement('div');
  content.className = 'card-content';
  const title = document.createElement('span');
  title.className = 'card-title';
  title.textContent = charger.title;
  const area = document.createElement('p');
  area.className = 'site-area';
  area.textContent = charger.area;

  const meta = document.createElement('div');
  meta.className = 'charger-meta';
  [charger.connector, `${charger.powerKw} kW (sample)`].forEach(value => {
    const chip = document.createElement('span');
    chip.textContent = value;
    meta.appendChild(chip);
  });

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'details-button waves-effect waves-light';
  button.textContent = 'View details';
  button.setAttribute('aria-label', `View details for ${charger.title}`);
  button.addEventListener('click', () => openDetails(charger));

  content.append(title, area, meta, button);
  card.append(imageArea, content);
  column.appendChild(card);
  return column;
}

function renderCards() {
  const selected = filterSelect.value;
  const visible = selected === 'all'
    ? allChargers
    : allChargers.filter(charger => charger.connector === selected);

  cardSection.replaceChildren(...visible.map(createCard));
  loadingMessage.textContent = visible.length
    ? `Showing ${visible.length} sample location${visible.length === 1 ? '' : 's'}.`
    : 'No sample locations match that connector.';
}

// Display details using the Materialize modal component.
function openDetails(charger) {
  document.getElementById('details-heading').textContent = charger.title;
  document.getElementById('details-area').textContent = `Area: ${charger.area}`;
  document.getElementById('details-connector').textContent = `Connector: ${charger.connector}`;
  document.getElementById('details-power').textContent = `Reported power (demo): ${charger.powerKw} kW`;
  document.getElementById('details-description').textContent = charger.description;
  if (modalInstance) modalInstance.open();
  else detailsModal.classList.add('open');
}

async function loadChargers() {
  try {
    const response = await fetch('/api/chargers'); // GET request to our Express API.
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('Expected a list of chargers');
    allChargers = data;
    renderCards();
  } catch (error) {
    loadingMessage.textContent = 'Could not load sample chargers. Check that the Express server is running.';
    console.error('Failed to load chargers:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.M && M.Modal) modalInstance = M.Modal.init(detailsModal);
  filterSelect.addEventListener('change', renderCards);
  document.querySelector('.modal-close').addEventListener('click', () => detailsModal.classList.remove('open'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') detailsModal.classList.remove('open');
  });
  loadChargers();
});
