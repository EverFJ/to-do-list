import React from "react";

class List extends React.Component {
  render() {
    const filteredTasks =
      this.props.activeTab === "All"
        ? this.props.tasks
        : this.props.tasks.filter(
            (elem) => elem.status === this.props.activeTab
          );

    return (
      <>
        <h1 className="text-center m-3">Ma liste : </h1>
        {filteredTasks.map((elem, index) => {
          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-4">
                  {this.props.indexToModify !== index ? (
                    <li className="list-group-item">
                      Description : {elem.description}
                    </li>
                  ) : (
                    //   INPUT
                    <input
                      className="form-control"
                      type="text"
                      onChange={this.props.handleInputChange}
                      value={this.props.input}
                    />
                  )}
                </div>
                <div className="col-4">
                  {this.props.indexToModify !== index ? (
                    <li className="list-group-item">Status : {elem.status} </li>
                  ) : (
                    //   SELECT
                    <select
                      className="form-select"
                      onChange={this.props.onSelectChange}
                    >
                      <option value="To do">To do</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                  )}
                </div>
                <div className="col-2">
                  {this.props.indexToModify !== index ? (
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => {
                        this.props.onClickDelete(index);
                      }}
                    >
                      Supprimer
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      type="button"
                      onClick={(e) => {
                        this.props.onClickValidate(index);
                      }}
                    >
                      Valider
                    </button>
                  )}
                </div>
                <div className="col-2">
                  {this.props.indexToModify !== index && (
                    <button
                      className="btn btn-warning"
                      type="button"
                      onClick={() => {
                        this.props.onClickModify(elem.description, index);
                      }}
                    >
                      Modifier
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default List;
