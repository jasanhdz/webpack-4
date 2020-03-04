// By Jasan Hernández Traditional React
import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    console.log(`1. execute Constructor() ${this.props.hello}`);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    console.log("3. ComponentDidMount");
    // Example of calling an api
    this.current = setTimeout(() => {
      this.setState({
        data: ["Hello"]
      });
    }, 3000);
  };
  componentWillMount = () => {
    //componentWillMount()
    console.log("4. componentWillMount()");
    clearTimeout(this.current);
  };

  render() {
    console.log("2. excute render()");
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default HelloWorld;
