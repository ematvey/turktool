import React, { Component } from "react";
import Header from "./Header.js";
import LabelViewContainer from "../containers/LabelViewContainer.js";
import SubmitButtonContainer from "../containers/SubmitButtonContainer.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div id="AppContainer">
        <Header />
        <LabelViewContainer taskId={this.props.match.params.taskId} />
        <SubmitButtonContainer taskId={this.props.match.params.taskId}/>
      </div>
    );
  }
}

export default App;
