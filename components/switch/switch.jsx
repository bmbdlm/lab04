import React from "react";
import Example from "../example/Example";
import States from "../states/States";

//import States from "./states/States";
//import Example from "./example/Example";

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yu: true,
    };
  }
  render() {
    return (
      <div className="container">
        <div>
          <div
            className="button"
            onClick={() => {
              this.setState({ yu: !this.state.yu });
            }}
          >
            Switch to:{this.state.yu ? "Examples" : "States"}
          </div>
          {this.state.yu ? <Example /> : <States />}
        </div>
      </div>
    );
  }
}
export default Switch;
