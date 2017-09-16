import React from 'react';
import { Link } from 'react-router-dom';

function Cart(props) {
  return (
    <main>
      <p>Order Summary</p>
      <p>Payment Info</p>
      <Link to='/user/order'>
        <button>
          Submit Order
        </button>
      </Link>
    </main>
  )
}

export default Cart;