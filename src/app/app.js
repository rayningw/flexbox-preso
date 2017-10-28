import React, { Component } from "react";

import Screen from "../screen";

import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Flexbox Preso</h1>
        </header>
        <div className="app-screens">
          <Screen />
        </div>
      </div>
    );
  }
}

export default App;
