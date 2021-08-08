import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container-fluid">
          <div className="header__logo">
            <div className="header__mark">
              <a href="/">
                <i className="fab fa-battle-net"></i>
                <span>HieuLeMobile</span>
              </a>
              <div className="line__logo"></div>
            </div>
          </div>
          <div className="header__item">
            <input type="checkbox" name="" id="check__menu" />
            <label htmlFor="check__menu">
              <i className="fa fa-th"></i>
            </label>
            <div className="header__menu">
              <label htmlFor="check__menu">
                <i className="fa fa-times"></i>
              </label>
              <ul>
                <li>
                  <Link className="menu__header" to="/">
                    Trang Chủ
                  </Link>
                </li>
                <li>
                  <Link className="menu__header" to="/">
                    Thông Tin
                  </Link>
                </li>
                <li>
                  <Link className="menu__header" to="/">
                    Liên Hệ
                  </Link>
                </li>
                <li>
                  <Link className="menu__header" to="in-hoa-don-mua-hang">
                    In Đơn Hàng
                  </Link>
                </li>
                <li>
                  <Link className="menu__header" to="tra-cuu-don-hang">
                    Tra Cứu Đơn Hàng
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
