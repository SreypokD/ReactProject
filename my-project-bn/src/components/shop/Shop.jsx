import React, { useContext, useState } from 'react';
import './Shop.css';
import product from '../../utils/product.json';
import { ShopContext } from '../context/ShopContext';

const Shop = () => {
  const { addToCart } = useContext(ShopContext);
  const [searchText, setSearchText] = useState('');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredProducts = product.products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="shop-container">
      <div className="h-search">
        <input
          type="text"
          placeholder="Search product name"
          value={searchText}
          onChange={handleSearch}
        />
        <i className="material-icons">search</i>
      </div>
      <div className="product-contain">
        {filteredProducts.map((product, index) => (
          <div className="card_container" key={index}>
            {/* Rest of your code */}
            <div className="contain-img">
              <img src={product.image} alt="" className="card-img" />
            </div>
            <div className="card-text">
              <h4>{product.name}</h4>
              <p>Model: {product.model}</p>
              <p>Size: {product.size}</p>
              <p>Capacity: {product.capacity}</p>
              <p>
                Price: <strong className="price">${product.price}</strong>
              </p>
            </div>
            <div className="cart-fav flexCenter">
              <div className="favorite">
                <i
                  className="material-icons"
                  onClick={() => toggleFavorite(product.id)}
                >
                  {favorites.includes(product.id)
                    ? 'favorite'
                    : 'favorite_border'}
                </i>
              </div>
              <div className="cart">
                <button onClick={() => addToCart(product)}>
                  <i className="material-icons">shopping_cart</i>
                </button>
              </div>
            </div>
            </div> 
        ))}
          </div>
    </div>
      );
};

      export default Shop;
      {/* <p>{favorites.includes(product.id) ? '1' : '0'}</p> */}

    