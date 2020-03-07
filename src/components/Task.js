import React from "react";

class Task extends React.Component {
  render() {
    return (
      <div className="Task">
        <span
          style={{
            textDecoration: this.props.todo.done ? "line-through" : ""
          }}
        >
          {this.props.todo.value}
        </span>
        <button onClick={() => this.props.handleClick(this.props.index)}>
          {this.props.todo.done ? "Undo" : "Complete"}
        </button>
      </div>
    );
  }
}

export default Task;
