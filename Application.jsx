import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import './index.css';

const App = () => {
  const products = [
    { id: 1, name: 'Product Name 1', price: 100, category: 'Category A', rating: 4.5, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product Name 2', price: 200, category: 'Category B', rating: 4.0, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product Name 3', price: 150, category: 'Category A', rating: 3.5, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product Name 4', price: 300, category: 'Category C', rating: 5.0, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product Name 5', price: 250, category: 'Category B', rating: 4.2, image: 'https://via.placeholder.com/150' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');

  const handleSearch = (term) => setSearchTerm(term);
  const handleCategoryChange = (cat) => setCategory(cat);
  const handleSortChange = (option) => setSortOption(option);

  // Filter + Search
  let filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (category !== 'All') {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }

  // Sorting
  if (sortOption === 'priceLow') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHigh') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'ratingHigh') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <FilterBar
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
        />
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default App;
