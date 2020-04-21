import React, {Component} from 'react';
import { Buttons, Cards, Checkbox, Chips,} from './components';

import styles from './App.module.css';

class App extends React.Component {

    render(){
        return (
            <div className={ styles.container }>
                <Buttons />
            </div>
        )
    }
}

export default App;
