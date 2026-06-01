import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, ReferenceLine
} from 'recharts';
import { X, TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { pricePredictions } from '../data/products';
import './PricePredictionModal.css';

const formatRupiah = (num) => 'Rp' + Number(num).toLocaleString('id-ID');

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="tt-label">{label}</p>
        {payload.map((p) => p.value && (
          <p key={p.name} style={{ color: p.color }}>
            {p.name === 'actual' ? '📊 Aktual' : '🤖 Prediksi'}: {formatRupiah(p.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PricePredictionModal = ({ product, onClose }) => {
  const data = pricePredictions[product.id];

  if (!data) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '40px' }}>🤖</p>
            <p style={{ color: 'var(--text-mid)', marginTop: 12 }}>
              Data prediksi harga untuk produk ini sedang diproses oleh model AI.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="modal-icon">🤖</span>
            <div>
              <h3 className="modal-title">Prediksi Harga AI</h3>
              <p className="modal-subtitle">Deep Learning Time Series Model</p>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}><X size={20} /></button>
        </div>

        {/* Product info */}
        <div className="modal-product">
          <img src={product.image} alt={product.name} className="modal-product-img" />
          <div>
            <p className="modal-product-name">{product.name}</p>
            <p className="modal-product-price">Harga sekarang: <strong>{formatRupiah(product.price)}</strong></p>
          </div>
        </div>

        {/* Insight banner */}
        <div className={`insight-banner ${data.trend}`}>
          {data.trend === 'down'
            ? <TrendingDown size={18} />
            : <TrendingUp size={18} />
          }
          <span>{data.insight}</span>
        </div>

        {/* Chart */}
        <div className="chart-wrap">
          <h4 className="chart-title">Tren Harga & Prediksi (Jan - Sep)</h4>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data.history} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value) => value === 'actual' ? 'Harga Aktual' : 'Prediksi AI'}
                iconType="circle"
              />
              <ReferenceLine x="Jun" stroke="#ccc" strokeDasharray="4 2" label={{ value: 'Sekarang', fontSize: 10 }} />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#EE4D2D"
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                connectNulls={false}
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#4A90D9"
                strokeWidth={2}
                strokeDasharray="6 3"
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                connectNulls={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Model info */}
        <div className="model-info">
          <div className="model-tag">
            <Zap size={12} />
            LSTM Model
          </div>
          <div className="model-tag">
            <Zap size={12} />
            Akurasi 87.3%
          </div>
          <div className="model-tag">
            <Zap size={12} />
            Data 12 Bulan
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricePredictionModal;
