import React, { Component } from "react";
import "./product_2.scss";
import MainItem from "../main_item_modal/main_item";
import MainModal from "../main_item_modal/main_modal";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
import { Link } from "react-router-dom";

class Product2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberCount: 8,
    };
  }
  componentDidMount() {
    this.props.get_api();
  }
  render() {
    let { productList } = this.props;
    return (
      <div className="my_product2">
        <div className="Product__2--text mb-4">
          <h1>{productList.name}</h1>
        </div>
        <div className="Product__2--content">
          <div className="Product__2--disPlay">
            {this.showProduct2()}
            <div className="Product__2--modal">{this.showProudctModel2()}</div>
          </div>
        </div>
        <div className="loadMore text-center">
          <button
            type="button"
            className="btn btn-lg btn-primary mx-5"
            onClick={() => {
              this.loadMore();
            }}
          >
            Xem thêm...
          </button>
          <Link
            type="button"
            className="btn btn-lg btn-primary mx-5"
            to="tat-ca-san-pham/ban-chay"
          >
            Xem Tất Cả..
          </Link>
        </div>
      </div>
    );
  }
  //==========
  showProduct2 = () => {
    var { numberCount } = this.state;
    let { products, productList } = this.props;
    if (products.length > 0) {
      let list = products.filter((product) => {
        return product.tagName === productList.value;
      });
      let resule = "";
      resule = list.slice(0, numberCount).map((product, i) => {
        return <MainItem product={product} key={`cc${i}`} />;
      });
      return resule;
    }
  };
  showProudctModel2 = () => {
    let { products, productList } = this.props;
    if (products.length > 0) {
      let list = products.filter((product) => {
        return product.tagName === productList.value;
      });
      let resule = "";
      resule = list.map((product, i) => {
        return <MainModal product={product} key={`dd${i}`} />;
      });
      return resule;
    }
  };
  //   ===========
  loadMore = () => {
    this.setState({ numberCount: this.state.numberCount + 3 });
  };
}

var mapStateToProp = (state) => {
  return {
    products: state.products,
  };
};
var mapDispathToProp = (dispath, props) => {
  return {
    get_api: () => {
      dispath(action.get_api());
    },
  };
};

export default connect(mapStateToProp, mapDispathToProp)(Product2);
