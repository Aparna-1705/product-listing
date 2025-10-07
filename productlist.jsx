import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="product-grid">
    {products.length > 0 ? (
      products.map((product) => <ProductCard key={product.id} product={product} />)
    ) : (
      <p>No products found.</p>
    )}
  </div>
);

export default ProductList;
