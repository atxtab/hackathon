import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">  
            <h2>Food Truck App</h2>
          </div>
          <Route exact path="/" component={UserProfile}/>
        </div>
      </Router>
    );
  }
}

export default App;

//<img src={logo} className="App-logo" alt="logo" />ß
