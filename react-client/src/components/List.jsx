import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h3> HERE'S THE LIST FOR {props.zipCode}! </h3>
    <div>
    { props.hitlist.map(shop => <ListItem key={shop.id} shop={shop}/>)}
    </div>
    <h4> NOW HURRY & GO GRAB A BITE AT ONE OF THESE { props.hitlist.length } SHOPS! </h4>
  </div>
)

export default List;