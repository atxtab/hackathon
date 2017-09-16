import React from 'react';
import { Link } from 'react-router-dom';

function Event(props) {
  return (
    <main>
      <Link to ='/user/vendor'>
        <button>
          VENDOR 1
        </button>
      </Link>      
      <button>
        VENDOR 2
      </button>
      <button>
        VENDOR 3
      </button>
    </main>
  )
}

export default Event;