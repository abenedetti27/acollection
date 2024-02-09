import React from 'react';

const OrderConfirmation = ({ orderDetails }) => {
  return (
    <div className="order-confirmation">
      <h2>Order Confirmation</h2>
      {/* Display order summary and confirmation details */}
      <p>Order ID: {orderDetails.orderId}</p>
      <p>Total: ${orderDetails.totalAmount}</p>
      {/* Add more confirmation details */}
    </div>
  );
};

export default OrderConfirmation;
