import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visited: false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState ({
      visited: !this.state.visited
    })
  }

  render() {
    var style = {
      textDecoration : 'none',
      color : '#008080'
    }

    if (this.state.visited) {
      return (
      <div onClick={this.onClick}><strike>
        <b><a href={this.props.shop.url} style={style}> {this.props.shop.name} </a></b>
        <div><i>
          rating: {this.props.shop.rating} | {this.props.shop.reviewCount} reviews
        </i></div>
        <hr width='50px'></hr>
      </strike></div> )
    }

    else {
      return (
      <div onClick={this.onClick}>
        <b><a href={this.props.shop.url} style={style}> {this.props.shop.name} </a></b>
        <div><i>
          rating: {this.props.shop.rating} | {this.props.shop.reviewCount} reviews
        </i></div>
        <hr width='50px'></hr>
      </div> )
    }
  }
}

export default ListItem;