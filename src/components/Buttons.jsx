import React, { Component }  from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

class Buttons extends Component {
    
    render() {
        return (
            <div>
                <CardActions>
                    <Button size="large" variant="contained" color="primary">OK</Button>
                    <Button size="small" variant="outlined" color="secondary">Cancel</Button>
                </CardActions>
            </div>
        );
    }
}

export default Buttons;