import React, { Component } from "react";
import "./foodter.scss";

class Foodter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googlemap:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.123425419889!2d106.62456920285558!3d10.806585504485662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bb578b0d45f%3A0x4e0ea12adcade856!2zTMOgbmcgTsaw4bubbmcgTmFtIELhu5k!5e0!3m2!1svi!2s!4v1625145038834!5m2!1svi!2s",
    };
  }
  render() {
    return (
      <footer className="foodter">
        <div className="foodter0">
          <div className="foodter0__item">Giao Hàng Nhanh</div>
          <div className="foodter0__item">Chính Sách Hậu Mãi</div>
          <div className="foodter0__item">Ưu đãi Giá Tốt</div>
        </div>
        <div className="foodter1">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 foodter1--1">
                <ul>
                  <li>
                    <i className="fa fa-plus-circle fa-spin mr-3"></i>Chính Sách
                  </li>
                  <li>
                    <i className="fa fa-plus-circle fa-spin mr-3"></i>Quy Định
                  </li>
                  <li>
                    <i className="fa fa-plus-circle fa-spin mr-3"></i>Bảo mật
                  </li>
                  <li>
                    <i className="fa fa-plus-circle fa-spin mr-3"></i>Giới Thiệu
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 foodter1--2">
                <ul>
                  <li>
                    <i className="fa fa-phone mr-3"></i>
                    0909123123
                  </li>
                  <li>
                    <i className="fa fa-envelope mr-3"></i>
                    xxxxxxxxxx
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt mr-3"></i>
                    xxxxxxxxxx
                  </li>
                  <li>
                    <i className="fab fa-facebook mr-3"></i>
                    xxxxxxxxxx
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 foodter1--3">
                <ul>
                  <li>
                    <i className="fab fa-youtube mr-3"></i>xxxxxxxxx
                  </li>
                  <li>xxxxxxxxx</li>
                  <li>xxxxxxxxx</li>
                  <li>xxxxxxxxx</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foodter2">
          <p>
            &copy; CopyRight, trang web chịu trách nhiệm bởi ông Lê Minh Hiếu
            liên hệ hieule97@gmail.com
          </p>
        </div>
      </footer>
    );
  }
}

export default Foodter;
