import React, { Component, Fragment, Navbar, Brand } from 'react';
import './navbar-item.css';
import { Link, Redirect } from 'react-router-dom'

class NavbarItem extends Component {

  state = {
    query: '',
  }

  handlerChangeInput = (e) => {
    var target = e.target;
    this.setState({
      [target.name]: target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log("Form submit")
    this.props.search(this.state.query);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Contact Book</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home</Link>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts" data-toggle="dropdown">Contacts</Link>
              </li>
              <li>
              <Link className="nav-link" to="/favorite-contacts">Favorite contacts</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/groups" data-toggle="dropdown">Groups</Link></li>
              <li className="nav-item">
                <Link className="nav-link" to="/notes" data-toggle="dropdown">Notes</Link></li>
            </ul>
          </div>
        </div>
      </nav>



    )
  }
}

export default NavbarItem;