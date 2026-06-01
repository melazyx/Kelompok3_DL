import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import './CartSidebar.css';

const formatRupiah = (num) => 'Rp' + Number(num).toLocaleString('id-ID');

const CartSidebar = ({ cart, onClose, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3 className="cart-title">
            <ShoppingBag size={20} /> Keranjang ({cart.length})
          </h3>
          <button className="cart-close" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <span className="empty-icon">🛒</span>
              <p>Keranjang masih kosong</p>
              <span>Yuk mulai belanja!</span>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{formatRupiah(item.price)}</p>
                  <div className="cart-item-qty">
                    <span className="qty-badge">x{item.qty}</span>
                    <span className="qty-sub">{formatRupiah(item.price * item.qty)}</span>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  <Trash2 size={15} />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-price">{formatRupiah(total)}</span>
            </div>
            <button className="checkout-btn">Beli Sekarang →</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
