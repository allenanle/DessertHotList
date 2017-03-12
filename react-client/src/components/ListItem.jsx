import React from 'react';

const ListItem = (props) => (
  <div>
    <b> {props.shop.name} </b>
    <div><i>
      rating: {props.shop.rating} | {props.shop.reviewCount} reviews
    </i></div>
    <hr width='50px'></hr>
  </div>
)

export default ListItem;