import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './AppBar.module.css';

class AppBars extends Component {
    constructor(props){
        super();
        this.title = props.title;
    }
    render() {
        return(
            <div className={styles.root}>
                <AppBar position="sticky">
                    <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" className={styles.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={styles.title}>
                        {this.title}
                    </Typography>
                    <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
};

export default AppBars;