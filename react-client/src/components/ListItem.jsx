import React from 'react';

const ListItem = (props) => (
  <div>
    <b><a href={props.shop.url}> {props.shop.name} </a></b>
    <div><i>
      rating: {props.shop.rating} | {props.shop.reviewCount} reviews
    </i></div>
    <hr width='50px'></hr>
  </div>
)

export default ListItem;