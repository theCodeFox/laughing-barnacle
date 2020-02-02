import React, { Component } from 'react';

class Main extends Component {
  
  state = {
    loading: true
  }

  componentDidMount() {

  }

  render() {
    return <div className="App-main-area">
      {this.state.loading ? <div>loading...</div> : <div>weather stuff</div>}
    </div>
  }
}

export default Main;