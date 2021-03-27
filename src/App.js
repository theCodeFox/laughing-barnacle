import React from 'react';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Main from './Components/Main';

// Extract the main parts of the app into components as will be easier to read and change when you come back to this at a later time. Don't forget, you may not touch this code for months. You may even wish to share it and work on it with another person!
function App() {
  return (
    <div className="App App-container">
      {/* Header component. Pulled out into component folder. Naming convention is that the file will follow the components name so is easier to find. Components are normally snake-case */}
      <Header />
      <div className="App-left-area" />
      <div className="App-right-area" />
      {/* Main component. Pulled out into component folder. Naming convention is that the file will follow the components name so is easier to find. Components are normally snake-case */}
      <Main />
      {/* Footer component. Pulled out into component folder. Naming convention is that the file will follow the components name so is easier to find. Components are normally snake-case */}
      <Footer />
    </div>
  );
}

export default App;
