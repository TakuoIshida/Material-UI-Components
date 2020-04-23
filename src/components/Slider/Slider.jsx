import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';

const useStyles = makeStyles({
  root: {
    width: '80%',
    background: 'linear-gradient(45deg, rgb(199, 245, 157) 30%, rgb(225, 241, 74) 90%)',
    margin: '30px auto',
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value1, setValue1] = React.useState(30);
  const [value2, setValue2] = React.useState(30);
  const [toggled, setToggled] = React.useState(false);
  
  const handleChange1 = (e, newValue1) => {
    setValue1(newValue1);
  };
  const handleChange2 = (e, newValue2) => {
    setValue2(newValue2);
  };

  const soundToggle =() => {
    setToggled(!toggled);
  };

  return (
    <div className={classes.root}>
      <div className={classes.sliders}>
        <Typography id="continuous-slider" gutterBottom>
          Volume
        </Typography>
          <Grid container spacing={2} >
            <Grid item>
              <VolumeDown />
            </Grid>
              <Grid item xs>
                <Slider value={value1} onChange={handleChange1} aria-labelledby="continuous-slider" />
              </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
      </div>
      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />

      <Typography id="customed-slider" gutterBottom>
        Original Toggled Slider
      </Typography>
      <Grid container spacing={2} >
            <Grid item>
              <VolumeDown />
            </Grid>
              <Grid item xs>
                <Slider value={value2} onChange={handleChange2} disabled={toggled}/>
              </Grid>
            <Grid item>
            {
            toggled? 
            <VolumeUp onClick={soundToggle} disabled={toggled}/>
              :
            <VolumeOffIcon onClick={soundToggle} disabled={toggled}/>
            }
            </Grid>
      </Grid>
    </div>
  );
}