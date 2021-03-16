import React, { Component} from 'react'

import './contact.item.css'

class ContactItem extends Component{
    state ={
        name: "Monkey",
        image: "https://static01.nyt.com/images/2017/09/12/us/12xp-monkey1/12xp-monkey1-superJumbo.jpg",
        phone: "+380(68)-132-32"
    }
    render(){
        const { name, phone, image} = this.state
        return(
            <div className="super-card col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
            </div>
        )
    }
}

export default ContactItem;