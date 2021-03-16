import React, { Fragment } from 'react'
import ContactItem from '../contact-item/contact-item'

const ContactList = ({ contacts }) =>{
var contactsTemplate;
if (contacts !== null){
    contactsTemplate = contacts.map(item =>{
        return(
            <ContactItem
                name={item.name}
                phone ={item.phone}
                gender = {item.gender}
                image = {item.image}
                starred = {item.starred}
            ></ContactItem>
    )
    })

    return(
        <Fragment>
            {contactsTemplate}
        </Fragment>
    )
}
}

export default ContactList;