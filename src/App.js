import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task) => {
    this.setState({
      tasks: [{ description: task, status: "To do" }, ...this.state.tasks],
    });
  };

  deleteTask = (index) => {
    console.log("index", index);
    const tasks = [...this.state.tasks].splice(index, 1);
    this.setState({ tasks: tasks });
  };

  render() {
    // console.log("App.js this.state.tasks", this.state.tasks);
    return (
      <>
        <h1 className="text-center m-3">To do list</h1>
        <Form addTask={this.addTask} />
        <br />
        <List tasks={this.state.tasks} onClick={this.deleteTask} />
      </>
    );
  }
}

export default App;
