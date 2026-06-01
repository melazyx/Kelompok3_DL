import React, { useState, useEffect } from 'react';
import './Banner.css';

const slides = [
  {
    id: 1,
    title: "Flash Sale Hari Ini",
    subtitle: "Diskon Hingga 90% Semua Kategori",
    cta: "Belanja Sekarang",
    gradient: "linear-gradient(135deg, #EE4D2D 0%, #FF8C42 100%)",
    emoji: "⚡",
    tag: "TERBATAS",
  },
  {
    id: 2,
    title: "Harga AI Prediction",
    subtitle: "Model Deep Learning kami memprediksi harga terbaik untukmu",
    cta: "Lihat Prediksi",
    gradient: "linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)",
    emoji: "🤖",
    tag: "TEKNOLOGI",
  },
  {
    id: 3,
    title: "Gratis Ongkir Se-Indonesia",
    subtitle: "Belanja di atas Rp50.000 gratis ongkos kirim",
    cta: "Klaim Voucher",
    gradient: "linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)",
    emoji: "🚚",
    tag: "PROMO",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-section">
      <div className="container banner-container">
        {/* Main Slider */}
        <div className="banner-main">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`banner-slide ${i === current ? 'active' : ''}`}
              style={{ background: slide.gradient }}
            >
              <div className="slide-content">
                <span className="slide-tag">{slide.tag}</span>
                <div className="slide-emoji">{slide.emoji}</div>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-sub">{slide.subtitle}</p>
                <button className="slide-cta">{slide.cta} →</button>
              </div>
              <div className="slide-decoration">
                <div className="deco-circle c1" />
                <div className="deco-circle c2" />
              </div>
            </div>
          ))}
          {/* Dots */}
          <div className="banner-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>

        {/* Side Panels */}
        <div className="banner-side">
          <div className="side-card card-voucher">
            <div className="side-card-icon">🎁</div>
            <div>
              <div className="side-card-title">Voucher Gratis</div>
              <div className="side-card-sub">Daftar & dapat Rp20.000</div>
            </div>
          </div>
          <div className="side-card card-ai">
            <div className="side-card-icon">📈</div>
            <div>
              <div className="side-card-title">Prediksi Harga AI</div>
              <div className="side-card-sub">Tahu kapan harga terendah</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
