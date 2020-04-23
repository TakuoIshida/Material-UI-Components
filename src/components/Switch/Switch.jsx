import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Switchable() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({...state,[event.target.name]: event.target.checked });

  };

  return(
    <FormGroup row>
      <FormControlLabel
      control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA"/>}
      label="Secndary"
      />
      <FormControlLabel 
      control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB"/>}
      label="Primary"
      />
      <FormControlLabel control={<Switch />} label="uncontrolled"/>
      <FormControlLabel disabled control={<Switch />} label="disabled"/>
      <FormControlLabel control={<Switch checked/>} label="disabled"/>
    </FormGroup>
  );
}
