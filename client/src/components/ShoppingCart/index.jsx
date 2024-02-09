import React from 'react';

const ShoppingCart = ({ cartItems, onRemoveItem, onCheckout }) => {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${/* Calculate total price based on cartItems */}</p>
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
