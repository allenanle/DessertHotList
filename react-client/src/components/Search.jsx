import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState ({
      input: event.target.value
    });

    if (event.charCode == 13) {
      this.props.search(this.state.input);
    }
  }

  render() {
    var style = {
      width: 150,
      textAlign: 'center',
      fontFamily: 'Century Gothic',
      fontSize: 17.5,
      border: 0,
      outline: 0,
      background: 'transparent',
      borderBottom: '1px solid black',
      display: 'inline-block'
    }
    return (
      <div>
        <input placeholder='HMMM...' style={style} value={this.state.input} onChange={this.onChange} onKeyPress={this.onChange}/>
      </div>
    )
  }
}

export default Search;