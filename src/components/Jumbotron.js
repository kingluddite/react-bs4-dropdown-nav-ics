import React, { Component } from 'react'
import './Jumbotron.css';

export default class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h3 className="display-3">{this.props.title}</h3>
                        <p className="lead">{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
        )
    }
}
