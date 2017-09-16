import React from 'react';
import { Link } from 'react-router-dom';

function Vendor(props) {
  return (
    <main>
      <button>
        MENU ITEM 1
      </button>     
      <button>
        MENU ITEM 2
      </button>
      <button>
        MENU ITEM 3
      </button>
      <Link to='/user/cart'>
        <button>
          View Cart
        </button>
      </Link>
    </main>
  )
}

export default Vendor;