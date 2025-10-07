import React from 'react';

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₹{product.price}</p>
      <p>⭐ {product.rating}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
