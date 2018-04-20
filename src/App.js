import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Routes from './components/Routes';


export default class App extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Routes />
            </div>
        )
    }
}
