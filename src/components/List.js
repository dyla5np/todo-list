import React from "react";

import Task from "./Task";

class List extends React.Component {
  render() {
    return (
      <div className="List">
        {this.props.todos.map((todo, index) => {
          return (
            <Task
              key={index}
              todo={todo}
              handleClick={this.props.handleClick}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default List;
