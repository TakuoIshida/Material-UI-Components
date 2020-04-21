import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import styles from './Button.module.css';

class Buttons extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <div>
                    <Button className={styles.margin}>Default</Button>
                    <Button variant="contained" color="primary"  className={styles.margin}>Primary</Button>
                    <Button variant="outlined" color="secondary"  className={styles.margin}> Secondary</Button>
                </div>
                <div>
                    <Button variant="contained" disabled className={styles.margin}>Disabled</Button>
                    <Button variant="contained" size="small" color="primary" href="#contained-buttons" className={styles.margin}>small Link</Button>
                    <Button variant="contained" size="large" color="primary" href="#contained-buttons" className={styles.margin}>large Link</Button>
                </div>
            </div>
        )
    }
}

export default Buttons;