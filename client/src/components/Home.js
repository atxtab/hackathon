import React from 'react';
import { Route, Link } from 'react-router-dom';

function Home(props) {
  return (
    <main>
      <button>Vendor</button>
      <Link to ='/user'>
        <button>Customer</button>
      </Link>
    </main>
  )
}

export default Home;