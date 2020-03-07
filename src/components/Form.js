import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <input
            placeholder="Tasks..."
            value={this.props.inputValue}
            onChange={event => this.props.handleChange(event)}
          />
        </form>
      </div>
    );
  }
}

export default Form;
