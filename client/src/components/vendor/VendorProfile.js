import React from 'react';
import { Route, Link } from 'react-router-dom';

function VendorProfile(props) {
  return (
    <main>
      <Link to='/vendor/stats'>
        <button>
          Stats
        </button>
      </Link>
      <Link to='/vendor/orders'>
        <button>
          Orders
        </button>
      </Link>
    </main>
  )
}

export default VendorProfile;