import React, {useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

//functional components use React hooks useEffect()
const cockpit = (props) => {
    // Does not work in function component as we do not have a constructor
    // const toggleBtnRef =React.React.createRef();
    // We can use a hook ;)
    const toggleBtnRef = useRef(null);
    //To early
    //toggleBtnRef.current.click();

    // this does not work in functional components!
    // static contextType = AuthContext;
    // So we use a hook again!
    const authContext = useContext(AuthContext);

    // will run for every render cycle
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect 1')
        // alert('Persons updated render useEffect 1 ')
        // if added, now will only run when persons changes, with empty array it will run only initially or when distroyed
    }, [props.persons]);

    // will run for every render cycle
    useEffect(()=>{
        toggleBtnRef.current.click();
        console.log('[Cockpit.js] useEffect 2')
        // setTimeout(() => {
            // alert('Will start in useEffect 2 ')
        // }, 1000 );
        return () => { console.log('Cleanup in useEffect 2')}
        // if added, now will only run when persons changes, with empty array it will run only initially or when distroyed
    }, []);


    let btnClasses = '';
    //btnClasses =[classes.button] get those by default
    if(props.showPersons){
        btnClasses = classes.Red
        // btnClasses.push(classes.Red);
    }

    let assignedClasses = [];
    if (props.personsLength <= 2){
    assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1){
    assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>List of persons!</p>
            <button key='1' ref={toggleBtnRef} className={btnClasses} onClick={props.toggle}>
                {props.text}
            </button>
            {/* <AuthContext.Consumer>
            {(context) => !context.authenticated? <button onClick={context.login}>Login</button>: null}
            </AuthContext.Consumer> */}
            {!authContext.authenticated ? <button onClick={authContext.login}>Login</button>: null}
        </div>
    )
};
//only will rerender when input changes (personsLenth) based on snapshot
export default React.memo(cockpit);