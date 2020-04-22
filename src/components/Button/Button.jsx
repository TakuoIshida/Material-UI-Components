import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';

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
                <div>
                    <Button variant="contained" color="secondary" className={styles.margin} startIcon={<DeleteIcon/>}>Delete</Button>
                    <Button variant="contained" color="default" className={styles.margin} startIcon={<CloudUploadIcon />}>Upload</Button>
                    <Button variant="contained" color="primary" className={styles.margin} startIcon={<KeyboardVoiceIcon />}>Talk</Button>
                    <Button variant="contained" color="primary" className={styles.margin} startIcon={<SaveIcon />}>Save</Button>
                </div>
            </div>
        )
    }
}

export default Buttons;