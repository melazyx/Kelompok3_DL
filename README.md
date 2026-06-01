# 🛍️ ShopKu - Frontend E-Commerce dengan Prediksi Harga AI

Project ini adalah frontend website e-commerce sederhana (mirip Shopee) yang dibuat menggunakan **React.js** sebagai tugas Deep Learning - Time Series Price Prediction.

---

## 🚀 Cara Menjalankan

### Prasyarat
Pastikan sudah install:
- **Node.js** (v16 atau lebih baru) — download di https://nodejs.org
- **npm** (sudah termasuk bersama Node.js)

### Langkah-langkah

**1. Buka terminal di folder project ini:**
```bash
cd olshop-frontend
```

**2. Install semua dependency:**
```bash
npm install
```
> Proses ini memakan waktu 1-3 menit tergantung koneksi internet.

**3. Jalankan development server:**
```bash
npm start
```

**4. Buka browser:**
Browser akan otomatis terbuka di `http://localhost:3000`

---

## 📁 Struktur Project

```
olshop-frontend/
├── public/
│   └── index.html          # HTML utama
├── src/
│   ├── components/
│   │   ├── Navbar.js/.css          # Header + search + navigasi
│   │   ├── Banner.js/.css          # Slider hero banner otomatis
│   │   ├── Categories.js/.css      # Grid kategori produk
│   │   ├── FlashSale.js/.css       # Seksi flash sale + countdown timer
│   │   ├── ProductCard.js/.css     # Komponen kartu produk
│   │   ├── ProductGrid.js/.css     # Grid produk (best seller, rekomendasi)
│   │   ├── PricePredictionModal.js # Modal prediksi harga AI + chart
│   │   ├── CartSidebar.js/.css     # Sidebar keranjang belanja
│   │   └── Footer.js/.css          # Footer website
│   ├── data/
│   │   └── products.js     # Data produk & data prediksi harga (mock)
│   ├── App.js              # Komponen utama + state management
│   ├── App.css
│   ├── index.js            # Entry point React
│   └── index.css           # Global styles + CSS variables
└── package.json
```

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| 🔍 Search | Filter produk real-time berdasarkan nama/kategori |
| ⚡ Flash Sale | Countdown timer otomatis + progress stok |
| 📈 Prediksi Harga AI | Chart visualisasi harga aktual vs prediksi LSTM |
| 🛒 Keranjang | Sidebar keranjang dengan tambah/hapus produk |
| 🎠 Auto Banner | Slider banner dengan transisi otomatis |
| 📱 Responsive | Tampilan menyesuaikan desktop, tablet, dan mobile |

---

## 🤖 Integrasi Model Deep Learning

Fitur **Prediksi Harga** (ikon 📈 di produk tertentu) menampilkan:
- **Grafik harga aktual** (garis merah) — data historis harga
- **Grafik prediksi AI** (garis biru putus-putus) — output model LSTM/Time Series
- **Insight otomatis** — apakah harga akan naik/turun
- **Info model** — akurasi, arsitektur, jumlah data training

### Cara integrasi dengan model Python (nanti):
Di file `src/data/products.js`, ganti data `pricePredictions` dengan fetch dari API:

```javascript
// Contoh integrasi API Flask/FastAPI
const response = await fetch('http://localhost:5000/predict?product_id=1');
const data = await response.json();
// data = { history: [...], insight: "...", trend: "down" }
```

---

## 🛠️ Tech Stack

- **React.js 18** — UI Framework
- **Recharts** — Library grafik untuk visualisasi prediksi harga
- **Lucide React** — Icon library
- **CSS Custom Properties** — Theming & design system
- **Google Fonts** (Plus Jakarta Sans + Sora)

---

## 📝 Catatan untuk Tugas

- Data produk dan prediksi harga saat ini adalah **mock data** (simulasi)
- Pada implementasi nyata, data prediksi didapat dari **model LSTM/Time Series** yang sudah ditraining
- Backend API bisa dibuat menggunakan **Flask** atau **FastAPI** dengan Python
- Model disimpan menggunakan `pickle` atau `joblib`, di-load saat API dipanggil

---

Dibuat untuk tugas **Deep Learning - Pertemuan 11**  
*Training Model → Hyperparameter Tuning → Testing → Implementasi Web*
