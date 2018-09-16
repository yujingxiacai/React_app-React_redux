import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
}from 'react-router-dom';
const Xxx = ()=><p>Xxx,your choose</p>
const Test = ()=><p>Test,your choose</p>
const Childtest = ({to,lable})=>{
return(
  <Route
  path={to}
  exact
  children={({match})=>{
    return(
    <div>
      {match?">":""}
      <Link to={to}>{lable}</Link>
    </div>
    )
  }}
  />
)
}
export default class Childrenself extends Component {
  render() {
    return (
    <Router>
      <div>
        <h1>关于自定义Link的应用·（children渲染）</h1>
        <Childtest to="/" lable="xxx"/>
        <Childtest to="/test" lable="test"/>
        <Route exact path="/" component={Xxx}/>
        <Route path="/test" component={Test}/>
      </div>
    </Router>
    )
  }
}
``