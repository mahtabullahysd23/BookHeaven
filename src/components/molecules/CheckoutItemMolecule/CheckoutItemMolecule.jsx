import React from 'react'
import './CheckoutItemMolecule.style.scss'

const CheckoutItemMolecule = () => {
  return (
    <div className="cart-item-checkout">
      <div className="cart-item-image">
        <img src="04.jpg" alt="product" />
      </div>
      <div className="cart-item-details">
        <div>
          <p>Product Name</p>
          <div className="cart-item-quantity-price">
            <p>Quantity: 1</p>
          </div>
        </div>
        <div>
        <h4>$400</h4>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItemMolecule