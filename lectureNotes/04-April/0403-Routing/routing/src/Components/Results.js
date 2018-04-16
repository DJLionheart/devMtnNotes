import React, { Component } from 'react';
import axios from 'axios';



export default class Results extends Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    }

    componentDidMount() {

        axios.get(`https://joes-autos.herokuapp.com/api/vehicles?color=${ this.props.match.params.color }`).then( res => {
            this.setState({
                cars: res.data
            })
            
        })

    }
    
    render() {

        // <hr /> is a horizontal row line
        return(
            <div>
                <h3>Here are the results:</h3>
                url parameter value is: { this.props.match.params.color }
                <hr />
                { JSON.stringify(this.state.cars, null, 2) }
            </div>
        )
    }
}