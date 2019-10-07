import React, { Component } from "react";
import { Result } from './Result';

class Input extends Component {
    state = {
        lName: '',
        fName: ''
      };

    onClick = () => {
        const { fName, lName } = this.state;
        console.log(fName, lName);
        // debugger
    }

    onLNameChange = (e) => {
        this.setState({lName: e.target.value})
      }
      onFNameChange = (e) => {
        this.setState({fName: e.target.value});
       
      }
 render() {

    const { fName, lName } = this.state;
    
return (
  <div>
    First name: <input type="text" name="fname" onChange={this.onFNameChange} value={this.state.fName} />
    <br />
    Last name: <input type="text" name="lname" onChange={this.onLNameChange} value={this.state.lName} />
    <br />
    <button onClick={this.onClick}>Click here!!</button>

    <Result fName={fName} lName={lName} />
  </div>
);
  }
}

export default Input;