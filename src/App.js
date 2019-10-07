// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Input from './InputData/Input';

// function App() {
//   return (
//     <div className="App">
//       <Input name={'jamal'} age={23}/>
//       <Input name={'jamal'} age={23}/>
      
//     </div>
//   );
// }

// export default App;



import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from './InputData/Input';
// import InsertName from "./insertName";

    class App extends Component {
      
      
      render() {
        return (
          <div className="App">
        <Input />
      </div>
    );
      }
    }

    export default App;