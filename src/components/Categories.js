import React from 'react';
import { categories } from '../data/products';
import './Categories.css';

const Categories = () => (
  <section className="categories-section">
    <div className="container">
      <h2 className="section-title">Kategori</h2>
      <div className="categories-grid">
        {categories.map((cat) => (
          <button key={cat.name} className="cat-card">
            <div className="cat-icon-wrap" style={{ background: cat.color + '22', border: `2px solid ${cat.color}33` }}>
              <span className="cat-icon">{cat.icon}</span>
            </div>
            <span className="cat-name">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
