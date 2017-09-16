import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetcher from '../../helpers/fetcher';

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendor: [],
    }
  }

  componentDidMount() {
    fetcher('GET', '/atxtab/api/v1.0/vendors/1')
    .then(res => console.log(res) || res)
      .then(vendor => {
        this.setState( vendor )
        console.log(this.state)
        });
  }

  render() {
    const items = this.state.vendor.items;
    const vendor = this.state.vendor.vendor_name;
    console.log(items, vendor)

    if(!items || !vendor) {
      return (
        <div>loading</div>
      )
    }
    return (
      <main>
        <h2>{vendor}</h2>
        <form>

          {items.map((item, i) => {
            console.log(item.item_name)
            return (
              <div key={i}>
                <h3>{item.item_name}</h3>
                <p>{item.item_description}</p>
                <h5>{item.item_price}</h5>
                <input placeholder='#'></input>
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
