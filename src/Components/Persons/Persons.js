import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        name={person.name}
        age={person.age}
        //key is required for react to efficiently update DOM, so assign a usefull value, like id..
        key={person.id}
        click={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
    />
});

export default persons;