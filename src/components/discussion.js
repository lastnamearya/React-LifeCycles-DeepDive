import React, { Component } from 'react';

export default class Discussion extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Discussion",
      currentTime: String(new Date())
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ currentTime: String(new Date())})
      }, 1000
    )
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { pageTitle, currentTime } = this.state;
    return (
      <div>
        <h1>{pageTitle}</h1>
        <div>{currentTime}</div>
      </div>
    );
  }
}