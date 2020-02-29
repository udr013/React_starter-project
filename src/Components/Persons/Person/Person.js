import React from 'react';
import classes from './Person.css';

const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click} >I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.p}></input>
        </div>
    )
};

export default person;