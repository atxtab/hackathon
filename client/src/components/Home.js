import React from 'react';
import { Route, Link } from 'react-router-dom';

function Home(props) {
  return (
    <main>
      <Link to='/vendor'>
        <button>Vendor</button>
      </Link>
      <Link to ='/user'>
        <button>Customer</button>
      </Link>
    </main>
  )
}

export default Home;