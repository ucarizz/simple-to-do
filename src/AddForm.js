import React, { Component } from "react";
import {  Row, Col } from "reactstrap";
class AddForm extends Component {
  state = {
    context: "",
  };

  handleChange = (e) => {
    if (e.target.value !== "") this.setState({ context: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.context !== "") this.props.addTodo(this.state);

    this.setState({ context: "" });
  };
  render() {
    return (
      <div>
        <Row>
          <Col xs="11">
            <form onSubmit={this.handleSubmit}>
              <label>Add to task</label>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.context}
              ></input>
            </form>
          </Col>
          <Col xs="1">
            <a
              className="waves-effect waves-light btn-large"
              onClick={this.handleSubmit}
            >
              Add
            </a>
          </Col>
        </Row>

        <div></div>
      </div>
    );
  }
}
export default AddForm;
