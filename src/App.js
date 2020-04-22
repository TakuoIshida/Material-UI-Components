import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar';
import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Popper from './components/Popper/Popper';

class App extends Component {

    render(){
        return (
            <div>
                <AppBar />
                <Button />
                <AppBar />
                <ButtonGroup />
                <AppBar />
                <Popper />
                <AppBar />
            </div>
        )
    }
}

export default App;
