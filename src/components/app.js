import React, { Component } from 'react';
import Discussion from './discussion';
import Rules from './rules';
import Workflow from './workflow';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        <Discussion />
        <Rules />
        <Workflow />
      </div>
    );
  }
}