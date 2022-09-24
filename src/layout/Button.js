import React,{Fragment} from 'react';
import classes from "./Button.module.css"
const Button=props=>{


    return (
     
        <button type='button' onClick={props.clicked}>
          {props.title}
          {props.children}
        </button>
     
    );
}
export default Button;