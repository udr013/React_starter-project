import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';


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
    let btnClasses = [classes.Button]

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
      btnClasses.push(classes.Red)
    }

    const assignedClasses = [];
    if (this.state.persons.lenth <= 2){
    assignedClasses.push(classes.red);
    }
    if (this.state.persons.lenth <= 1){
    assignedClasses.push(classes.bold)
    }


    return (
      <div className={classes.App}>
        <h1 >Persons</h1>
        <p className={assignedClasses.join(' ')}>List of persons!</p>
        <button className={btnClasses.join(' ')} onClick={() => this.toggelPersonsList()}>{this.state.buttontext}
        </button>
        {/* just use the conditinal set persons variable...  */}
        {persons}
      </div>
    );
  }
}

//wrap the comonent in the higher livel component "Radium"
export default App;
