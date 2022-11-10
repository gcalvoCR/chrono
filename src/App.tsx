import React from 'react';
import './App.css';
import Chronometer from './components/Chronometer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Chronometer/>
    </div>
  );
}

export default App;
