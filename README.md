# responsi_pgweb
# GENIUS  
**Geospatial Exploration of Indonesia's UNESCO Sites**

---

## a. Nama Produk  
GENIUS (*Geospatial Exploration of Indonesia's UNESCO Sites*)

---

## b. Deskripsi Produk  
GENIUS adalah sebuah platform WebGIS interaktif yang menyajikan informasi lengkap mengenai warisan budaya, alam, dan takbenda di Indonesia yang telah diakui oleh UNESCO. Platform ini memanfaatkan teknologi peta digital untuk menampilkan lokasi warisan dan menyediakan data pendukung berupa deskripsi, gambar, serta grafik interaktif. GENIUS bertujuan untuk memperkenalkan dan meningkatkan kesadaran akan pentingnya melestarikan kekayaan warisan Indonesia.

---

## c. Komponen Pembangun Produk  

1. **Teknologi Front-End**  
   - **HTML5**: Struktur dasar halaman web.  
   - **CSS3**: Gaya dan tampilan halaman web.  
   - **JavaScript**: Logika interaktif pada web.  
   - **Leaflet.js**: Menampilkan peta interaktif dan visualisasi data GeoJSON.  
   - **Chart.js**: Visualisasi data dalam bentuk grafik batang.  

2. **Teknologi Back-End**  
   - **PHP**: Menghubungkan front-end dengan basis data dan menampilkan data tabel.  

3. **Database**  
   - **MySQL**: Basis data untuk menyimpan informasi warisan UNESCO, termasuk lokasi, deskripsi, dan tahun pengakuan.  

4. **Format Data Geospasial**  
   - **GeoJSON**: Digunakan untuk menyimpan dan menampilkan data geospasial (lokasi warisan, jalan kolektor, dll).  

5. **Visualisasi Data**  
   - Tabel dinamis dan grafik untuk menampilkan informasi dalam format yang mudah dipahami.  

---

## d. Sumber Data  

1. **Data Warisan UNESCO**  
   - Diambil dari basis data `responsi_pgweb` dengan tabel `data_budaya_unesco`.  
   - Data meliputi informasi nama warisan, lokasi (longitude dan latitude), tahun pengakuan, dan kondisi.  

2. **Data Geospasial**  
   - **area_diy_kec.geojson**: Data batas administrasi kecamatan di Daerah Istimewa Yogyakarta.  
   - **jalan_kolektor_diy.geojson**: Data jaringan jalan kolektor di Daerah Istimewa Yogyakarta.  

3. **Sumber Gambar**  
   - Gambar pendukung diambil dari pustaka bebas seperti *Unsplash* atau koleksi pribadi.  

4. **Sumber Informasi**  
   - Situs resmi UNESCO dan publikasi terkait warisan Indonesia.  

---

**&copy; 2024 GENIUS - Geospatial Exploration of Indonesia's UNESCO Sites**  

## e. Hasil Produk
![Halaman Utama](image/home.png)


