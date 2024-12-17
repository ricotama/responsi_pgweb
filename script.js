// Inisialisasi peta di halaman Map
const map = L.map('map').setView([-2.5489, 118.0149], 5); // Pusatkan ke Indonesia

// Tambahkan tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Fetch data dari file JSON
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.sites.forEach(site => {
      // Tambahkan marker untuk setiap lokasi
      const marker = L.marker([site.lat, site.lng]).addTo(map);

      // Tambahkan popup dengan informasi
      marker.bindPopup(`
        <h3>${site.name}</h3>
        <p><strong>Kategori:</strong> ${site.category}</p>
        <p><strong>Deskripsi:</strong> ${site.description}</p>
      `);
    });
  })
  .catch(error => console.error('Error loading data:', error));
