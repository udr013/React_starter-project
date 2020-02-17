import React from 'react'
import Radium from 'radium'
import './Person.css'

const person = (props) => {
    // to make this work we need to wrap the App in Radiums StyleRoot
    const style = {
        '@media (min-width: 500px': {
            width: '450px'
        }
    };
    
    return (
        <div className="Person" style={style}>
            <p onClick={props.click} >I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.p}></input>
        </div>
    )
};

export default Radium(person);