import React from "react";
import "../App.css";

import Form from "./Form";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: []
    };
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault(); /* prevent page refresh */

    console.log("hello");

    const newTodo = {
      value: this.state.inputValue,
      done: false
    };

    const newTodoArray = this.state.todos;

    newTodoArray.push(newTodo);
    this.setState({
      todos: newTodoArray,
      inputValue: ""
    });
  };

  handleClick = index => {
    const newArray = this.state.todos;
    newArray[index].done = !newArray[index]
      .done; /*make sure button can be ticked when complete */
    this.setState({
      todos: newArray
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <List todos={this.state.todos} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
