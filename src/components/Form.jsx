import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleTaskDescriptionChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <>
        <div className="container">
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="row justify-content-center m-3">
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleTaskDescriptionChange}
                />
              </div>
              <div className="col-4">
                <button className="btn btn-primary" type="submit">
                  Ajouter à ma liste
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
