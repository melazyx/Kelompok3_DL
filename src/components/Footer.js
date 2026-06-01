import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">🛍️ ShopKu</div>
          <p className="footer-desc">
            Platform belanja online dengan teknologi AI untuk prediksi harga terbaik.
            Temukan produk impianmu dengan harga terendah!
          </p>
          <div className="footer-social">
            {['📘', '📸', '🐦', '▶️'].map((icon, i) => (
              <button key={i} className="social-btn">{icon}</button>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <h4>Layanan Kami</h4>
          <ul>
            {['Flash Sale', 'Voucher Gratis', 'Gratis Ongkir', 'ShopKu Mall', 'Prediksi Harga AI'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Tentang ShopKu</h4>
          <ul>
            {['Tentang Kami', 'Karir', 'Blog', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links">
          <h4>Bantuan</h4>
          <ul>
            {['Pusat Bantuan', 'Cara Belanja', 'Cara Pembayaran', 'Lacak Pesanan', 'Pengembalian'].map(l => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 ShopKu. Dibuat dengan ❤️ untuk tugas Deep Learning Time Series.</p>
        <div className="payment-icons">
          {['💳', '🏦', '📱', '💰'].map((icon, i) => (
            <span key={i} className="payment-icon">{icon}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
