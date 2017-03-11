import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h3> HERE'S YOUR LIST! </h3>
    { props.hitlist.map(shop => <ListItem shop={shop}/>)}
    Now hurry & go grab a bite at one of these { props.hitlist.length } shops!
  </div>
)

export default List;