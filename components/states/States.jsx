import React from "react";
import "./States.css";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    //console.log(
    //  "window.cs142models.statesModel()",
    //  window.cs142models.statesModel()
    //);
    this.state = {
      states: window.cs142models.statesModel(),
      inputValue: "",
      array: window.cs142models.statesModel(),
    };
    this.handleChangeBound = (event) => this.handleChange(event);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
    let utga = event.target.value;
    let jagsaalt = window.cs142models.statesModel();
    if (utga == undefined) {
      this.setState({ array: jagsaalt });
    } else {
      let jagsaalt1 = jagsaalt.filter((word) =>
        word.toUpperCase().includes(utga.toUpperCase())
      );
      this.setState({ array: jagsaalt1 });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="bursonin">
          <input
            id="inId"
            type="text"
            onChange={this.handleChangeBound}
            placeholder="Хайх мужаа бичнэ үү..."
          />
        </div>
        <div>Input Value:{this.state.inputValue}</div>
        <div className="mujuud">
          {this.state.array.map((start, end) => {
            return (
              <div key={end} className="muj">
                {start}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default States;
