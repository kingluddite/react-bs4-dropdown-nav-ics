import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import './Navigation.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    showNavbar(e) {
        e.preventDefault();
        console.log('showNavbar');
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg  navbar-dark navbar__bg-ics mb-4">
                <Link className="navbar-brand" to="/">ICS</Link>
                <button onClick={(e) => { this.showNavbar(e) }} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/" name="Home" />
                        <NavItem path="/about" name="About" />
                        <NavItem path="/page3" name="Disabled" disabled="true" />
                        <NavDropdown name="Dropdown">
                            <Link className="dropdown-item" to="/contact">Contact</Link>
                            <Link className="dropdown-item" to="/about">About</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/">Home</Link>
                        </NavDropdown>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

        )
    }
}
