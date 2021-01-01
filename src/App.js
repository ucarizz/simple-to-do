import { Component, React } from "react";
import ToDos from "./ToDoList";
import AddForm from "./AddForm";


class App extends Component {
  state = {
    todos: [
      { id: 1, context: "Test task" },
  
    ],
  };

  deletetodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  addTodo=(todo)=>{
    todo.id=Math.random();
    let newTodos=[...this.state.todos,todo]
    this.setState({
      todos:newTodos
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">To Do</h1>
        <ToDos todos={this.state.todos} deleteTodo={this.deletetodo}></ToDos>
        <AddForm addTodo={this.addTodo}></AddForm>
      </div>
    );
  }
}

export default App;
