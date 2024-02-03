# Data Visualization and Web Performance - Tazkia
Folder ini merupakan task dari materi Data Visualization dan Web Performance. JavaScript framework yang digunakan adalah NuxtJS dan CSS framework yang digunakan adalah Tailwind CSS. Data divisualisasikan menggunakan
`highchart`, sementara pengukuran web performance menggunakan lighthouse.

### Pages
1. Chart
    - `posttest.vue` - url `http://localhost:3000/chart/posttest` : Post test visualisasi data hari kedua. Mengintegrasikan API data kependudukan dengan highchart.
    - `index.vue` - url `http://localhost:3000/chart` : Tugas visualisasi data hari pertama. Membuat beberapa
    jenis chart basic dengan highchart.
    - `advance.vue` - url `http://localhost:3000/chart/advance` : Membuat multiple chart dan multiple axis chart.
2. Anime
    - `index.vue` - url `http://localhost:3000/anime` : Menampilkan seluruh list data anime dari API.
    - `[mal_id]/index.vue` - url `http://localhost:3000/anime/[mal_id]` : Rute dinamis yang menampilkan data anime
    spesifik berdasarkan idnya.
2. Manga
    - `index.vue` - url `http://localhost:3000/manga` : Menampilkan seluruh list data manga dari API.
    - `[mal_id]/index.vue` - url `http://localhost:3000/manga/[mal_id]` : Rute dinamis yang menampilkan data manga
    spesifik berdasarkan idnya.

## Getting started
1. Download atau clone repository ini :
```
https://github.com/tazkiaathariza/btj-academy-fe-data-visualization-and-web-performance-tazkia
```
2. Install seluruh dependencies yang diperlukan.
2. Jalankan `npm run dev`
3. Buka di browser lokal `http://localhost:3000/`

## Preview Hasil
Visualization Data
![hasil1](/public/ss1.png)
![hasil2](/public/ss2.png)

From previous class..
![hasil3](/public/ss3.png)
![hasil3](/public/ss4.png)
