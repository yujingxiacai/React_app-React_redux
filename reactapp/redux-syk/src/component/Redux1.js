import React, { Component } from 'react';
import {connect} from 'react-redux';
const add=()=>{
    console.log('add');
    return{
        type:'ADD'//这里必须要返回值，且必须有这一个参数，type
    }
}
 class Redux1 extends Component {
     addOne(){
         this.props.add()
     }
  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.addOne.bind(this)}>加1</button>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
 return{
     count:state.count
 }
}
const mapDispatchToprops = (dispatch)=>{
return{
    addOne:()=>dispatch(add())
}
}
export default connect(mapStateToProps,mapDispatchToprops)(Redux1);