import React, { Component } from 'react';
import keyStore from '../keystore.js'

class Main extends Component {
  
  state = {
    loading: true
  }

  async componentDidMount() {
    const url = keyStore.APIURL;
    const response = await fetch(url);
    const weatherForecast = await response.json();
    console.log('here >>>',weatherForecast);
  }

  render() {
    return <div className="App-main-area">
      {this.state.loading ? <div>loading...</div> : <div>weather stuff</div>}
    </div>
  }
}

export default Main;