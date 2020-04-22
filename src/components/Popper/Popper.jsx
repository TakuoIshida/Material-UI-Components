import React from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import styles from './Popper.module.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function PositionedPopper(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const classes = useStyles();

    const handleClick = (newPlacement) => (e) => {
        setAnchorEl(e.currentTarget);
        setOpen((previewPlace) => placement !== newPlacement || !previewPlace);
        setPlacement(newPlacement);
    };

    return (
     <div className={styles.container}>
        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}>The content of the Popper.</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justify="center">
        <Grid item>
          <Button className={styles.text} onClick={handleClick('top-start')}>top-start</Button>
          <Button className={styles.text} onClick={handleClick('top')}>top</Button>
          <Button className={styles.text} onClick={handleClick('top-end')}>top-end</Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6}>
          <Button className={styles.text} onClick={handleClick('left-start')}>left-start</Button>
          <br />
          <Button className={styles.text} onClick={handleClick('left')}>left</Button>
          <br />
          <Button className={styles.text} onClick={handleClick('left-end')}>left-end</Button>
        </Grid>
        <Grid item container xs={6} alignItems="flex-end" direction="column">
          <Grid item>
            <Button className={styles.text} onClick={handleClick('right-start')}>right-start</Button>
          </Grid>
          <Grid item>
            <Button className={styles.text} onClick={handleClick('right')}>right</Button>
          </Grid>
          <Grid item>
            <Button className={styles.text} onClick={handleClick('right-end')}>right-end</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Button className={styles.text} onClick={handleClick('bottom-start')}>bottom-start</Button>
          <Button className={styles.text} onClick={handleClick('bottom')}>bottom</Button>
          <Button className={styles.text} onClick={handleClick('bottom-end')}>bottom-end</Button>
        </Grid>
      </Grid>
    </div>
    );
}