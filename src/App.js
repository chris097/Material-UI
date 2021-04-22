import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './App.css';

function App() {
  return (
    <Container className="App">
      <Typography> 
        Hello world
      </Typography>
      <Button type="submit" variant="contained" color="primary">Click me</Button>
      <ButtonGroup>
        <Button variant="contained" disabled>One</Button>
        <Button variant="contained" color="secondary">Two</Button>
        <Button variant="contained" color="primary">Three</Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;