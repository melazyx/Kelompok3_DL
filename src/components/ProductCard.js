import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, Star } from 'lucide-react';
import './ProductCard.css';

const formatRupiah = (num) =>
  'Rp' + Number(num).toLocaleString('id-ID');

const ProductCard = ({ product, variant = 'default', onAddCart, onShowPrediction }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    setAdded(true);
    onAddCart(product);
    setTimeout(() => setAdded(false), 1500);
  };

  const progressPct = variant === 'flash'
    ? Math.min(100, Math.round(((product.sold || 0) / ((product.sold || 0) + (product.stock || 10))) * 100))
    : null;

  return (
    <div className={`product-card ${variant}`}>
      {/* Badge */}
      {product.badge && (
        <span className={`product-badge badge-${product.badge.toLowerCase().replace(' ', '-')}`}>
          {product.badge}
        </span>
      )}

      {/* Discount */}
      {product.discount && (
        <span className="product-discount">-{product.discount}%</span>
      )}

      {/* Prediction button */}
      {(product.id === 1 || product.id === 3) && (
        <button
          className="predict-btn"
          onClick={(e) => { e.stopPropagation(); onShowPrediction(product); }}
          title="Lihat Prediksi Harga AI"
        >
          📈
        </button>
      )}

      {/* Image */}
      <div className="product-img-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button
          className={`add-cart-btn ${added ? 'added' : ''}`}
          onClick={handleAdd}
        >
          {added ? '✓ Ditambahkan' : <><ShoppingCart size={14} /> Tambah</>}
        </button>
      </div>

      {/* Info */}
      <div className="product-info">
        <p className="product-name">{product.name}</p>

        <div className="product-prices">
          <span className="product-price">{formatRupiah(product.price)}</span>
          {product.originalPrice && (
            <span className="product-original">{formatRupiah(product.originalPrice)}</span>
          )}
        </div>

        {/* Flash sale progress */}
        {variant === 'flash' && progressPct !== null && (
          <div className="progress-wrap">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="progress-label">Stok Terbatas</span>
          </div>
        )}

        {/* Rating & sold */}
        {variant !== 'flash' && (
          <div className="product-meta">
            <span className="product-rating">
              <Star size={11} fill="#FFB800" stroke="none" />
              {product.rating}
            </span>
            <span className="product-sold">{product.sold?.toLocaleString('id-ID')} terjual</span>
          </div>
        )}

        {variant === 'flash' && product.sold && (
          <div className="product-sold-flash">{product.sold.toLocaleString('id-ID')}+ terjual</div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
