import React, { Component } from 'react';
import keyStore from '../keystore.js'


// This contains the main content within the browser. Don't forget you can split this out into further components for increased clarity.
class Main extends Component {
  // The state is where React stores tempory information. 
  state = {
    loading: true,
    forecast: null
  }

  // This fetches the data on load from the weather API. It is asyncronous.
  // Future Task: loading icon while waiting for data?
  async componentDidMount() {
    const url = keyStore.APIURL;
    const response = await fetch(url);
    const weatherForecast = await response.json();
    this.setState({
      forecast: weatherForecast.list,
      loading: false
    })
  }

  // Does this look familiar? That's because it is heavily inluenced by HTML and is what is displayed within the component!
  render() {
    return <div className="App-main-area">
      {/* JS must be within curly brackets */}
      {this.state.loading
        ? <div>loading...</div>
        : <table>
          <thead>
          <tr id="forecastHeader">
              <td><h4>Date/Time</h4></td>
              <td><h4>Weather Icon</h4></td>
              <td><h4>Description</h4></td>
              <td><h4>Temp (Celcius)</h4></td>
              <td><h4>Humidity</h4></td>
            </tr>
          </thead>
          <tbody>
            {this.state.forecast.map((data,i) => <tr key={`data-${i}`}>
              <td>
                {data.dt_txt}
              </td>
              <td className="icon-backdrop">
                <img
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={`${data.weather[0].description} icon`} />
              </td>
              <td>
                {data.weather[0].description}
              </td>
              <td>
                {Math.round(data.main.temp - 273.15)}
              </td>
              <td>
                {data.main.humidity}
              </td>
            </tr>)}
          </tbody></table>}
    </div>
  }
}

// Don't forget to export your comenents so they can be imported.
export default Main;