import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  state = {
    name: "Kian",
  };

  componentDidUpdate() {
    setInterval(() => {
      this.setState({ name: "Kian" });
    }, 1000);
  }
  render() {
    console.log("parent comp --------------------------------");
    return (
      <div>
        parent component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
