import React, { Component } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";

class MainItem extends Component {
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
      <React.Fragment>
        <div className="item">
          <div className="card">
            <div className="card__img">
              <img src={product.img} className="card-img-top" alt="..." />
            </div>
            <div className="card_sale1">
              {product.status === "sale" ? (
                <img
                  src={require("../../../images/img/sale1.jpg").default}
                  alt="..."
                />
              ) : product.status === "new" ? (
                <img
                  src={require("../../../images/img/sale2.png").default}
                  alt="..."
                />
              ) : product.status === "hethang" ? (
                <div className="cart__img-sale">
                  <h3>Hết Hàng</h3>
                </div>
              ) : product.status === "sapve" ? (
                <div className="cart__img-sale cart__img-sale1">
                  <h3>Sắp Về</h3>
                </div>
              ) : (
                <img
                  src={require("../../../images/img/sale4.png").default}
                  style={{ display: "none" }}
                  alt="..."
                />
              )}
            </div>
            <div id="triangle_down"></div>
            <div className="card-body">
              <div className="card-body__line"></div>
              {product.name.length >= 25 ? (
                <h5 className="card-title">{product.name.slice(0, 24)}...</h5>
              ) : (
                <h5 className="card-title"> {product.name}</h5>
              )}

              <div className="card-text">
                {product.sale === "0" ? (
                  <div>
                    <span className="mr-3 text__price">
                      {product.price} VNĐ
                    </span>
                  </div>
                ) : (
                  <div>
                    <span className="mr-1 text__price text__price-sale">
                      {product.price} VNĐ
                    </span>
                    <span className="mr-1 ml-3 text__price ">
                      {Math.floor(
                        product.price * (1 - parseInt(product.sale) / 100)
                      )}{" "}
                      VNĐ
                    </span>
                  </div>
                )}
                {product.sale === "0" ? (
                  <span style={{ opacity: 0 }}>
                    Siêu ưu đãi giảm:{product.sale}
                  </span>
                ) : (
                  <span style={{ fontStyle: "italic" }}>
                    Siêu ưu đãi giảm:{product.sale}
                  </span>
                )}
              </div>
              <button
                className="btn btn-primary mr-4"
                onClick={() => {
                  this.addToCart(product);
                }}
              >
                <i className="fa fa-plus-circle mr-3"></i>
                <i className="fa fa-cart-plus"></i>
              </button>
              <button
                type="button"
                className="btn btn-warning hover__overlay"
                data-toggle="modal"
                data-target={`#staticBackdrop${product._id}`}
              >
                Xem Ngay
              </button>
              <div id="triangle_right"></div>
              <div id="triangle_left"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
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
export default connect(mapStateToProp, mapDispathToProp)(MainItem);
