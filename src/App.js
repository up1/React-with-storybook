import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div>
        <Profile name={this.props.profile} />
        <Projects projectList={this.props.projectList} />
      </div>
    );
  }
}

export default App;
