import React, { Component } from 'react';
import keyStore from '../keystore.js'
import ForecastTable from './ForecastTable.jsx';

class Main extends Component {
  
  state = {
    loading: true,
    forecast: null
  }

  async componentDidMount() {
    const url = keyStore.APIURL;
    const response = await fetch(url);
    const weatherForecast = await response.json();
    this.setState({
      forecast: weatherForecast.list,
      loading: false
    })
  }

  render() {
    return <div className="App-main-area">
      {this.state.loading
        ? <div>loading...</div>
        : <div>
          Temp: {this.state.forecast[0].main.temp}
          <br />
          Humidity: {this.state.forecast[0].main.humidity}
          <br />
          Weather: {this.state.forecast[0].weather[0].description}
          <br />
          <img src={`http://openweathermap.org/img/wn/${this.state.forecast[0].weather[0].icon}@2x.png`} alt={`${this.state.forecast[0].weather[0].description} icon`} />
          <br />
          Date: {this.state.forecast[0].dt_txt}
          {/* <ForecastTable forecast={this.state.forecast} /> */}
          </div>}
    </div>
  }
}

export default Main;