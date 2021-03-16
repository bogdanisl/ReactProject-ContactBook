import React, { Component } from 'react'
import './App.css';
import ContactItem from './components/contact-item/contact-item';
import Navbar from './layout/navbar/navbar';
import Inputs from './components/inputs/input'

class App extends Component {
  render(){
    return(
      <div>
        <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
                <Inputs></Inputs>
          </div>
            <div className="container col-lg-9 col-md-6 col-sm-12">
                <div className="row">
                    <ContactItem></ContactItem>
                    <ContactItem></ContactItem>
                </div>
            </div>
      </div>
      </div>
      </div>
      )
  }
}

export default App;
