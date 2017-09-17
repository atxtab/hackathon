import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Vendor extends Component {

  render() {
    
    return (
      <main>
        <h2 className="vendor-name">{this.props.vendor.vendor_name}</h2>
        <form>

          {this.props.vendor.items.map((item, i) => {
            console.log(item.item_name)
            return (
              <div className="menu-item" key={item.item_name}>
                <h3>{item.item_name} - ${item.item_price}</h3>
                <p>{item.item_description}</p>
                <input type='text' value={this.props.quantities[item.item_name]} name={item.item_name} onChange={this.props.onChange} placeholder='#'></input>
              </div>
            )
          })}

          <Link to='/user/cart'>
            <button className="button-primary">
              View Cart
            </button>
          </Link>
        </form>
      </main>
    )
  }
}

export default Vendor;
