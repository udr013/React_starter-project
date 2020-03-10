import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {

    // // lifecyle firstState, normally you won't use this state
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }
    
    // lifecyle secondState
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate')
        // we need to return boolean
        return true;
    }

    // lifecyle thirdState
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate')
        return null;
    }

    // lifecyle fourthState
    render() {
        console.log('[Person.js] render')
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={
                    this.props.changed} value={this.props.p}></input>
            </div>
        )
    }

    // lifecyle fifthState
    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate')
    }
};

export default Person;