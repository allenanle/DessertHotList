import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      input: e.target.value
    });
  }

  search() {
    this.props.search(this.state.input);
  }

  render() {
    return (
    <div>
      ENTER A ZIP CODE: <input value={this.state.input} onChange={this.onChange}/>
      <button onClick={this.search}>  MAGIC!  </button>
    </div>)
  }
}

export default Search;