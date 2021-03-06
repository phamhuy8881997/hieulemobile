import Header from "./component/header/header_component/header";
import Foodter from "./component/foodter/foodter";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import routes from "./router";

import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }
  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const { is_visible } = this.state;
    return (
      <div className="App theme__dark">
        <Router>
          <Header />
          {this.menu()}
          {/* ===========showRoute============= */}
          {this.showRoute(routes)}
          {/* ===========showRoute============= */}
          <Foodter />
          <div className="scroll-to-top">
            {is_visible && (
              <div
                className="scroll-to-top__content"
                onClick={() => this.scrollToTop()}
              >
                <i className="fa fa-arrow-alt-circle-up"></i>
              </div>
            )}
          </div>
        </Router>
      </div>
    );
  }
  //================================================
  showRoute = (routes) => {
    let resule = "";
    resule = routes.map((route, i) => {
      return (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });
    return <Switch>{resule}</Switch>;
  };
  //=================================================
  menu = () => {
    return (
      <div className="menuComponent">
        <input type="checkbox" name="" id="menuComponent" />
        <div className="menuContent">
          <div className="menu--icon">
            <label htmlFor="menuComponent" className="label1">
              <i className="fa fa-angle-double-right"></i>
            </label>
            <label htmlFor="menuComponent" className="label2">
              <i className="fa fa-angle-double-left"></i>
            </label>
          </div>
          <div className="menu--text">
            <label htmlFor="menuComponent" className="close__menu">
              <i className="fa fa-times-circle"></i>
            </label>
            <ul>
              <li>
                <i className="fa fa-home"></i>
                <Link to="/" className="textLink">
                  Trang Ch???
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fa fa-shopping-cart"></i>
                <Link to="/cartshop" className="textLink">
                  Mua H??ng
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fab fa-slack"></i>
                <Link to="tat-ca-san-pham/dien-thoai" className="textLink">
                  ??i???n Tho???i
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fab fa-slack"></i>
                <Link to="tat-ca-san-pham/may-tinh-bang" className="textLink">
                  M??y T??nh B???ng
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fab fa-slack"></i>
                <Link to="tat-ca-san-pham/may-tinh" className="textLink">
                  Laptop
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fab fa-slack"></i>
                <Link to="tat-ca-san-pham/phu-kien" className="textLink">
                  Ph??? Ki???n
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fab fa-slack"></i>
                <Link to="/adminBanner" className="textLink">
                  Admin Banner
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fa fa-user-circle"></i>
                <Link to="/admin" className="textLink">
                  Admin S???n Ph???m
                </Link>
                <div className="triangle_left"></div>
              </li>
              <li>
                <i className="fa fa-user-edit"></i>
                <Link to="/adminCart" className="textLink">
                  Admin Gi??? H??ng
                </Link>
                <div className="triangle_left"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  //=================================================
}

export default App;
