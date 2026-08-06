// ===== Leaflet map: markers, coverage circles, layer control =====
const map = L.map("map");

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function makeDivIcon(color, iconClass) {
  return L.divIcon({
    className: "site-marker",
    html: `<span class="site-marker__dot" style="background:${color}"><i class="bi ${iconClass}"></i></span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
}

const markersById = {};
const layerGroupsByType = {};

sites.forEach((site) => {
  const sensor = sensorTypes[site.sensorType];

  const marker = L.marker([site.lat, site.lng], {
    icon: makeDivIcon(sensor.color, sensor.icon),
  }).bindPopup(
    `<div class="site-popup">
       <strong>${site.name}</strong><br>
       <span class="text-muted small">${site.city}</span>
       <p class="mb-1 mt-2">${site.description}</p>
       <span class="badge site-popup__badge" style="background:${sensor.color}">${sensor.label}</span>
     </div>`
  );

  const circle = L.circle([site.lat, site.lng], {
    radius: site.coverageRadiusMeters,
    color: sensor.color,
    fillColor: sensor.color,
    fillOpacity: 0.15,
    weight: 1,
  });

  markersById[site.id] = marker;

  if (!layerGroupsByType[site.sensorType]) {
    layerGroupsByType[site.sensorType] = L.layerGroup();
  }
  layerGroupsByType[site.sensorType].addLayer(marker);
  layerGroupsByType[site.sensorType].addLayer(circle);
});

const overlays = {};
Object.keys(layerGroupsByType).forEach((type) => {
  const group = layerGroupsByType[type].addTo(map);
  overlays[sensorTypes[type].label] = group;
});
L.control.layers(null, overlays, { collapsed: false }).addTo(map);

const bounds = L.latLngBounds(sites.map((site) => [site.lat, site.lng]));
map.fitBounds(bounds, { padding: [40, 40] });

// Fly to a site and open its popup — used by the "Locate on map" card buttons.
function locateSite(id) {
  const site = sites.find((s) => s.id === id);
  const marker = markersById[id];
  if (!site || !marker) return;
  document.getElementById("map-section").scrollIntoView({ behavior: "smooth" });
  map.flyTo([site.lat, site.lng], 14);
  marker.openPopup();
}

// ===== Render sensor type legend strip =====
const sensorStrip = document.getElementById("sensor-strip");
Object.entries(sensorTypes).forEach(([key, sensor]) => {
  const col = document.createElement("div");
  col.className = "col-md-4 text-center";
  col.innerHTML = `
    <div class="sensor-icon mb-3" style="background:${sensor.color}"
         data-bs-toggle="tooltip" data-bs-placement="top" title="${sensor.description}">
      <i class="bi ${sensor.icon}"></i>
    </div>
    <h5>${sensor.label}</h5>
    <p class="text-muted small">${sensor.description}</p>`;
  sensorStrip.appendChild(col);
});

// ===== Render deployment site cards =====
const siteCards = document.getElementById("site-cards");
sites.forEach((site) => {
  const sensor = sensorTypes[site.sensorType];
  const col = document.createElement("div");
  col.className = "col";
  col.innerHTML = `
    <div class="card h-100 shadow-sm site-card">
      <div class="card-body">
        <span class="badge mb-2" style="background:${sensor.color}">${sensor.label}</span>
        <h5 class="card-title">${site.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${site.city}</h6>
        <p class="card-text">${site.description}</p>
      </div>
      <div class="card-footer bg-transparent border-0 pb-3">
        <button class="btn btn-outline-primary btn-sm locate-btn" data-site-id="${site.id}">
          <i class="bi bi-geo-alt me-1"></i>Locate on map
        </button>
      </div>
    </div>`;
  siteCards.appendChild(col);
});

siteCards.addEventListener("click", (e) => {
  const btn = e.target.closest(".locate-btn");
  if (!btn) return;
  locateSite(btn.dataset.siteId);
});

// ===== Bootstrap tooltip initialization =====
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
  new bootstrap.Tooltip(el);
});
