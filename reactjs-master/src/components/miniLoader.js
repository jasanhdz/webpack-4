import React, { Component } from "react";

import "./styles/miniLoader.css";

export default class MidiLoader extends Component {
  render() {
    return (
      <div className="lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  }
}
