import React, { Component } from 'react'

export default class ShowHide01 extends Component {
    state ={
        flag:true,
    };
    toggleFlag =() =>{
        this.setState({flag: !this.state.flag})
    }
  render() {
    return (
      <div>
        {this.state.flag ? <h1>This is text</h1> :null }
        <button onClick={this.toggleFlag}>
            {this.state.flag ? "HIDE" : "SHOW"}</button>
      </div>
    )
  }
}
