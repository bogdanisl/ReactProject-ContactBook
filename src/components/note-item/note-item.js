import React, { Component } from 'react'

import './note-item.css'

class NoteItem extends Component{
    state ={
        name: this.props.name,
        text: this.props.text
    }
    render(){
        const { name, text} = this.state
            return(
                <div className="card w-75 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            )
    }
}

export default NoteItem;