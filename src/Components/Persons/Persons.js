import React, { Component } from 'react';
import Person from './Person/Person';

//class components use lifecycle hooks
// class Persons extends PureComponent {
    class Persons extends Component {

    // // lifecyle firstState, normally you won't use this state
    // static getDerivedStateFromProps (props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // lifecyle secondState
    //// if checking all props of a component beter use PureComponent instead of Component
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        // shallow comparisson on pointers! be aware!
        return nextProps.persons !== this.props.persons 
        || nextProps.changed !== this.props.changed 
        || nextProps.clicked !== this.props.clicked
            ? true : false;
        // we need to return boolean
    }

     // lifecyle thirdState
     getSnapshotBeforeUpdate(prevProps, prevState) {
         console.log('[Persons.js] getSnapshotBeforeUpdate')
         return {message: 'snapshot!'};
     }

     // lifecyle fourthState
    render() {
        console.log('[Persons.js] render')

        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                //key is required for react to efficiently update DOM, so assign a usefull value, like id..
                key={person.id}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
            />
        }
        )
    }

     // lifecyle fifthState
    componentDidUpdate(prevProps,prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot);
     }
};

export default Persons;