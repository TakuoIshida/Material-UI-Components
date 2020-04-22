import React, { Component } from 'react';
import Button from './components/Button/Button';
import AppBars from './components/AppBar/AppBar';

import styles from './App.module.css';

class App extends Component {

    render(){
        return (
            <div>
                <AppBars />
                <Button />
                <AppBars />
            </div>
        )
    }
}

export default App;
