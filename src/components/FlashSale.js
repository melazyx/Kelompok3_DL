import React, { useState, useEffect } from 'react';
import { flashSaleProducts } from '../data/products';
import ProductCard from './ProductCard';
import './FlashSale.css';

const FlashSale = ({ onAddCart, onShowPrediction }) => {
  const [timeLeft, setTimeLeft] = useState({ h: 4, m: 1, s: 55 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 4, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <section className="flash-section">
      <div className="container">
        <div className="flash-header">
          <div className="flash-title-group">
            <span className="flash-icon">⚡</span>
            <h2 className="flash-title">FLASH SALE</h2>
            <div className="flash-countdown">
              <span className="cd-label">Berakhir dalam</span>
              <div className="cd-boxes">
                <span className="cd-box">{pad(timeLeft.h)}</span>
                <span className="cd-sep">:</span>
                <span className="cd-box">{pad(timeLeft.m)}</span>
                <span className="cd-sep">:</span>
                <span className="cd-box">{pad(timeLeft.s)}</span>
              </div>
            </div>
          </div>
          <button className="see-all-btn">Lihat Semua →</button>
        </div>

        <div className="flash-grid">
          {flashSaleProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              variant="flash"
              onAddCart={onAddCart}
              onShowPrediction={onShowPrediction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
