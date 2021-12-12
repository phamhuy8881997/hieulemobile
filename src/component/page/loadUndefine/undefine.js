import React, { Component } from "react";
import "./undefine.scss";
class UndefinePage extends Component {
  render() {
    return (
      <div className="undefine__css">
        <div className="overlay__undefine">
          <i className="fa fa-spinner fa-spin"></i>
        </div>
        <div>
          <h1>
            Đang Tải <i className="fa fa-spinner fa-spin"></i>
          </h1>
        </div>
      </div>
    );
  }
}

export default UndefinePage;
