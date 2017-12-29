import React, { Component } from 'react';
import * as dogActions from "../../actions/DogActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListDog from "./ListDog";


class ShowDogs extends Component {

	constructor(props) {
        super(props);
    }
	
	componentWillMount() {
		this.props.actions.getAllDogs();
	}
	
	render() {
			return (
				<div>
					<h2>Showing All Dogs...</h2>
					<ListDog dogsList={this.props.dogs}/>
				</div>
			);
	}
}


const stateProp = (state) => ({
	dogs : state.dogReducer.dogs,
	data : state.dogReducer.data
});

const dispatchProp = (dispatch) => ({
	actions : bindActionCreators(dogActions,dispatch)
});

export default connect(stateProp, dispatchProp)(ShowDogs);