import React, { Component } from 'react'

export default class Refs01 extends Component {
    constructor(props){
        super(props) 
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        }
        add = () =>{
            let value_1 = parseInt(this.myRef1.current.value);
            let value_2 = parseInt(this.myRef2.current.value);
            alert(value_1 + value_2);
        }
    
  render() {
    return <>
    Enter Number 1: <br /><input name="teaxtbox1" ref={this.myRef1} type="text" /> <br/>
    Enter Number 2: <br /><input name="teaxtbox2" ref={this.myRef2} type="text" /> <br/>
    <button className='mt-2' onClick={this.add}>Add</button>
    

    </>
  }
}
