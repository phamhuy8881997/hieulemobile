import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
import "./productSelect.scss";
import Product1 from "../../main/main_product_1/product_1";
//import { Link } from "react-router-dom";

class ProductSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: "https://www.youtube.com/embed/f2TOHsvc6IQ",
      id: "",
      ArrProduct: [
        { name: "SẢN PHẨM YÊU THÍCH", value: "banchay" },
        { name: "SẢN PHẨM MỚI VỀ", value: "new" },
        { name: "ĐIỆN THOẠI", value: "phone" },
        { name: "MÁY TÍNH BẢNG", value: "tablet" },
        { name: "MÁY TÍNH", value: "laptop" },
        { name: "PHỤ KIỆN", value: "phukien" },
        { name: "SẢN PHẨM KHÁC", value: "khac" },
      ],
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.get_api();
    let { match } = this.props;
    let id = match.params.id;
    this.setState({ id: id });
  }
  addToCart(product) {
    this.props.add_to_cart(product);
    toast.warn(`🦝 thêm giỏ hàng thành công `, {
      position: "top-center",
      autoClose: 2500,
    });
    let history = this.props.history;
    history.push("/");
  }
  HandleExit = () => {
    let history = this.props.history;
    history.push("/");
  };

  showProductSelect = (id) => {
    let { products } = this.props;
    let resule = "";
    let ArrTemp = products.filter((product, i) => product._id === id);
    resule = ArrTemp.map((product, i) => {
      return (
        <div key={`xxzz${i}`}>
          <div className="text-center">
            <h2>{product.name}</h2>
          </div>
          <div className="row select__header">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="select__header--left">
                <img src={product.img} className="select__img" alt="..." />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="select__header--right">
                <div>
                  <p>Sản Phẩm: {product.name}</p>
                  {product.sale === "0" ? (
                    <div>
                      <p className="mr-3 text__price">
                        Giá Bán: {product.price} VNĐ
                      </p>
                      <p>Bảo Hành 12 Tháng, 1 đổi 1 trong 30 ngày.</p>
                      <p>Miễn Phí Vận Chuyển Cho Đơn Hàng Từ 2.000.000 VNĐ .</p>
                      <p>Hỗ Trợ kĩ Thuật Trọn Đời .</p>
                      <p>Nhận Ưu Đãi Khi Mua Lần 2 .</p>
                      <p>mua ngay</p>
                    </div>
                  ) : (
                    <div>
                      <p className="mr-1 text__price text__price-sale">
                        Giá Bán:
                        {product.price} VNĐ
                      </p>
                      <p className="mr-1 text__price ">
                        Khuyến mãi {product.sale} Chỉ còn:{" "}
                        {Math.floor(
                          product.price * (1 - parseInt(product.sale) / 100)
                        )}{" "}
                        VNĐ
                      </p>
                      <p>Bảo Hành 12 Tháng, 1 đổi 1 trong 30 ngày .</p>
                      <p>Miễn Phí Vận Chuyển Cho Đơn Hàng Từ 2.000.000 VNĐ .</p>
                      <p>Hỗ Trợ kĩ Thuật Trọn Đời .</p>
                      <p>Nhận Ưu Đãi Khi Mua Lần 2 .</p>
                      <p>mua ngay</p>
                    </div>
                  )}
                  <button
                    className="btn btn-info btn-lg btn__buy__shop"
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
          <hr />
          <div className="btn-exit text-center">
            <button
              className="btn btn-warning"
              onClick={() => {
                this.HandleExit();
              }}
            >
              <i className="fa fa-arrow-alt-circle-left"></i>
            </button>
          </div>
          <hr />
          <div className="row select__body">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="select__body--top">
                <h3>Thông Tin Sản Phẩm:</h3>
                <p style={{ textAlign: "justify" }}>{product.descript}</p>
              </div>
            </div>
            <hr />
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="select__body--bottom">
                <hr />
                <h4>Cấu Hình {product.name}</h4>
                <img src={product.imgConfig} alt="..." />
              </div>
            </div>
            <hr />
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="select__footer">
                <hr />
                <h4>Video Giới Thiệu Sản Phẩm</h4>
                <div>
                  <iframe
                    src={this.state.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return resule;
  };

  render() {
    let { id } = this.state;
    return (
      <Fragment>
        <div className="select__page">{this.showProductSelect(id)}</div>
        <div>
          <Product1 productList={this.state.ArrProduct[2]} />
        </div>
        <div>
          <Product1 productList={this.state.ArrProduct[3]} />
        </div>
      </Fragment>
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
    get_api: () => {
      dispath(action.get_api());
    },
  };
};
// ====================================
export default connect(mapStateToProp, mapDispathToProp)(ProductSelect);
