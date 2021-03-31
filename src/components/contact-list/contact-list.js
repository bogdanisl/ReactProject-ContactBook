import React, { Fragment, Component } from 'react';
import ContactItem from '../contact-item/contact-item';
import { v4 as uuidv4 } from 'uuid';
import { Link, Redirect } from 'react-router-dom';


class ContactList extends Component {

    render() {
        var ContactsTemplateVisible
        var ContactsTemplateHidden
        var contacts
        contacts = this.props.contacts.slice()
         
        
        if (this.props.contacts !== null) {
            var visibleContacts = contacts.filter(function (contact) {
                return contact.isHidden === false;
            });

            var hiddenContacts = contacts.filter(function (contact) {
                return contact.isHidden === true;
            });

            ContactsTemplateVisible = visibleContacts.map(item => {
                return (
                    <ContactItem removeContact={this.props.removeContact} updateContact={this.props.updateContact} editContact={this.props.editContact}
                        key={uuidv4()}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        gender={item.gender}
                        image={item.image}
                        isFavorite={item.isFavorite}
                        groupId={item.groupId}
                        groups={this.props.groups}
                        isHidden={item.isHidden}
                    ></ContactItem>)
            })

            ContactsTemplateHidden = hiddenContacts.map(item => {
                return (
                    <ContactItem removeContact={this.props.removeContact} updateContact={this.props.updateContact} editContact={this.props.editContact}
                        key={uuidv4()}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        gender={item.gender}
                        image={item.image}
                        isFavorite={item.isFavorite}
                        groupId={item.groupId}
                        groups={this.props.groups}
                        isHidden={item.isHidden}
                    ></ContactItem>)
            })
        }
        return (
            <Fragment>
                <Link className="btn btn-dark" to="/add-contact">Add new contact</Link>
                        <div className="row">
                            {ContactsTemplateVisible} {/*contactItem collection */}
                        </div>
                        <h3>Hidden contacts:</h3>
                        <div className="row">
                            {ContactsTemplateHidden}
                        </div>
            </Fragment>
        )
    }
}

export default ContactList

