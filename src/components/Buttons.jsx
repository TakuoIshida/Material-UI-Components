import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

class Buttons extends Component {
    
    render() {
        return (
            <div>
                <CardActions>
                    <Button >Default</Button>
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="outlined" color="secondary"> Secondary</Button>               
                    <Button variant="contained" disabled>Disabled</Button>
                    <Button variant="contained" size="small" color="primary" href="#contained-buttons">small Link</Button>
                    <Button variant="contained" size="large" color="primary" href="#contained-buttons">large Link</Button>
                </CardActions>
            </div>
        );
    }
}

export default Buttons;