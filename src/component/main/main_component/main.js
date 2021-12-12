import React, { Component, Fragment } from "react";
import "./main.scss";

import Product1 from "../main_product_1/product_1";
import Product2 from "../main_product_2/product_2";
import MainHeader from "../main_header/main_header";
import Banner from "../banner_component/banner";
import Carousel from "../../header/carousel_component/carousel";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrProduct: [
        { name: "SẢN PHẨM BÁN CHẠY", value: "banchay" },
        { name: "SẢN PHẨM MỚI", value: "new" },
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
  }
  render() {
    let { ArrProduct } = this.state;
    return (
      <Fragment>
        <div>
          <Carousel />
          <Banner />
          <MainHeader />
          <Product1 productList={ArrProduct[0]} />
          <Product2 productList={ArrProduct[1]} />
          <Product2 productList={ArrProduct[2]} />
          <Product2 productList={ArrProduct[3]} />
          <Product2 productList={ArrProduct[4]} />
          <Product1 productList={ArrProduct[5]} />
          <Product1 productList={ArrProduct[6]} />
        </div>
      </Fragment>
    );
  }
}

export default Main;
