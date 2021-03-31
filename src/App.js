import React, { Component, Fragment } from 'react';
import './App';
import NavbarItem from './components/navbar-item/navbar-item'
import CreateContactItem from './components/create-contact-item/create-contact-item'
import ContactList from './components/contact-list/contact-list';
import NoteList from './components/note-list/note-list';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './components/home/home'
import Page404 from './components/page404/Page404'
import GroupList from './components/group-list/group-list';
import GroupCreate from './components/group-create/group-create';
import CreateNoteItem from './components/create-note/create-note';
import { v4 } from 'uuid';


class App extends Component {

  state = {
    searchQuery: '',
    isSearch: false,
    isEditMode: false,
    statusDelete: false,
    contacts: [
      {
        id: 1,
        name: "Bohdan Islamov",
        number: "+38 (068) 302 22 319",
        image: 26,
        gender: "men",
        isFavorite: true,
        groupId: 0,
        isHidden: false
      },
      {
        id: 2,
        name: "Andrii Riabii",
        number: "+38 (011) 412 23 23",
        image: 8,
        gender: "men",
        isFavorite: false,
        groupId: 1,
        isHidden: false
      },
      {
        id: 3,
        name: "Vitaliy Oleksiychuk",
        number: "+38 (097) 77 88 999",
        image: 12,
        gender: "men",
        isFavorite: false,
        groupId: 1,
        isHidden: false
      },
      {
        id: 4,
        name: "Mykola Zayets",
        number: "+38 (055) 123 33 33",
        image: 77,
        gender: "women",
        isFavorite: false,
        groupId: 0,
        isHidden: false
      },
    ],
    notes: [
      {
        id: 1,
        title: "ЗНО",
        text: "До ЗНО 55 днів :'("
      },
      {
        id: 2,
        title: "Літо",
        text: "До літа 61 день :)"
      },
      {
        id: 3,
        title: "Angular",
        text: "Angular почався :D"
      },
    ],
    groups: [
      {
        id: 1,
        name: "IT STEP"
      },
      {
        id: 2,
        name: "School"
      }
    ],
  }

  URL_Contacts = "https://contactbook-5ecdd-default-rtdb.firebaseio.com/contacts.json"
  URL_Notes = "https://contactbook-5ecdd-default-rtdb.firebaseio.com/contacts.json"

  getContact() {
    fetch(this.URL_Contacts, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(contacts => {
        this.setState({
          contacts: contacts
        })
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }

  getNotes() {
    fetch(this.URL_Notes, { method: "GET" })
      .then(data => {
        return data.json();
      })
      .then(notes => {
        console.log("notes from firebase: ", notes)
        this.setState({
          notes: notes
        })
      })
      .catch(error => {
        console.log("Error: ", error)
      })
  }



  addContact = (newContact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
    }
    newContact.id = v4();
    tempContacts.push(newContact);
    this.setState({
      contacts: tempContacts
    })
  }

  addGroup = (newGroup) => {
    var tempGroups = [];
    if (this.state.groups != null) {
      tempGroups = this.state.groups.slice();
    }
    newGroup.id = v4();
    tempGroups.push(newGroup);


    this.setState({
      groups: tempGroups
    })
  }

  addNote = (newNote) => {
    var tempNotes = [];
    if (this.state.notes != null) {
      tempNotes = this.state.notes.slice();
    }
    newNote.id = v4();
    tempNotes.push(newNote);


    this.setState({
      notes: tempNotes
    })
  }

  saveChanges(collection, URL) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": 'application/json'
      },
      body: JSON.stringify({ 'collection': collection })
    })
      .then(data => {
        console.log("data from firebase: ", data)
      })
      .catch(error => {
        console.log("Error from firebase: ", error)
      })
  }

  updateContact = (contact) => {
    var tempContacts = [];
    if (this.state.contacts != null) {
      tempContacts = this.state.contacts.slice();
      var foundIndex = tempContacts.findIndex(x => x.id == contact.id);

      tempContacts.splice(foundIndex, 1, contact);
      this.setState({
        contacts: tempContacts,
        isEditMode: false,
        contactToEdit: {
          id: 0,
          name: '',
          number: '',
          image: 0,
          gender: '',
          isFavorite: false
        }
      })
    }




  }

  removeContact = (contact) => {
    var tempContacts = [];

    if (this.state.contacts != null) {
      var foundIndex = this.state.contacts.findIndex(x => x.id == contact.id);
      this.state.contacts.splice(foundIndex, 1);
      this.setState({
        statusDelete: true
      });
    }
  }

  removeNote = (note) => {
    if (this.state.notes != null) {
      var foundIndex = this.state.notes.findIndex(x => x.id == note.id);
      this.state.notes.splice(foundIndex, 1);
      this.setState({
        statusDelete: true
      });
    }
  }

  removeGroup = (group) => {
    if (this.state.groups != null) {
      if (this.state.contacts != null) {
        var newContacts = this.state.contacts.filter(function(contact) {
          return contact.groupId!=group.id;
        });
        var foundIndex = this.state.groups.findIndex(x => x.id == group.id);
        this.state.groups.splice(foundIndex, 1);
        this.setState({
          statusDelete: true,
          contacts: newContacts
        });
      }
    }

  }

  render() {
    var favorite_contacts;
    if (this.state.contacts != null) {

      favorite_contacts = this.state.contacts.filter(obj => {
        return obj.isFavorite === true
      })
    }


    if (this.state.isSearch === true) {
      this.state.isSearch = false;
    }
    var contacts;
    if (this.state.contacts != null) {
      contacts = this.state.contacts.filter(obj => {
        return obj.name.includes(this.state.searchQuery) || obj.number.includes(this.state.searchQuery)
      })
      this.state.searchQuery = ''
    }

    return (
      <Fragment>
        <Router>
          <NavbarItem search={this.search}></NavbarItem>

          <div className="container">


            <Switch>

              <Route
                path="/"
                exact
                render={() => <Home></Home>}
              ></Route>

              <Route
                path="/contacts"
                exact
                render={() => <ContactList groups={this.state.groups} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={contacts}></ContactList>}
              ></Route>


              <Route
                path="/groups"
                exact
                render={() => <GroupList removeGroup={this.removeGroup} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} groups={this.state.groups}></GroupList>}
              ></Route>

              <Route
                path="/favorite-contacts"
                exact
                render={() => <ContactList groups={this.state.groups} editContact={this.editContact} removeContact={this.removeContact} updateContact={this.updateContact} contacts={favorite_contacts}></ContactList>}
              ></Route>

              <Route
                path="/add-contact"
                exact
                render={() => <CreateContactItem updateContact={this.updateContact} isEditMode={this.state.isEditMode} contactToEdit={this.state.contactToEdit} addContact={this.addContact}></CreateContactItem>}
              ></Route>


              <Route
                path="/add-group"
                exact
                render={() => <GroupCreate addGroup={this.addGroup}></GroupCreate>}
              ></Route>

              <Route
                path="/notes"
                exact
                render={() => <NoteList removeNote={this.removeNote} notes={this.state.notes}></NoteList>}
              ></Route>

              <Route
                path="/add-note"
                exact
                render={() => <CreateNoteItem addNote={this.addNote}></CreateNoteItem>}
              ></Route>



              <Route
                path="*"
                render={() => <Page404></Page404>}
              ></Route>

              {this.state.isRedirect && <Redirect to="/contacts" />}

            </Switch>

          </div>

        </Router>

      </Fragment>
    )
  }
}

export default App;