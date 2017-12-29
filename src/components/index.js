import React, { Component } from 'react';
import ShowDogs from "./Dog/ShowDogs";
import AddNewDog from "./Dog/AddNewDog";
import SomeData from "./SomeData";

import * as dogActions from "../actions/DogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {

  constructor(props) {
	super(props);
	this.props.actions.getAllDogs();
		// console.log("SomeData", this.props.actions);
  }


  render() {
	return (
		<div>
			<ShowDogs />
			<AddNewDog />
			<hr />
			<SomeData data={this.props} />
		</div>
	)
  }

}


const stateProp = (state) => ({
	dogs : state.dogReducer.dogs,
	data : state.dogReducer.data
});

const dispatchProp = (dispatch) => ({
	actions : bindActionCreators(dogActions, dispatch)
});

export default connect(stateProp, dispatchProp)(App);