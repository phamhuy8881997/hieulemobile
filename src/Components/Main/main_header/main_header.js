import React, { Component } from "react";

import "./main_header.scss";
import "./cart_shop.scss";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
//import { Link } from "react-router-dom";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: ["SamSung", "Iphone", "Sony", "Google Pixel", "Oppo"],
      laptop: ["Dell", "Asus", "hp", "Acer", "MacBook"],
      tablet: ["samsung", "ipad", "huawei"],
      phukien: ["cáp sạc", "pin dự phòng", "ốp lưng", "tai nge", "loa"],
      cartShop: [],
    };
  }
  componentDidMount() {
    this.props.get_cart_localStore();
  }
  render() {
    let { phone, laptop, tablet, phukien } = this.state;
    return (
      <section className="main_header">
        {/* --------- */}
        <div className="item_1 item_product dropdown active">
          <div className="trigger__overlay"></div>
          <p id="dropdownMenuButton" data-toggle="dropdown">
            LapTop
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <ul>{this.showItemHeader(laptop)}</ul>
          </div>
        </div>
        {/* --------- */}
        <div className="item_1 item_product dropdown">
          <div className="trigger__overlay"></div>
          <p
            id="dropdownMenuButton1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Điện Thoại
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <ul>{this.showItemHeader(phone)}</ul>
          </div>
        </div>
        {/* --------- */}
        <div className="item_1 item_product dropdown">
          <div className="trigger__overlay"></div>
          <p
            id="dropdownMenuButton2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Tablet
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <ul>{this.showItemHeader(tablet)}</ul>
          </div>
        </div>
        {/* --------- */}
        <div className="item_1 item_product dropdown">
          <div className="trigger__overlay"></div>
          <p
            id="dropdownMenuButton3"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Phụ Kiện
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
            <ul>{this.showItemHeader(phukien)}</ul>
          </div>
        </div>
        {/* --------- */}
        <div className="item_1 item_product item__cart">
          <div className="trigger__overlay"></div>
          <p data-toggle="modal" data-target="#modalCartShop">
            <span>Giỏ Hàng</span>
            <i className="fa fa-cart-arrow-down"></i>
            <span className="item__cart--sll">
              {this.props.AddToCart ? this.props.AddToCart.length : "0"}
            </span>
          </p>
          <div>{this.modalCartShop()}</div>
        </div>
        {/* --------- */}
        {/* <div className="item_1 item__cart">
          <i
            className="fa fa-cart-arrow-down"
            data-toggle="modal"
            data-target="#modalCartShop"
          ></i>
          <p>Giỏ Hàng</p>
          
        </div> */}
      </section>
    );
  }
  //=========Modal-Cart-shop======================
  modalCartShop = () => {
    return (
      <div
        className="modal fade"
        id="modalCartShop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Giỏ Hàng
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" className="loseM">
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body">{this.showCartShop()}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-lg btn-secondary ml-3"
                data-dismiss="modal"
              >
                Thoát
              </button>
              {/* <Link
                type="button"
                className="btn btn-lg btn-primary ml-3"
                to="/cartshop"
              >
                Thanh Toán
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  // ============show-li-item-header=================
  showItemHeader = (items) => {
    let resule = "";
    resule = items.map((item, i) => {
      return (
        <li key={`ssxx${i}`}>
          <div className="triggerLeftItem"></div>
          {item}
        </li>
      );
    });
    return resule;
  };
  //===========show-cart-shop==================
  showCartShop = () => {
    const cartShop = this.props.AddToCart;
    return cartShop.length === 0 ? (
      <div className="showTableOnCartShop">
        <div className="cart__null">
          <i className="fa fa-shopping-cart"></i>
          <h1>Chưa có sản phẩm trong giỏ hàng</h1>
        </div>
      </div>
    ) : (
      <div className="showTableOnCartShop">
        <h1>Sản Phẩm Trong Giỏ Hàng</h1>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Sản Phẩm</th>
              <th>Hình ảnh</th>
              <th>Số Lượng</th>
              <th>Giá đơn</th>
              <th>Tổng Tiền</th>
              <th>Xóa</th>
            </tr>
          </thead>
          {this.showTbody()}
        </table>
        <div className="tongTienCart">
          <div className="alert alert-info" style={{ fontWeight: "bolder" }}>
            Tổng tiền Thanh Toán : {this.showTotalALL()} VNĐ
          </div>
          <div className="alert alert-danger">
            <button
              className="btn btn-danger btn-lg"
              onClick={() => {
                this.props.delete_cart_all();
              }}
            >
              Xóa Tất Cả
            </button>
          </div>
        </div>
      </div>
    );
  };
  //========================show-table===========================
  showTableCartShop = () => {
    let cartShop = this.props.AddToCart;
    let resule = "";
    resule = cartShop?.map((product, i) => {
      return (
        <tr key={`cart${i}`}>
          <td>{i + 1}</td>
          <td className="table__amount">{product.name.slice(0, 25)}</td>
          <td>
            <img src={product.img} alt="..." width="50" height="50" />
          </td>
          <td className="table__amount table__xs">
            <button
              type="button"
              className="btn btn-primary btn-primary1"
              onClick={() => {
                this.props.counter_amount(product._id, "giam");
              }}
            >
              -
            </button>
            <span className="mx-2">{product.amount}</span>
            <button
              type="button"
              className="btn btn-primary btn-primary2"
              onClick={() => {
                this.props.counter_amount(product._id, "tang");
              }}
            >
              +
            </button>
          </td>
          <td>{product.price}</td>
          <td>{this.showTotal(product.price, product.amount, product.sale)}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.onDeleteCart(product._id);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
    return resule;
  };
  //=====================show-tong-tien====================
  showTotal = (price, amout, sale) => {
    let sale1 = parseInt(sale) / 100;
    let price1 = parseInt(price);
    let amount1 = parseInt(amout);
    let tong = (price1 - price1 * sale1) * amount1;
    return Math.floor(tong);
  };
  showTotalALL = (cartShop) => {
    let tongALL = 0;
    let PriceCart = this.props.AddToCart;
    PriceCart.forEach((elem) => {
      let sale1 = parseInt(elem.sale) / 100;
      let price1 = parseInt(elem.price);
      let amount1 = parseInt(elem.amount);
      let tong = (price1 - price1 * sale1) * amount1;
      tongALL += tong;
    });
    return tongALL;
  };
  showTbody = () => {
    return <tbody>{this.showTableCartShop()}</tbody>;
  };
  //===========xóa sản phẩm khỏi giỏ hàng======================
  onDeleteCart = (id) => {
    this.props.delete_cart_id(id);
  };
}
// ===========connect-react-Redux======================
// ====================================================
var mapStateToProp = (state) => {
  return {
    AddToCart: state.AddToCart,
  };
};
// ===============================
var mapDispathToProp = (dispath, props) => {
  return {
    add_to_cart: (product) => {
      dispath(action.add_to_cart(product));
    },
    delete_cart_id: (id) => {
      dispath(action.delete_cart_id(id));
    },
    delete_cart_all: () => {
      dispath(action.delete_cart_all());
    },
    counter_amount: (id, count) => {
      dispath(action.counter_amount(id, count));
    },
    get_cart_localStore: () => {
      dispath(action.get_cart_localStore());
    },
  };
};
// ===========connect-react-Redux======================
// ====================================================
export default connect(mapStateToProp, mapDispathToProp)(MainHeader);
