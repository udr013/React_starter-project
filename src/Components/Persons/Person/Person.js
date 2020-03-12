import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass'
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
            <Fragment >
                <p onClick={this.props.click} >I'm {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={
                    this.props.changed} value={this.props.name}></input>
            </Fragment>
        )
    }

    // lifecyle fifthState
    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate')
    }
};

//add type savety to props
Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);