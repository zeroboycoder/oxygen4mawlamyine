import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';

class Layout extends Component {
  state = {
    quarter: '',
  };

  navSelectChangeHandler = (event) => {
    const value = event.target.value;
    this.setState({ quarter: value });
  };

  render() {
    return (
      <div>
        {/* Navigation */}
        <Nav
          quarter={this.state.quarter}
          selectChangeHandler={this.navSelectChangeHandler}
        />

        {/* App.js */}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
