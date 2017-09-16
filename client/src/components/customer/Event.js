import React from 'react';
import { Link } from 'react-router-dom';

function Event(props) {
  return (
    <main>
      <Link to ='/user/vendor'>
        <button className="button-primary">
          VENDOR 1
        </button>
      </Link>      
      <button className="button-primary">
        VENDOR 2
      </button>
      <button className="button-primary">
        VENDOR 3
      </button>
    </main>
  )
}

export default Event;