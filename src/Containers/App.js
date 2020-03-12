import React, { Component } from 'react';
// lowercase used for normal functions
import classes from './App.css';
// upercase for functional components
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Header/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClass from "../hoc/withClass";


class App extends Component {

  // // lifecyle firstState, normally you won't use this state
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[App.js] getDerivedStateFromProps');
  //   return state;
  // }
  
  // lifecyle secondState
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    // we need to return boolean
    return true;
  }

  // lifecyle thirdState
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate')
    return { message: 'snapshot!' };
  }


  //initial state of objects
  state = {
    persons: [
      { id: '4343', name: 'Mark', age: 20 },
      { id: '643', name: 'Sas', age: 27 },
      { id: '545g', name: 'Kay', age: 122 },
      { id: '566', name: 'Lee', age: 84 }
    ],
    showPersons: false,
    buttontext: 'Show list',
    changeCounter: 0
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //always use copies never change objects dirctly?
    const updatedPerson = {
      ...this.state.persons[personIndex]
    };

    updatedPerson.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = updatedPerson;
    //set state.persons to new value of local persons, setState might endup in a race condition with another setState
    // so use prevState explicitly
    this.setState((prevState, props) => {
      return { 
        persons: persons, 
        // cannot use ++
        changeCounter: prevState.changeCounter + 1 };
    });

  }

  deletePersonHandler = (index) => {
    // we call slice() to get a new copy
    // const persons = this.state.persons.slice();
    // or:
    const persons = [...this.state.persons]
    // start from index, and remove x elements
    persons.splice(index, 1)
    //set state.persons to new value of local persons
    this.setState({ persons: persons })
  }

  togglePersonList = () => {
    const show = this.state.showPersons;
    // note the additional {}
    if (!show) {
      this.setState({ buttontext: 'Hide list' })
    }
    if (show) {
      this.setState({ buttontext: 'Show list' })
    }
    this.setState({ showPersons: !show });
  }

  // lifecyle fourthState
  //everything within render will be executed
  render() {
    console.log('[App.js] render')

    //local variable
    let persons = null;

    // set the above variable depending on showPersons
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <Auxiliary>
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          showPersons={this.state.showPersons}
          toggle={this.togglePersonList}
          text={this.state.buttontext}
        />
        {/* just use the conditinal set persons variable...  */}
        {persons}
      </Auxiliary>
    );
  }

   // lifecyle fifthState
   componentDidUpdate(prevProps,prevState, snapshot) {
    console.log('[App.js] componentDidUpdate')
    console.log(snapshot);
 }

}

export default withClass(App, classes.App);
