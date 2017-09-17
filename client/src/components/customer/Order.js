import React from 'react';

function Order(props) {
  return (
    <main>
      <p>Order Number: {props.order_id}</p>
      <p>Wait time: </p>
    </main>
  )
}

export default Order;