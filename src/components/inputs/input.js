import React, { Component} from 'react'

import './input.css'

class Inputs extends Component{

    render(){
        return(
            <form>
                <div class="form-group">
                    <label>Contact name</label>
                    <input type="text" class="form-control" placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label>Contact number</label>
                    <input type="text" class="form-control" placeholder="Enter number" />
                </div>
                <div class="form-group">
                    <label>Contact number image</label>
                    <input type="number" class="form-control" placeholder="Enter image number" />
                </div>
                <div class="form-group">
                    <label>Contact Gender</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        )
    }
}

export default Inputs;