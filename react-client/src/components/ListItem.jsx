import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color : '#000000',
      textDecoration : 'none',
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState ({
      textDecoration: 'line-through',
    })
  }

  render() {
    var style = {
      color: '#008080',
      textDecoration: 'none',
      textTransform: 'uppercase'
    }

    return (
      <div onClick={this.onClick} style={this.state}>
        <b><a href={this.props.shop.url} style={style}>
          {this.props.shop.name}
        </a></b>
        <div><i>
          rating: {this.props.shop.rating} | {this.props.shop.reviewCount} reviews
        </i></div>
        <hr width='50px'></hr>
      </div>
    )
  }
}

export default ListItem;