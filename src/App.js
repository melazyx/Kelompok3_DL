import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Categories from './components/Categories';
import FlashSale from './components/FlashSale';
import ProductGrid from './components/ProductGrid';
import PricePredictionModal from './components/PricePredictionModal';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import { bestSellerProducts, recommendedProducts, flashSaleProducts } from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [predictionProduct, setPredictionProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Add to cart
  const handleAddCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  // Remove from cart
  const handleRemove = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // Search filter
  const allProducts = useMemo(() => [
    ...flashSaleProducts, ...bestSellerProducts, ...recommendedProducts
  ], []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return allProducts.filter(p =>
      p.name.toLowerCase().includes(q) || p.category?.toLowerCase().includes(q)
    );
  }, [searchQuery, allProducts]);

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      <Navbar
        cartCount={cartCount}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        onCartOpen={() => setCartOpen(true)}
      />

      <main>
        {filteredProducts ? (
          <div className="container search-results">
            <h2 className="search-title">
              Hasil pencarian "{searchQuery}" — {filteredProducts.length} produk ditemukan
            </h2>
            <div className="search-grid">
              {filteredProducts.map(p => (
                <div key={p.id} className="search-item">
                  <img src={p.image} alt={p.name} />
                  <div>
                    <p className="si-name">{p.name}</p>
                    <p className="si-price">Rp{p.price.toLocaleString('id-ID')}</p>
                    {p.discount && <span className="si-disc">-{p.discount}%</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <Banner />
            <div className="container">
              <div className="ai-banner">
                <span className="ai-emoji">🤖</span>
                <div>
                  <strong>Fitur Baru: Prediksi Harga AI</strong>
                  <span> — Model Deep Learning kami memprediksi kapan harga akan turun. Klik ikon 📈 pada produk untuk melihat!</span>
                </div>
              </div>
            </div>
            <Categories />
            <FlashSale
              onAddCart={handleAddCart}
              onShowPrediction={setPredictionProduct}
            />
            <ProductGrid
              title="Produk Terlaris"
              icon="🏆"
              products={bestSellerProducts}
              onAddCart={handleAddCart}
              onShowPrediction={setPredictionProduct}
            />
            <ProductGrid
              title="Rekomendasi Untukmu"
              icon="✨"
              products={recommendedProducts}
              columns={4}
              onAddCart={handleAddCart}
              onShowPrediction={setPredictionProduct}
            />
          </>
        )}
      </main>

      <Footer />

      {/* Modals */}
      {predictionProduct && (
        <PricePredictionModal
          product={predictionProduct}
          onClose={() => setPredictionProduct(null)}
        />
      )}

      {cartOpen && (
        <CartSidebar
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
}

export default App;
