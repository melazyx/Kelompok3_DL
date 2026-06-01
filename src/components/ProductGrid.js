import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ title, icon, products, onAddCart, onShowPrediction, columns = 6 }) => (
  <section className="product-grid-section">
    <div className="container">
      <div className="grid-header">
        <h2 className="section-title">
          {icon && <span className="section-icon">{icon}</span>}
          {title}
        </h2>
        <button className="see-all-btn">Lihat Semua →</button>
      </div>
      <div className={`products-grid cols-${columns}`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddCart={onAddCart}
            onShowPrediction={onShowPrediction}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProductGrid;
