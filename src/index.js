import React, { Component } from 'react';
import { render } from 'react-dom';
import AppScrollTrigger from './AppScrollTrigger'

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }

    render() {
        return (
            <div>
                <AppScrollTrigger />
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
