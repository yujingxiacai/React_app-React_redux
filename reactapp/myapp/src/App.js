import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Syk from './component/Syk';
import Yujingxiacai from './component/Yujingxiacai';
import Childrenself from './component/Childrenself';
import { BrowserRouter as Router,
Route,
Link,
Switch
} from "react-router-dom";

class App extends Component {

  render() {
    console.log(this.props);
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
          <Link to="/syk">Syk</Link> |   
          <Link to="/yujingxiacai">yujingxiacai</Link>  |
          <Link to="/childrenself">自定义路由</Link>
          
        </div>
        <div className="container">
        {/* <Switch> */}
          <Route path="/yujingxiacai" component={Yujingxiacai}/>
          <Route exact path="/syk" component={Syk}/>
          <Route  path="/childrenself" component={Childrenself}/>
        {/* </Switch> */}
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
