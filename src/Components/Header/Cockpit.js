import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let btnClasses = '';
    //btnClasses =[classes.button] get those by default
    if(props.showPersons){
        btnClasses = classes.Red
        // btnClasses.push(classes.Red);
    }

    let assignedClasses = [];
    if (props.persons.length <= 2){
    assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
    assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>List of persons!</p>
            <button className={btnClasses} onClick={props.toggle}>
                {props.text}
            </button>
        </div>
    )
};

export default cockpit;