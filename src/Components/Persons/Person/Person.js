import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    constructor (props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    // get required context and access it anywhere in class base components with 'context'
    static contextType = AuthContext;

  // // lifecyle firstState, normally you won't use this state
  // static getDerivedStateFromProps(props, state) {
  //     console.log('[Person.js] getDerivedStateFromProps');
  //     return state;
  // }

  // lifecyle secondState
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate");
    // we need to return boolean
    return true;
  }

  // lifecyle thirdState
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount(){
    //   this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context)
  }
  // lifecyle fourthState
  render() {
    console.log("[Person.js] render");
    return (
      <Fragment>
        {/* <AuthContext.Consumer>
        { (context) => context.authenticated ? <p>Authenticated!</p> : <p>Not Authenticated!</p>}
        </AuthContext.Consumer> */}
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Not Authenticated!</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          key="12"
        //   ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }

  // lifecyle fifthState
  componentDidUpdate() {
    console.log("[Person.js] componentDidUpdate");
  }
}

//add type savety to props
Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withClass(Person, classes.Person);
