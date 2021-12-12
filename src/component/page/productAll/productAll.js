// import React, { Component } from "react";
// import SanPhamBanChay from "../../../Components/Main/main_product_2/product_2";
// import DienThoai from "../../../Components/Main/main_product_3/product_3";
// import MayTinh from "../../../Components/Main/main_product_4/product_4";

// class ProductAll extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       query: "",
//     };
//   }
//   componentDidMount() {
//     let { match } = this.props;
//     let query = match.params.id;
//     this.setState({ query: query });
//   }
//   showComponent = () => {
//     let { query } = this.state;

//   };
//   render() {
//     console.log(this.state.query);
//     return (
//       <div>
//         <h1>tất cả san pham</h1>
//         <div>{this.showComponent()}</div>
//       </div>
//     );
//   }
// }
// export default ProductAll;

import React, { Component } from "react";
import "./productAll.scss";
import MainItem from "../../main/main_item_modal/main_item";
import MainModal from "../../main/main_item_modal/main_modal";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
//import { Link } from "react-router-dom";

class ProductAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: "",
      fillMode: "",
    };
  }
  componentDidMount() {
    this.props.get_api();
    window.scrollTo(0, 0);
    let { match } = this.props;
    let query = match.params.id;
    this.setState({ fill: query });
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  render() {
    let { fill } = this.state;
    return (
      <div className="my_productAll">
        <div className="Product__All--text mb-4">
          <h1>Tất Cả Sản Phẩm</h1>
        </div>
        <div className="fill__product mt-5 mb-5">
          <div className="fill_item1">
            <i className="fa fa-search"></i>
            <input
              type="text"
              name="fill"
              onChange={this.handleChange}
              value={this.state.fill}
              placeholder="tìm kiếm ...."
            />
            <span>Tìm Kiếm</span>
          </div>
        </div>
        <div>
          {fill === "" ? null : (
            <h3 className="mb-5">tìm thấy sản phẩm liên quan đến: {fill}</h3>
          )}
        </div>
        <div className="Product__All--content">
          <div className="Product__All--disPlay">
            {this.showProductAll()}
            <div className="Product__All--modal">
              {this.showProudctModelAll()}
            </div>
          </div>
        </div>
      </div>
    );
  }
  //========================================================
  showProductAll = () => {
    let { products } = this.props;
    let { fill, fillMode } = this.state;
    let listFill = [];
    if (fill === "" && fillMode === "") {
      listFill = [...products];
    } else if (fill !== "" && fillMode === "") {
      listFill = [];
      products.forEach((item) => {
        if (item.tagSearch.indexOf(fill.toLocaleLowerCase()) !== -1) {
          listFill.push(item);
        }
      });
    } else if (fill === "" && fillMode !== "") {
      listFill = [];
      products.forEach((item) => {
        if (item.tagSearch.indexOf(fillMode.toLocaleLowerCase()) !== -1) {
          listFill.push(item);
        }
      });
    } else if (fill !== "" && fillMode !== "") {
      products.forEach((item) => {
        if (item.tagSearch.indexOf(fill.toLocaleLowerCase()) !== -1) {
          listFill.push(item);
        }
      });
    }
    let resule = "";
    resule = listFill.map((product, i) => {
      return <MainItem product={product} key={`cc${i}`} />;
    });
    return resule;
  };
  //=========================================================
  showProudctModelAll = () => {
    let { products } = this.props;
    if (products.length > 0) {
      let resule = "";
      resule = products.map((product, i) => {
        return <MainModal product={product} key={`dde${i}`} />;
      });
      return resule;
    }
  };
  //=========================================================
}
//===============================================================
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

export default connect(mapStateToProp, mapDispathToProp)(ProductAll);
