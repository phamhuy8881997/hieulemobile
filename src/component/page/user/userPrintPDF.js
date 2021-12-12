import React, { Component } from "react";
import "./tracuu.scss";
import * as action from "../../../Redux/action/index";
//import { toast } from "react-toastify";
import { connect } from "react-redux";
import ReactToPrint from "react-to-print";

class UserPrintPDF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      traCuu: "",
    };
  }
  componentDidMount() {
    this.props.get_cartShopAdmin_api();
    window.scrollTo(0, 0);
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  showCartShopAdmin = () => {
    let { cartShopAdmin } = this.props;
    let { traCuu } = this.state;
    let arrTem = cartShopAdmin.filter((item) => item.data.MDH === traCuu);
    let resule = "";
    resule = arrTem.map((item, i) => {
      return (
        <div
          className="donHangUser text-center"
          key={`dha${i}`}
          ref={(el) => (this.componentRef = el)}
        >
          <h2 className="mb-4" style={{ color: "#fff" }}>
            Đơn Hàng
          </h2>
          <div className="donHangUser__form">
            <h3 className="mb-5">HieuLeMobile</h3>
            <div className="donHangUser_header text-left">
              <p>Khách Hàng : {item.data.user.name}</p>
              <p>Số Điện Thoại : {item.data.user.phone}</p>
              <p>Địa chỉ : {item.data.user.address}</p>
            </div>
            <hr />
            <div className="donHangUser_body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Giá Bán</th>
                  </tr>
                </thead>
                <tbody>{this.renderTableHoaDon(item.data.Cart)}</tbody>
              </table>
            </div>
            <hr />
            <h5>
              -------- Tổng Tiền Thanh Toán --------
              <p>{this.showTotalALL(item.data.Cart)} VNĐ</p>
            </h5>
            <div className="donHangUser_foodter text-left">
              <p>Ghi Chú : {item.data.user.note}</p>
              <p>Mua hàng : 0909123123</p>
              <p>Chăm Sóc khách Hàng : 0909123123</p>
              <p>Hỗ Trợ Kĩ Thuật : 0909123123</p>
              <div className="text-center">
                <h5>Cảm ơn quý khách đã mua hàng tại hieuleMobile</h5>
                <p>--------- mã đơn hàng --------- </p>
                <p id="copyMDH">{item.data.MDH}</p>
                <p>--------- thời gian đặt hàng ---------</p>
                <p>{item.data.times}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return resule;
  };

  //==================Render table hóa đơn ============================
  renderTableHoaDon = (cartShop) => {
    let resule = "";
    resule = cartShop.map((cart, i) => {
      return (
        <tr key={`hdb${i}`}>
          <td>{i + 1}</td>
          <td>{cart.name}</td>
          <td>{cart.amount}</td>
          <td>{cart.price}</td>
        </tr>
      );
    });
    return resule;
  };
  //==================Render table hóa đơn ============================
  showTotalALL = (cartShop) => {
    let tongALL = 0;
    let PriceCart = cartShop;
    PriceCart.forEach((elem) => {
      let sale1 = parseInt(elem.sale) / 100;
      let price1 = parseInt(elem.price);
      let amount1 = parseInt(elem.amount);
      let tong = (price1 - price1 * sale1) * amount1;
      tongALL += tong;
    });
    return tongALL;
  };
  //===============================================
  //================================================

  render() {
    return (
      <div className="TraCuuDonHang">
        <h1>Tra Cứu Đơn hàng</h1>
        <div className="inputTraCuu">
          <input
            type="text"
            name="traCuu"
            value={this.state.traCuu}
            onChange={this.handleChange}
          />
        </div>
        <div className="QuanLyDonHang__content">{this.showCartShopAdmin()}</div>
        <ReactToPrint
          trigger={() => {
            return (
              <button
                className="btn btn-info btn-lg"
                style={{ fontSize: "2.5rem" }}
              >
                <i class="fa fa-print"></i> - In Hóa Đơn -{" "}
                <i class="fa fa-print"></i>
              </button>
            );
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}
//================connect-redux===================
const mapStateToProps = (state) => {
  return {
    cartShopAdmin: state.cartShopAdmin,
  };
};
const mapDispathToProps = (dispath, props) => {
  return {
    get_cartShopAdmin_api: () => {
      dispath(action.get_data_cart_api());
    },
    delete_cartShopAdmin_api: (id) => {
      dispath(action.delete_data_cart_api(id));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(UserPrintPDF);
