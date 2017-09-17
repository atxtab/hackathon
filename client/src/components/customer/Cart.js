import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        
      }
    }
  };
  render() {
    return (
      <main>
        <h3>Order Summary</h3>
        <h5>Item:</h5>
        <p></p>
        <h5>Quantity:</h5>
        <p></p>
        <h3>Total:</h3>
        <p></p>
        <h5>Payment Info</h5>
        <h3>Card on File:</h3>
        <p>**** **** **** 8725</p>
        <h3>Expiration Date:</h3>
        <p>08/19</p>
        <Link to='/user/order'>
          <button className="button-primary">
            Submit Order
          </button>
        </Link>
      </main>
    )
  }
}

export default Cart;