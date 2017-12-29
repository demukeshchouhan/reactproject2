import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dogActions from "../../actions/DogActions";
import PropTypes from 'prop-types'; 
// import { Text } from "react-validate-framework";


const mapStateToProps = (state) => ({
    dogs : state.dogReducer.dogs
});

const mapDisptachToProps = (dispatch) => ({
    actions : bindActionCreators(dogActions, dispatch)
});


@connect(mapStateToProps, mapDisptachToProps)
export default class AddNewDog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "newstate"
        }
    }

    handleAddDog() {
        // get and set  variables
        let firstname = this.newdog_firstname;

        // validate all variables and values


        // setup new state
        this.props.actions.addNewDog({
            id : 2,
            fullname : firstname.value
        });
        console.log("adding new dog", this.props);
    }

    render() {
        return (
        <div>
            <span>Add new dog to list </span>
            <input 
                type="text" 
                ref={ (input) => this.newdog_firstname = input }
                name="firstname"
                placeholder="Please enter your dog's fullname" 
            />
            <button onClick={ () => this.handleAddDog() }>Add</button>
        </div>
        )
    }
}


AddNewDog.PropTypes = {
    
}
