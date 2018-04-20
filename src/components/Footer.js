import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <span>Ironcove Solutions &copy; {new Date().getFullYear()}</span>
                    </div>
                </footer>
            </div>
        )
    }
}
