const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

jetData.forEach(jet => {
  L.marker(jet.location)
    .addTo(map)
    .bindPopup(`
      <b>${jet.owner}</b><br>
      ${jet.model}<br>
      <em>${jet.fact}</em>
    `);
});

