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

  onChange(event) {
    this.setState ({
      input: event.target.value
    });

    if (event.charCode == 13) {
      this.props.search(this.state.input);
    }
  }

  onSearch() {
    this.props.search(this.state.input);
  }

  render() {
    return (
    <div>
      ENTER A ZIP CODE: <input value={this.state.input} onChange={this.onChange} onKeyPress={this.onChange}/>
      <button onClick={this.onSearch}> MAGIC! </button>
    </div>)
  }
}

export default Search;