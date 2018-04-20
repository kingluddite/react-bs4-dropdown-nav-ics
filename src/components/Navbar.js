import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark navbar__bg-ics mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">ICS</Link>
          <button className="navbar-toggler" type="button" onClick={this.showNavbar} data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
              <button className="btn my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}
