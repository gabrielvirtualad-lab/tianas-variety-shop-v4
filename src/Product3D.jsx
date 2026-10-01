import React from "react";

export default function Product3D({ product, onSelect }) {
  return (
    <button className="product-card" onClick={() => onSelect(product)} aria-label={`View ${product.name}`}>
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <span className="product-chip">{product.category}</span>
      </div>
      <div className="product-copy">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <strong>{new Intl.NumberFormat("en-NG", {style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(product.price)}</strong>
      </div>
      <span className="view-label">View item →</span>
    </button>
  );
}