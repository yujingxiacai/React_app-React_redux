import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

const Description = ({match})=>{
    console.log(match.params.id);
    let desurl = match.url;
    return(
      <Router>
        <div>
          <p>{match.params.id}:gitHub:www.github.com</p>
          <Link to={`${desurl}/deschilderen`}>children测试</Link>
        </div>
      </Router>
  )
    
}
const Chileed = ()=><h3>这是一个子链接的链接</h3>
export default class Syk extends Component {
  render() {
    let URL = this.props.match.url;
    console.log(this.props.match.url);
    return (
    <Router>
      <div>
        <div>
          <h1>Syk</h1>
        </div>
        <div>
            <Link to="/syk/description/1">Description</Link>  |  
            <Link to={`${URL}/links`}>Links</Link>  |
            <Link to="/syk/render">Rendersyk</Link>
            <Route path="/syk/description/:id" component={Description}/>
            <Route path={`${URL}/links`} component={Chileed}/>
            <Route path="/syk/render" render={()=>{return <p>这是一个render渲染的例子</p>}}/>
        </div>
      </div>
    </Router>
    )
  }
}
