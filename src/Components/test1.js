import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

const options = [
  { label: "foo", value: 1 },
  { label: "bar", value: 2 },
  { label: "bin", value: 3 },
];
export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: false,
      value2: false,
    };
  }

  onChange = (option) => {
    if (this.state.value2.value === option.value) {
      this.setState({
        value1: option,
        value2: false,
      });
    } else {
      this.setState({ value1: option });
    }
  };

  onChange2 = (option) => {
    this.setState({ value2: option });
  };
  render() {
    return (
      <div className="App">
        <Select
          onChange={this.onChange}
          options={options}
          value={this.state.value1}
        />
        <Select
          onChange={this.onChange2}
          options={options.filter(
            (option) => option.value !== this.state.value1.value
          )}
          value={this.state.value2}
        />
        <Select
          onChange={this.onChange2}
          options={options.filter(
            (option) => option.value !== this.state.value1.value
          )}
          value={this.state.value2}
        />
      </div>
    );
  }
}
