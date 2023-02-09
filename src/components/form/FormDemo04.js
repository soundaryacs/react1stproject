import React, { Component } from 'react'

export default class FormDemo04 extends Component {
    constructor(props) {
        super(props)
        this.state = { 'userName': 'sanjay' };

        this.myRef1 = React.createRef()
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.userName);
    }
    render() {
        return (
            <div>
                <div>name is: {this.state.userName}</div>
                <form onSubmit={this.submitHandler}>
                    <input name='userName' value={this.state.userName} onChange={this.changeHandler} />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}
