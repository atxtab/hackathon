import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetcher from '../../helpers/fetcher.js';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: this.props.vendor,
      user: this.props.user,
      quantities: this.props.quantities,
      order: {
        vendor_id: this.props.vendor.id,
        user_id: this.props.user.id,
        items: [
          {item_id: 1,
          item_quantity: 1,}
        ]
      }
    }
    this.doOrderPost = this.doOrderPost.bind(this);
  };

  doOrderPost(vendor_id, user_id, items) {
     return fetcher(
            'POST', 
            '/atxtab/api/v1.0/orders', 
            {
                vendor_id,
                user_id,
                items
            }
        )
        .then(res => console.log(res))
  }

  render() {
    
    return (
      <main>
        <h3>Order Summary from {this.props.vendor.vendor_name}</h3>
        {Object.keys(this.props.quantities)
          //filter out any zero quantity items
          .filter(key => !!Number(this.props.quantities[key]))
          .map((itemName) => (
            <div key={itemName}>
              <h5>Item / Quantity:</h5>
              <p>{itemName} / {this.props.quantities[itemName]}</p>
            </div>
          ))}
        <div className="menu-item">
          <h3>Payment Info</h3>
          <h5>Card on File:</h5>
          <p>**** **** **** 8725</p>
          <h5>Expiration Date:</h5>
          <p>08/19</p>
        </div>
        <Link to='/user/order'>
          <button className="button-primary" 
          onSubmit={this.doOrderPost(
            this.state.order.vendor_id, 
            this.state.order.user_id, 
            this.state.order.items)}>
            Submit Order
          </button>
        </Link>
      </main>
    )
  }
}

export default Cart;