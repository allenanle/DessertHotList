import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hitlist: []
    }

    this.search = this.search.bind(this);
    this.getList = this.getList.bind(this);
  }

  // POST
  search (input) {
    var data = {zipcode: input};
    $.ajax({
      url: '/hitlist/search',
      type: 'POST',
      data: JSON.stringify(data),
      success: () => {
        console.log('-----> LIST GENERATED')
      },

      error: (error) => {
        console.log('-----> ERROR', error);
      }
    });
  }

  // GET
  getList () {
    $.ajax({
      url: '/hitlist',
      type: 'GET',
      contentType: 'application/json',

      success: (data) => {
        this.setState({
          hitlist: data
        })
        console.log('-----> ')
      },

      error: (error) => {
        console.log('-----> ERROR', error);
      }
    });
  }

  render () {
    return (<div>
      <h1>DESSERT HIT LIST</h1>
      <Search search={this.search}/>
      <List hitlist={this.state.hitlist}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));