import React from 'react'
import "./Shop.css"
import product from "../../utils/product.json"
const Shop = () => {
  return (
    <div className='product-contain'>
      {product.products.map((product, index) => (
        <div className="card_container" key={index}>
          <div className="contain-img">
            <img src={product.image} alt="" className="card-img" />
          </div>
          <div className="card-text">
            <h3>{product.name}</h3>
            <p>Model: {product.model}</p>
            <p>Size: {product.size}</p>
            <p>Capacity: {product.capacity}</p>
            <p>
              Price: <strong className="price">{product.price}</strong>
            </p>
          </div>
          <div className="cart-fav flexCenter">
            <div className="favorite">
                <p>0</p>
                <i className="material-icons">favorite_border</i>
            </div>
            <div className="cart">
              <button> <i className="material-icons">shopping_cart</i></button>
            </div>

          </div>
        </div>
      ))}
    </div>
  )
}

export default Shop
