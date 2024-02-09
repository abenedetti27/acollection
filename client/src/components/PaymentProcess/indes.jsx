import React from 'react';

const PaymentProcess = ({ onPayment }) => {
  return (
    <div className="payment-process">
      <h2>Payment Processing</h2>
      {/* Display payment details and options */}
      {/* Add input fields, select options, and payment processing logic */}
      <button onClick={onPayment}>Proceed to Pay</button>
    </div>
  );
};

export default PaymentProcess;
