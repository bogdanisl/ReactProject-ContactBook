import React, { Fragment } from 'react'
import ContactItem from '../contact-item/contact-item'

const FavouriteContactList = ({ contacts, removeContact, updatContact }) =>{
var contactsTemplate;
if (contacts !== null){
    var contactsTemp = contacts.filter(t => t.starred == 'fas fa-star fa-2x');
    console.log(contactsTemp);
    contactsTemplate = contactsTemp.map(item =>{
        return(
            <ContactItem removeContact={removeContact} updatContact={updatContact}
                key={item.id}    
                name={item.name}
                id={item.id}
                phone ={item.phone}
                gender = {item.gender}
                image = {item.image}
                starred = {item.starred}
            ></ContactItem>
    )
    })

    return(
        <Fragment>
            <div className="row">
            {contactsTemplate}
            </div>
        </Fragment>
    )
}
}

export default FavouriteContactList;