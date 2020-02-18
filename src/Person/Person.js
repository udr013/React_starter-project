import React from 'react'
import styled from 'styled-components'
// import './Person.css'

const StyledDiv = styled.div`
width: 60%;
margin: 10px auto;
border: 1px solid #282828;
box-shadow: 0 2px 4px #eee;
padding: 16px;
text-align: center;

'@media (min-width: 500px': {
    width: '450px';
}
`
const person = (props) => {
    
    return (
        <StyledDiv className="Person">
            <p onClick={props.click} >I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.p}></input>
        </StyledDiv>
    )
};

export default person;