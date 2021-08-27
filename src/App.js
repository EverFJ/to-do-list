import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: "",
      select: "To do",
      activeTab: "All",
    };
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab });
  };

  addTask = (task) => {
    this.setState({
      tasks: [{ description: task, status: "To do" }, ...this.state.tasks],
      indexToModify: null,
    });
  };

  deleteTask = (index) => {
    let tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  };

  modifyTask = (input, index) => {
    this.setState({ indexToModify: index, input: input });
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSelectChange = (e) => {
    console.log(e);
    this.setState({ select: e.target.value });
  };

  onClickValidate = (index) => {
    let tasks = [...this.state.tasks];
    tasks[index].description = this.state.input;
    tasks[index].status = this.state.select;
    this.setState({
      indexToModify: null,
      tasks: tasks,
    });
  };

  render() {
    // console.log("App.js this.state.tasks", this.state.tasks);
    // console.log("active tab", this.state.activeTab);
    return (
      <>
        <h1 className="text-center m-3">To do list</h1>
        <Form addTask={this.addTask} />
        <br />
        <Button onClick={this.handleTabClick}>All</Button>
        <Button onClick={this.handleTabClick}>To do</Button>
        <Button onClick={this.handleTabClick}>Doing</Button>
        <Button onClick={this.handleTabClick}>Done</Button>
        <List
          tasks={this.state.tasks}
          indexToModify={this.state.indexToModify}
          input={this.state.input}
          selectValue={this.state.select}
          activeTab={this.state.activeTab}
          onClickDelete={this.deleteTask}
          onClickModify={this.modifyTask}
          onClickValidate={this.onClickValidate}
          handleInputChange={this.handleInputChange}
          onSelectChange={this.onSelectChange}
        />
      </>
    );
  }
}

export default App;
