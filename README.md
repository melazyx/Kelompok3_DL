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

