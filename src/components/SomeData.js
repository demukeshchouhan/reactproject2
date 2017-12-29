import React, { Component } from 'react';
import _ from "lodash";
export default class SomeData extends Component {

    render() {
        let newDataMap = this.props.data.data.data;
        let newData = _.map(newDataMap, (key, val) => {
            // console.log("map", key, val);
            return(
                <div key={key.id + key}>
                <span>{key.first_name} {key.last_name}</span>
                </div>
            )
        });
        
        return (
        <div>
            {newData}
        </div>
        )
    }
}
