import React, { Component} from 'react'

import './contact.item.css'

class ContactItem extends Component{
    state ={
        name: this.props.name,
        image: this.props.image,
        phone: this.props.phone,
        gender: this.props.gender,
        starred : this.props.starred
    }
    setRandomImage = () =>{
        var randomAvatar = Math.floor(Math.random()*Math.floor(99));

        this.setState({
            image: randomAvatar
        })
    }

    setStar = () =>{
        if(this.state.starred==`fas fa-star fa-2x`){
            this.setState({
                starred: `far fa-star fa-2x`
            })
            console.log("default");
        }
        else{
            this.setState({
                starred: `fas fa-star fa-2x`
            })
            console.log("starred");
        }
    }
    render(){
        const { name, phone, image, gender, starred} = this.state
        const image_URL = `https://randomuser.me/api/portraits/${gender}/${image}.jpg`;
            return(
                <div className="super-card col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card">
                    <img src={image_URL} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{phone}</p>
                                    <nav class="navbar navbar-light bg-light justify-content-between">
                                    <button onClick={this.setRandomImage} className="btn btn-primary">Random Image</button>
                                     <form class="form-inline">
                                        <button onClick={this.setStar} className="star">
                                        <i className={starred}>
                                        </i></button>
                                    </form>
                                </nav>
                        </div>
                </div>
                </div>
            )
    }
}

export default ContactItem;