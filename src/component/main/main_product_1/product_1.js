import React, { Component, Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import MainItem from "../main_item_modal/main_item";
import MainModal from "../main_item_modal/main_modal";

import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
//import { Link } from "react-router-dom";
import UndefinePage from "../../page/loadUndefine/undefine";

import "./product_1.scss";

const options = {
  margin: 5,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: false,
  autoplay: false,
  navText: ["<", ">"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 2,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1300: {
      items: 5,
    },
  },
};
class Product1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.get_api();
  }
  render() {
    let { productList } = this.props;
    return (
      <Fragment>
        <div className="my_product1">
          {this.props.products.length === 0 ? (
            <UndefinePage />
          ) : (
            <div>
              <div className="Product__1--text mb-4">
                <h1>{productList.name}</h1>
              </div>
              <div className="Product__1--content">
                <OwlCarousel className="owl-theme" {...options}>
                  {this.showItem()}
                </OwlCarousel>
                <div className="card__model--product1">
                  {this.showItemModel()}
                </div>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  } //-------return------------
  //   ==============function===============
  // ---showitem---
  showItem = () => {
    let { products, productList } = this.props;
    if (products.length > 0) {
      let list = products?.filter((product) => {
        return product.tagName === productList.value;
      });
      let resule = "";
      resule = list.map((product, i) => {
        return <MainItem product={product} key={`aa${i}`} />;
      });
      return resule;
    }
  };
  // ---showModel---
  showItemModel = () => {
    let { products, productList } = this.props;
    let list = products?.filter((product) => {
      return product.tagName === productList.value;
    });
    let listProduct = [...list];

    let resule = "";
    resule = listProduct.map((product, i) => {
      return <MainModal product={product} i={i} key={`bb${i}`} />;
    });
    return resule;
  };
  // ---showtitle---
  //   ==============function===============
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

export default connect(mapStateToProp, mapDispathToProp)(Product1);
