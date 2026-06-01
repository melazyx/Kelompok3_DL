import React, { useState } from 'react';
import { Search, ShoppingCart, Bell, ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ cartCount, onSearch, searchQuery }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="container navbar-inner">
          {/* Logo */}
          <div className="navbar-logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">ShopKu</span>
          </div>

          {/* Search Bar */}
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Cari produk, brand, kategori..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
            <button className="search-btn">
              <Search size={18} />
            </button>
          </div>

          {/* Actions */}
          <div className="navbar-actions">
            <button className="action-btn notification-btn">
              <Bell size={20} />
              <span className="badge">3</span>
            </button>
            <button className="action-btn cart-btn">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="badge">{cartCount}</span>}
            </button>
            <button className="btn-login">Masuk</button>
            <button className="btn-register">Daftar</button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Category Bar */}
      <div className="navbar-cats">
        <div className="container cats-inner">
          {['Flash Sale', 'Fashion', 'Elektronik', 'Kecantikan', 'Makanan', 'Olahraga', 'Rumah Tangga', 'Voucher'].map((cat) => (
            <button key={cat} className="cat-link">{cat}</button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button className="btn-login mobile-full">Masuk</button>
          <button className="btn-register mobile-full">Daftar</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
