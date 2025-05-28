import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../assets/logo.jpeg';

const ProductCard = ({ product, addToCart }) => {
  const renderStars = () => {
    const stars = [];
    const rating = product.rating || 4; // default rating if not available

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          color={i < rating ? '#f5a623' : '#ddd'}
          size={14}
        />
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <img src={`/images/${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="rating">{renderStars()}</div>
      <strong>₹{product.price.toFixed(2)}</strong>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
