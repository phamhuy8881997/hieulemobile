import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
import { Link } from "react-router-dom";

class MainModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  addToCart(product) {
    this.props.add_to_cart(product);
    toast.warn(`🦝 thêm giỏ hàng thành công `, {
      position: "top-center",
      autoClose: 2500,
    });
  }
  render() {
    let { product } = this.props;
    return (
      <div
        className="modal fade"
        id={`staticBackdrop${product._id}`}
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Thông Tin Sản Phẩm:
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" id="style-scroll">
              <div className="text-center text-danger"></div>
              {/* ---title-Modal--- */}
              <div className="modal__title">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="modal__title--img">
                      <img src={product.img} className="img__modal" alt="..." />
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="modal__title--text">
                      <p>{product.descript.slice(0, 200)}...</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text-center Xem-chi-tiet">
                  <Link
                    className="btn btn-warning btn-lg"
                    to={`/select/${product._id}/select`}
                  >
                    Xem Chi Tiết
                  </Link>
                </div>
                <hr />
                <div className="row title__1">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
                </div>
                <div className="row title__2">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
                </div>
              </div>
              {/* ---title-Modal--- */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                data-dismiss="modal"
              >
                Thoát
              </button>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => {
                  this.addToCart(product);
                }}
              >
                Thêm Giỏ Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// ====================================
var mapStateToProp = (state) => {
  return {
    products: state.products,
  };
};
// ====================================
var mapDispathToProp = (dispath, props) => {
  return {
    add_to_cart: (product) => {
      dispath(action.add_to_cart(product));
    },
  };
};
// ====================================
export default connect(mapStateToProp, mapDispathToProp)(MainModal);
