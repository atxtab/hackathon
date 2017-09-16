import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './customer/UserProfile';
import Event from './customer/Event';
import Vendor from './customer/Vendor';
import Order from './customer/Order';
import Complete from './customer/Complete';
import Cart from './customer/Cart';
import VendorProfile from './vendor/VendorProfile';
import VendorOrders from './vendor/VendorOrders';
import VendorStats from './vendor/VendorStats';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">  
            <h1 className="title">APP NAME</h1>
          </div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/user" component={UserProfile}/>
          <Route exact path="/user/event" component={Event}/>
          <Route exact path="/user/vendor" component={Vendor}/>
          <Route exact path="/user/order" component={Order}/>
          <Route exact path="/user/complete" component={Complete}/>
          <Route exact path="/user/cart" component={Cart}/>
          <Route exact path="/vendor" component={VendorProfile}/>
          <Route exact path="/vendor/stats" component={VendorStats}/>
          <Route exact path="/vendor/orders" component={VendorOrders}/>
          <div className="logo"></div>
        </div>
      </Router>
    );
  }
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />ß
