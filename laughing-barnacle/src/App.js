import React from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className="App App-container">
      <Header />
      <div className="App-left-area" />
      <div className="App-right-area" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
