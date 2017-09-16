import React from 'react';
import { Route, Link } from 'react-router-dom';

function UserProfile(props) {
  return (
    <main>
      <h3>User Name</h3>
      <p>phone number</p>
      <Link to='/user/event'>
        <button>
          Order Food
        </button>
      </Link>
    </main>
  )
}

export default UserProfile;