import React, { Component, Fragment } from "react";
import "./adminCart.scss";
import * as action from "../../../Redux/action/index";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

class AdminCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serchCartSDT: "",
    };
  }
  componentDidMount() {
    this.props.get_cartShopAdmin_api();
    window.scrollTo(0, 0);
  }
  scroll = () => {};
  showCartShopAdmin = () => {
    let { cartShopAdmin } = this.props;
    let { serchCartSDT } = this.state;
    let arrtemp = [];

    if (serchCartSDT === "") {
      arrtemp = [...cartShopAdmin];
    } else {
      arrtemp = cartShopAdmin.filter(
        (cartItem) => cartItem.data.user.phone === serchCartSDT
      );
    }

    let resule = "";
    resule = arrtemp.map((item, i) => {
      return (
        <div className="donHangUser text-center" key={`dha${i}`}>
          <h2 className="mb-4">Đơn Hàng số {i + 1}</h2>
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
                <CopyToClipboard text={item.data.MDH}>
                  <p
                    id="copyMDH"
                    onClick={() => {
                      toast.info(`🦝 copy đơn hàng thành công `, {
                        position: "top-center",
                        autoClose: 3000,
                      });
                    }}
                  >
                    {item.data.MDH}
                  </p>
                </CopyToClipboard>
                <p>--------- thời gian đặt hàng ---------</p>
                <p>{item.data.times}</p>
              </div>
            </div>
          </div>
          <div className="DeleteCartAPI">
            <button
              type="button"
              className="btn btn-lg btn-danger"
              onClick={() => {
                this.deleteCartApi(item._id);
              }}
            >
              Xóa Đơn Hàng
            </button>
            {item.data.status === true ? (
              <button type="button" className="btn btn-lg btn-success">
                Đã Xác Nhận
              </button>
            ) : (
              <button type="button" className="btn btn-lg btn-warning">
                Chưa Xác Nhận
              </button>
            )}
            <div>
              <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={() => {
                  this.UpdateStatus(item);
                }}
              >
                Trạng thái <i className="fa fa-check-circle"></i>
              </button>
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
  deleteCartApi = (id) => {
    if (window.confirm("bạn có chắc muốn xóa")) {
      this.props.delete_cartShopAdmin_api(id);
      toast.error(`🦝 xóa đơn hàng thành công `, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  //================================================
  UpdateStatus = (item) => {
    //let status1 = !item.data.status;
    let item1 = {
      user: item.data.user,
      Cart: item.data.Cart,
      MDH: item.data.MDH,
      times: item.data.times,
      status: !item.data.status,
    };
    this.props.put_cartShopAdmin_api(item._id, { data: item1 });
    toast.info(`🦝 cập nhật trạng thái thành công `, {
      position: "top-center",
      autoClose: 3000,
    });
  };
  //==================================================
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Fragment>
        <div className="QuanLyDonHang">
          <h1>Trang Quản Lý Đơn Hàng Admin</h1>
          <div className="serch__cartAdmin">
            <input
              type="text"
              name="serchCartSDT"
              value={this.state.serchCartSDT}
              onChange={this.handleChange}
              placeholder="nhập số điện thoại..."
            />
          </div>
          <div className="QuanLyDonHang__content">
            {this.showCartShopAdmin()}
          </div>
        </div>
      </Fragment>
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
    put_cartShopAdmin_api: (id, data) => {
      dispath(action.put_data_cart_api(id, data));
    },
    delete_cartShopAdmin_api: (id) => {
      dispath(action.delete_data_cart_api(id));
    },
  };
};
export default connect(mapStateToProps, mapDispathToProps)(AdminCart);
