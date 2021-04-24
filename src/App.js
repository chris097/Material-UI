/* eslint-disable no-undef */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './App.css';

const useStyles = makeStyles({
  btn:{ backgroundColor: 'yellow' }
})

function App() {
  const classes = useStyles()
  return (
    <Container className="App">
      <Typography> 
        Hello world
      </Typography>
      <Button className={classes.btn} type="submit" variant="contained" color="primary">Click me</Button>
      <ButtonGroup>
        <Button variant="contained" disabled>One</Button>
        <Button variant="contained" color="secondary">Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <TextField variant="outlined" label="Me" />
    </Container>
  );
}

export default App;