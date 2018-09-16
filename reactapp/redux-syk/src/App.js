import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Redux1 from './component/Redux1';
import Redux2 from './component/Redux2';
import {
BrowserRouter as Router,
Link,
Route
} from 'react-router-dom';
class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>

            <Link to="/Redux1">1</Link>  |
            |  <Link to="/Redux2">2</Link>
            <Route path="/Redux1" component={Redux1}/>
            <Route path="/Redux2" component={Redux2}/>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
