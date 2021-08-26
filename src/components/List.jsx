import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-center m-3">Ma liste : </h1>
        {this.props.tasks.map((elem, index) => {
          return (
            <div className="container mt-5">
              <div className="row">
                <div className="col-4">
                  <li className="list-group-item">
                    Description : {elem.description}
                  </li>
                </div>
                <div className="col-4">
                  <li className="list-group-item">Status : {elem.status} </li>
                </div>
                <div className="col-4">
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => {
                      this.props.onClick(index);
                    }}
                  >
                    Supprimer
                  </button>
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
