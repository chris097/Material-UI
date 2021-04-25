/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import { FormControl, FormControlLabel, FormLabel, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import './App.css';

const useStyles = makeStyles({
  feild:{
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

function App() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [nameError, setNameError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('age');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setDetailsError(false)

    if(name && details){
      console.log(name, details, category)
    }else if(nameError == '' && detailsError == ''){
      setNameError(true)
      setDetailsError(true)
    }

  }

  return (
    <Container className="App">
    <Typography
      variant="h5"
      color="textSecondary"
      gutterBottom
    >
      Create a note
    </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
        onChange={e => setName(e.target.value)}
        className={classes.feild}
        label="Name" 
        variant="outlined" 
        fullWidth
        required
        error={nameError}
        />
        <TextField 
        onChange={e => setDetails(e.target.value)}
        className={classes.feild}
        label="Details" 
        variant="outlined" 
        fullWidth
        multiline
        rows={4}
        required
        error={detailsError}
        />
        <FormControl className={classes.feild}>
          <FormLabel>Name Category</FormLabel>
          <RadioGroup value={category} onChange={ e => setCategory(e.target.value)}>
            <FormControlLabel value="age" control={<Radio />} label="Age" />
            <FormControlLabel value="occupation" control={<Radio />} label="Occupation" />
            <FormControlLabel value="location" control={<Radio />} label="Location" />
            <FormControlLabel value="state" control={<Radio />} label="State" />
          </RadioGroup>
        </FormControl>
        <Button 
          type="submit"
          variant="contained" 
          color="secondary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default App;