import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  return (
    <main>
      <h3>Order Summary</h3>
      <h5>Item:</h5>
      <p></p>
      <h5>Quantity:</h5>
      <p></p>
      <h3>Total:</h3>
      <p></p>
      <p>Payment Info</p>
      <Link to='/user/order'>
        <button className="button-primary">
          Submit Order
        </button>
      </Link>
    </main>
  )
}

export default Cart;