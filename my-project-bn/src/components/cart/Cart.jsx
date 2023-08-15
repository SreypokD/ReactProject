import React, { useContext, useState, useEffect } from 'react';
import './Cart.css';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { cart, getTotalCart } = useContext(ShopContext);

  const [countMap, setCountMap] = useState({});

  // Update countMap when cart changes
  useEffect(() => {
    const initialCountMap = {};
    cart.forEach((item) => {
      initialCountMap[item.id] = 0;
    });
    setCountMap(initialCountMap);
  }, [cart]);

  const handlePlus = (productId) => {
    setCountMap((prevCountMap) => ({
      ...prevCountMap,
      [productId]: prevCountMap[productId] + 1,
    }));
  };

  const handleMinus = (productId) => {
    if (countMap[productId] > 0) {
      setCountMap((prevCountMap) => ({
        ...prevCountMap,
        [productId]: prevCountMap[productId] - 1,
      }));
    }
  };

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="contain-each-card">
              <div className="contain-img">
                <img src={item.image} alt="" className="card-img" />
              </div>
              <div className="card-text">
                <h4>{item.name}</h4>
                <p>Model: {item.model}</p>
                <p>
                  Price: <strong className="price">{item.price}</strong>
                </p>
                <div className="calculator">
                  <button className="plus" onClick={() => handlePlus(item.id)}>
                    <i className="material-icons pluss">add_circle</i>
                  </button>
                  <div className="count">
                    <h4>{countMap[item.id]}</h4>
                  </div>
                  <button
                    className="minus"
                    onClick={() => handleMinus(item.id)}
                  >
                    <i className="material-icons minuss">do_not_disturb_on</i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3 id="total-price">Total: ${getTotalCart()}</h3>
        </div>
      ) : (
        <div className="no-product">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
            alt=""
            width={200}
          />
          <h1>No products added!</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;