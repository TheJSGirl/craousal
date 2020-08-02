import React from 'react';
import './App.css';
import {Header} from './components/Header';
import { LiveClasses } from './components/LiveClasses';
import { Videos } from './components/Videos';

function App() {
  return (
    <div className="App">
      <Header />
      <Videos />
      <LiveClasses />
    </div>
  );
}

export default App;
