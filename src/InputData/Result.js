import React, { Component } from "react";

export const Result = ({lName, fName}) => {
    return(
        <div>
            <h4> First Name {fName} </h4> 
          
            <h4> Last Name  {lName} </h4>  
           
        </div>
    );
}