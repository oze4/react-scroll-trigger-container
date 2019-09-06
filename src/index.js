import React, { Component } from 'react';
import { render } from 'react-dom';
import AppScrollTrigger from './AppScrollTrigger'

function App() {
    return (
        <div>
            <AppScrollTrigger />
        </div>
    );    
}

render(<App />, document.getElementById('root'));
