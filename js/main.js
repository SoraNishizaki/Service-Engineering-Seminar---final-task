// ===== Leaflet マップの初期化（動作確認用） =====
// 名古屋中心部を初期表示
const map = L.map("map").setView([35.1652, 136.9038], 13);

// OpenStreetMap タイル
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 動作確認用のサンプルマーカー
L.marker([35.1571, 136.9265])
  .addTo(map)
  .bindPopup("<strong>名古屋工業大学</strong>");
