import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h3> HERE'S THE LIST FOR {props.zipCode}! </h3>
    <div>
    { props.hitlist.map(shop => <ListItem key={shop.id} shop={shop}/>)}
    </div>
    <h4> Now hurry & go grab a bite at one of these { props.hitlist.length } shops! </h4>
  </div>
)

export default List;