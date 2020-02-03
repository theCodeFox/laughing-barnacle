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
        : <table>
          <thead>
          <tr id="forecastHeader">
              <td>
                Date/Time
              </td>
              <td>
                Weather Icon
              </td>
              <td>
                Weather
              </td>
              <td>
                Temp
              </td>
              <td>
                Humidity
              </td>
            </tr>
          </thead>
          <tbody>
            {this.state.forecast.map((data,i) => <tr key={`data-${i}`}>
              <td>
                {data.dt_txt}
              </td>
              <td>
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={`${data.weather[0].description} icon`} />
              </td>
              <td>
                {data.weather[0].description}
              </td>
              <td>
                {Math.round(data.main.temp - 273.15)} Celcius
              </td>
              <td>
                {data.main.humidity}
              </td>
            </tr>)}
          </tbody></table>}
    </div>
  }
}

export default Main;