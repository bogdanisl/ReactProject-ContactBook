import React, { Component } from 'react'
import './App.css';
import ContactItem from './components/contact-item/contact-item';
import ContactList from './components/contact-list/contact-list';
import Navbar from './layout/navbar/navbar';
import Inputs from './components/inputs/input';
import NoteList from './components/note-list/note-list'

class App extends Component {

  state ={
    contacts: [
      {
        name: "Monkey",
        phone: "+38 (068) 132 32 05",
        image: 23,
        gender: "men",
        starred: `far fa-star fa-2x`
      },
      {
        name: "Zubenko Mikhail Petrovich",
        phone: "+38 (097) 777 07 77",
        image: 10,
        gender: "men",
        starred: `far fa-star fa-2x`
      },
      {
        name: "Lesia Kirilyuk",
        phone: "+38 (067) 412 23 11",
        image: 55,
        gender: "women",
        starred: `far fa-star fa-2x`
      },
    ],
    notes: [
      {
        name: "ЗНО",
        text: "До ЗНО 66 днів("
      },
      {
        name: "Angular",
        text: "До Angular'a 13 днів("
      },
      {
        name: "Літо",
        text: "До літа 77 днів :)"
      }
    ]
  }

  render(){
    return(
      <div>
        <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 col-sm-12">
                <Inputs></Inputs>
          </div>
            <div className="col-lg-10 col-md-9 col-sm-12">
                <div className="row">
                    <ContactList contacts={this.state.contacts}></ContactList>
                </div>
            </div>
      </div>
      </div>
      <div className="container text-center">
        <h2>Notes</h2>
        <div className="row">
            <NoteList notes={this.state.notes}></NoteList>
        </div>
      </div>
      </div>
      )
  }
}

export default App;
