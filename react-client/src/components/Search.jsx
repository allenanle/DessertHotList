import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onChange (event) {
    this.setState({
      input: event.target.value
    console.log('---> AS TYPING', this.state.input);
    });
  }

  onSearch() {
    this.props.search(this.state.input);
  }

  render() {
    return (
    <div>
      ENTER A ZIP CODE: <input value={this.state.input} onChange={this.onChange}/>
      <button onClick={this.onSearch}>  MAGIC!  </button>
    </div>)
  }
}

export default Search;