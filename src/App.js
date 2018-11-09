import React, { Component } from 'react';

import Counter from './containers/Counter';
import InputControl from './components/InputControl';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App-header">
       <Counter />
       <InputControl />
      </div>
    );
  }
}

export default App;
