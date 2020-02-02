import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App App-container">
      <header className="App-header-area">
        <h1 className="header-text">
          Simple Example Weather App
        </h1>
      </header>
      <div className="App-left-area" />
      <div className="App-right-area" />
      <div className="App-main-area">
        MAIN TEXT AREA
      </div>
      <footer className="App-footer-area">
      <a href="https://codeandstuff-manchester.github.io/">
          <img className="footer-img" src="./images/github-logo.png" alt="github icon" />
        </a>
        <a href="https://codeandstuff-manchester.github.io/">
          <img className="footer-img" src="./images/linkedin-logo" alt="linkedin icon" />
        </a>
        <a href="https://codeandstuff-manchester.github.io/">
          <img className="footer-img" src="https://d3jh33bzyw1wep.cloudfront.net/s3/W1siZiIsIjIwMTkvMDYvMTgvMTAvMDUvMTAvODYzL2NvZGUuUE5HIl0sWyJwIiwidGh1bWIiLCI2MDB4NDUwXHUwMDNlIl1d" alt="code and stuff icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
