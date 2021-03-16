import React, { Component} from 'react'

import './input.css'

class Inputs extends Component{

    render(){
        return(
            <form className="inputsForm">
                <div className="form-group">
                    <input type="text" placeholder="Name"></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Phone"></input>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="ImageURL"></input>
                </div>
                <button type="submit" className="btn btn-info">Add</button>
            </form>
        )
    }
}

export default Inputs;