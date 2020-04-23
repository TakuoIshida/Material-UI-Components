import React, { Component } from 'react';
import AppBar from './components/AppBar/AppBar';
import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Popper from './components/Popper/Popper';
import Checkbox from './components/Checkbox/Checkbox';
import Slider from './components/Slider/Slider';
import Switch from './components/Switch/Switch';


class App extends Component {

    render(){
        return (
            <div>
                <AppBar title="Button"/>
                <Button />
                <AppBar title="ButtonGroup"/>
                <ButtonGroup />
                <AppBar title="Popper"/>
                <Popper />
                <AppBar title="Checkbox"/>
                <Checkbox />
                <AppBar title="Slider"/>
                <Slider />
                <AppBar title="Switch"/>
                <Switch />
            </div>
        )
    }
}

export default App;
