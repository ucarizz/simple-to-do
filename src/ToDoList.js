import React from "react";
import { Row, Col } from "reactstrap";

const ToDoList = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <Row>
            <Col xs="11">
              {" "}
              <span
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                {todo.context}
              </span>
            </Col>
            <Col xs="1">
              <a
                className="btn-floating btn-small waves-effect waves-light red"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <i className="material-icons">-</i>
              </a>
            </Col>
          </Row>
        </div>
      );
    })
  ) : (
    <p className="center">no task</p>
  );
  return <div className="collection">{todoList}</div>;
};
export default ToDoList;
