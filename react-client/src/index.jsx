import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '_____',
      hitlist: []
    }
    this.search = this.search.bind(this);
    this.getList = this.getList.bind(this);
  }

  // POST
  search (input) {
    var zipCode = {zipCode: input};

    this.setState({
      zipCode: input
    });

    $.ajax({
      url: '/hitlist/search',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(zipCode),
      success: () => {
        console.log('---> LIST GENERATED!')
        this.getList();
      },

      error: (error) => {
        console.log('---> `POST` ERROR');
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
        console.log('---> LIST RETRIEVED!')
      },

      error: (error) => {
        console.log('---> `GET` ERROR', error);
      }
    });
  }

  render () {
    return (<div>
      <h1>DESSERT HIT LIST</h1>
      <Search search={this.search}/>

      <List hitlist={this.state.hitlist}
            zipCode={this.state.zipCode}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));