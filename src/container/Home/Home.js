import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { Box } from '../../components/Box/Box';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Container maxWidth={'lg'} className="Home">
        <div className="Boxes">
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </Container>
    );
  }
}

export default Home;
