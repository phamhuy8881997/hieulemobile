import React, { Component } from "react";
import "./banner.scss";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
import UndefinePage from "../../page/loadUndefine/undefine";

class Banner extends Component {
  componentDidMount() {
    this.props.get_banner();
  }
  showImageBanner = () => {
    let { banner } = this.props;
    let resule = "";
    resule = banner.map((item, i) => {
      return <img src={item.img} alt={item.img} key={`banner${i}`} />;
    });
    return resule;
  };
  render() {
    return (
      <div className="banner__main">
        {this.props.banner.length === 0 ? (
          <UndefinePage />
        ) : (
          <div>
            <div className="banner__hr mb-4"></div>
            <div className="banner__img">{this.showImageBanner()}</div>
            <div className="banner__hr mt-4"></div>
            <div className="banner_icon">
              <i className="fa fa-angle-double-down"></i>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    banner: state.banner,
  };
};
const mapDispathToProps = (dispath, props) => {
  return {
    get_banner: () => {
      dispath(action.get_banner_api());
    },
  };
};
export default connect(mapStateToProp, mapDispathToProps)(Banner);
