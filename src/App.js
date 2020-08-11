import React, { Component } from 'react';
import './App.scss';
import TextHeader from './component/TextHeader';
import Introduce from './component/Introduce';
import Exercise1 from './component/Exercise1';
import Exercise2 from './component/Exercise2';
import Exercise3 from './component/Exercise3';
import Exercise4 from './component/Exercise4';
class App extends Component {
  render() {
    return <div className = "App">
      <TextHeader/>
      <Introduce/>
      <Exercise1/>
      <Exercise2/>
      <Exercise3/>
      <Exercise4/>
    </div>
  }
}

export default App;
