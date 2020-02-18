import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'

const StButton = styled.button`
background-color: ${props => props.alt ? 'darkred' :'green'};
color: white;
font: inherit;
border: 1px solid black;
padding: 8px;
cursor: pointer;
margin: 5px;
&:hover { 
  background-color: ${props => props.alt ? 'red' :'lightgreen'};
  color: black; 
}
`

class App extends Component {
  //initial state of objects
  state = {
    persons: [
      { id: '4343', name: 'Mark', age: 20 },
      { id: '643', name: 'Sas', age: 27 },
      { id: '545g', name: 'Kay', age: 122 },
      { id: '566', name: 'Lee', age: 84 }
    ],
    showPersons: false,
    buttontext: 'Show list'
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
    this.setState({ persons: persons })

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

  toggelPersonsList = () => {
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

  //everything within render will be executed
  render() {

    //local variable
    let persons = null;

    // set the above variable depending on showPersons
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* we get the index for free */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              //key is required for react to efficiently update DOM, so assign a usefull value, like id..
              key={person.id} />
          })}
        </div>
      )

    }

    // const classes = ['Red', 'Bold'].join(' ');
    const classes = [];
    if (this.state.persons.lenth <= 2)
      classes.push('Red');
    if (this.state.persons.lenth <= 1)
      classes.push('Bold');


    return (
      <div className="App">
        <h1 >Persons</h1>
        <p className={classes.join(' ')}>List of persons!</p>
        <StButton alt={this.state.showPersons} onClick={() => this.toggelPersonsList()}>{this.state.buttontext}
        </StButton>
        {/* just use the conditinal set persons variable...  */}
        {persons}
      </div>
    );
  }
}

//wrap the comonent in the higher livel component "Radium"
export default App;
