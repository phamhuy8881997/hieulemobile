import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../Redux/action/index";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./cartShop.scss";

function CartShop(props) {
  // =====================useState==========================
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [MDH, setMDH] = useState("xxxxxxxxxxxxxxx");
  const [user, setUser] = useState({});
  const [dataCart, setDataCart] = useState({});
  const [maXacNhan, setMaXacNhan] = useState("xxxxxxx");
  // ----------errText--------------
  const [errName, setErrName] = useState("vui lòng nhập họ tên !");
  const [errPhone, setErrPhone] = useState("vui lòng nhập số điện thoại !");
  const [errNote, setErrNote] = useState("");
  const [errAddress, setErrAddress] = useState(
    "vui lòng nhập địa chỉ giao hàng"
  );
  const [formload, setFormload] = useState("1");
  //Koiito Kinenbi The Animation 1
  // =======================useState==========================

  const Cart = useSelector((state) => state.AddToCart); //mapStateToProps react=>redux=>reducer
  //const dispath = useDispatch(); //mapDispathToProps redux=>action

  //===================validation-input==================================
  const validateField = (fieldName) => {
    switch (fieldName) {
      case "name":
        let error = "";
        let name_regex = /lol|dm|cho|cc|oc|chich|fuck|ok|óc|@/gim;
        if (name.length < 6) {
          error = "tên quá ngắn vui lòng nhập thêm !";
        } else if (name.length > 16) {
          error = "tên quá dài !";
        } else if (name_regex.test(name.toLocaleLowerCase())) {
          error = "tên bạn có chứa kí tự không hợp lệ !";
        } else {
          error = "";
        }
        setErrName(error);
        break;
      case "phone":
        let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (vnf_regex.test(phone) === false) {
          setErrPhone("số điện thoại không hợp lệ !");
        } else {
          setErrPhone("");
        }
        break;
      case "address":
        let name_regex1 = /lol|dm|cc|oc|chich|fuck|ok|óc|@/gim;
        if (address.length < 10) {
          setErrAddress("vui lòng nhập địa chỉ nhiều hơn 10 kí tự !");
        } else if (name_regex1.test(address.toLocaleLowerCase())) {
          setErrAddress("địa chỉ có chứa kí tự không hợp lệ !");
        } else {
          setErrAddress("");
        }
        break;
      case "note":
        let note_regex = /lol|dm|cc|oc|chich|fuck|ok|óc|@/gim;
        if (note_regex.test(note.toLocaleLowerCase())) {
          setErrNote("ghi chú có chứa kí tự không hợp lệ !");
        } else {
          setErrNote("");
        }
        break;
      default:
        break;
    }
  };
  //===================validation-input===================================
  //===============componnentDidMount----componnetWillunmout==============
  useEffect(() => {
    //componentdidmout
    window.scrollTo(0, 0);
    return () => {
      //componnetWillunmout
    };
  });
  //===============componnentDidMount----componnetWillunmout==============
  //==========================form-load===============================
  const formloadClick = () => {
    if (cartShop.length === 0) {
      alert("vui lòng chọn ít nhất 1 sản phẩm để thanh toán");
    } else {
      setFormload("2");
    }
  };
  const formloadPrevNext = (value) => {
    return setFormload(value);
  };
  //==========================form-load================================
  //=======================click-xác-nhận-mua-hàng=====================
  const BuyToCart = () => {
    let user = { name: name, phone: phone, address: address, note: note };
    setUser(user);
    let timess = new Date();
    let times =
      timess.toLocaleTimeString() + "---" + timess.toLocaleDateString();

    let dataCartUP = {
      user: user,
      Cart: Cart,
      MDH: MDH,
      times: times,
      status: false,
    };
    setDataCart(dataCartUP);
    if (name === "" || errName !== "") {
      alert("tên nhập vào không hợp lệ vui lòng kiểm tra lại");
    } else if (phone === "" || errPhone !== "") {
      alert("số điện thoại nhập vào không hợp lệ vui lòng kiểm tra lại");
    } else if (address === "" || errAddress !== "") {
      alert("địa chỉ nhập vào không hợp lệ vui lòng kiểm tra lại");
    } else if (errNote === "ghi chú có chứa kí tự không hợp lệ !") {
      alert("ghi chú nhập vào không hợp lệ vui lòng kiểm tra lại");
    } else if (MDH === "xxxxxxxxxxxxxxx") {
      alert(
        "chưa có mã đơn hàng. Vui lòng bấm vào nút lấy mã đơn hàng phía dưới."
      );
    } else {
      setFormload("3");
    }
  };
  //=======================click-xác-nhận-mua-hàng=====================
  //=======================click-lấy-mã-đơn-hàng=======================
  const getMDH = () => {
    var crypto = require("crypto");
    let mdh = crypto.randomBytes(18).toString("hex");
    setMDH(mdh);
  };
  //=======================click-lấy-mã-đơn-hàng=======================
  //=========================show-cart-shop============================
  const cartShop = useSelector((state) => state.AddToCart);
  const dispath = useDispatch();
  const showCartShop = () => {
    return cartShop.length === 0 ? (
      <div className="buy-to-shop-null">
        <div className="shop__null">
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
          {showTbody()}
        </table>
        <div className="tongTienCart">
          <div className="alert alert-info">
            Tổng tiền Thanh Toán : {showTotalALL()} VNĐ
          </div>
          <div className="alert alert-danger">
            <button
              className="btn btn-danger btn-lg"
              onClick={() => {
                dispath(action.delete_cart_all());
              }}
            >
              Xóa Tất Cả
            </button>
          </div>
        </div>
      </div>
    );
  };
  //=========================show-cart-shop============================
  //==========================show-table===============================
  const showTableCartShop = () => {
    //let cartShop = JSON.parse(localStorage.getItem("cartShop"));
    let resule = "";
    resule = cartShop.map((product, i) => {
      return (
        <tr key={`cart${i}`}>
          <td>{i + 1}</td>
          <td className="table__amount">{product.name.slice(0, 16)}</td>
          <td>
            <img src={product.img} alt="..." width="50" height="50" />
          </td>
          <td className="table__amount">
            <button
              type="button"
              className="btn btn-primary btn-primary1"
              onClick={() => {
                dispath(action.counter_amount(product._id, "giam"));
              }}
            >
              -
            </button>
            <span className="mx-2">{product.amount}</span>
            <button
              type="button"
              className="btn btn-primary btn-primary2"
              onClick={() => {
                dispath(action.counter_amount(product._id, "tang"));
              }}
            >
              +
            </button>
          </td>
          <td>{product.price}</td>
          <td>{showTotal(product.price, product.amount, product.sale)}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                onDeleteCart(product._id);
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
  //==========================show-table===============================
  //=========================show-tong-tien============================
  const showTotal = (price, amout, sale) => {
    let sale1 = parseInt(sale) / 100;
    let price1 = parseInt(price);

    let amount1 = parseInt(amout);
    let tong = (price1 - price1 * sale1) * amount1;
    return Math.floor(tong);
  };
  const showTotalALL = () => {
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
  const showTbody = () => {
    return <tbody>{showTableCartShop()}</tbody>;
  };
  //=========================show-tong-tien============================
  //==================xóa sản phẩm khỏi giỏ hàng=======================
  const onDeleteCart = (id) => {
    dispath(action.delete_cart_id(id));
  };
  //==================xóa sản phẩm khỏi giỏ hàng=======================
  //==================Render table hóa đơn ============================
  const renderTableHoaDon = () => {
    let resule = "";
    resule = cartShop.map((cart, i) => {
      return (
        <tr key={`hd${i}`}>
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
  //==================xác nhận mua hàng ===============================
  const xacNhanMuaHang = () => {
    if (window.confirm("ban muốn xác nhận thanh toán")) {
      dispath(action.post_data_cart_api({ data: dataCart }));
      toast.info(`🦝 mua hàng thành công `, {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };
  //==================xác nhận mua hàng ===============================
  const copyMDH = () => {
    toast.info(`🦝 coppy thành công `, {
      position: "top-center",
      autoClose: 2500,
    });
  };
  // ===========================return-render==========================
  return (
    <Fragment>
      <div
        className="bg-warning text-center py-4 mb-4"
        style={{ fontSize: "3rem", fontWeight: "bolder" }}
      >
        --- Bước {formload} ---
      </div>
      {/*--------------------- formload === 1 -------------------*/}
      {formload === "1" && (
        <div>
          <div className="KiemTraGioHang">{showCartShop()}</div>
          <div className="text-center buy__to__1">
            <button
              type="button"
              className="btn btn-lg btn-primary my-4"
              onClick={() => formloadClick()}
            >
              Nhập Thông Tin Mua hàng
            </button>
          </div>
        </div>
      )}
      {/*--------------------- formload === 1 -------------------*/}
      {/*--------------------- formload === 2 -------------------*/}
      {formload === "2" && (
        <div>
          <div className="NhapThongTinMuaHang">
            <form autoComplete="off">
              <h2 className="mb-5">Nhập Thông Tin Mua Hàng</h2>
              <hr />
              <p>Mã Đơn Hàng</p>
              <div className="alert alert-danger">{MDH}</div>
              <hr />
              <div>
                <p>Tên</p>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  onKeyUp={() => {
                    validateField("name");
                  }}
                />
                {errName === "" ? (
                  <h6 className="form__suc">
                    <i className="fa fa-check-circle mr-3"></i>tên hợp lệ
                  </h6>
                ) : (
                  <h6 className="form__err">
                    <i className="fa fa-info-circle mr-3"></i>
                    {errName}
                  </h6>
                )}
              </div>
              <div>
                <p>Số Điện Thoại</p>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  onKeyUp={() => {
                    validateField("phone");
                  }}
                />
                {errPhone === "" ? (
                  <h6 className="form__suc">
                    <i className="fa fa-check-circle mr-3"></i>số điện thoại hợp
                    lệ
                  </h6>
                ) : (
                  <h6 className="form__err">
                    <i className="fa fa-info-circle mr-3"></i>
                    {errPhone}
                  </h6>
                )}
              </div>
              <div>
                <p>Địa Chỉ</p>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  onKeyUp={() => {
                    validateField("address");
                  }}
                />
                {errAddress === "" ? (
                  <h6 className="form__suc">
                    <i className="fa fa-check-circle mr-3"></i>địa chỉ hợp lệ
                  </h6>
                ) : (
                  <h6 className="form__err">
                    <i className="fa fa-info-circle mr-3"></i>
                    {errAddress}
                  </h6>
                )}
              </div>
              <div>
                <p>Ghi Chú</p>
                <textarea
                  className="mb-2"
                  rows="4"
                  cols="50"
                  type="text"
                  name="note"
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                  onKeyUp={() => {
                    validateField("note");
                  }}
                />
                {errNote === "" ? (
                  <h6 className="form__suc">
                    <i className="fa fa-check-circle mr-3"></i>ghi chú hợp lệ
                  </h6>
                ) : (
                  <h6 className="form__err">
                    <i className="fa fa-info-circle mr-3"></i>
                    {errNote}
                  </h6>
                )}
              </div>
              <button
                type="button"
                className="btn btn-lg btn-warning mx-3 my-3"
                onClick={() => {
                  getMDH();
                }}
              >
                Lấy Mã Đơn Hàng
              </button>
            </form>
            <div></div>
          </div>
          <div className="text-center buy__to__1">
            <button
              type="button"
              className="btn btn-lg btn-primary my-4 mx-4"
              onClick={() => formloadPrevNext("1")}
            >
              Quay Lại
            </button>
            <button
              type="button"
              className="btn btn-lg btn-warning my-4 mx-4"
              onClick={() => BuyToCart()}
            >
              Tiếp Theo
            </button>
          </div>
        </div>
      )}
      {/*--------------------- formload ===2 --------------------*/}
      {/*--------------------- formload ===3 --------------------*/}
      {formload === "3" && (
        <div>
          <div className="donHangUser text-center">
            <h2 className="mb-4">Kiểm tra Thông Tin</h2>
            <div className="donHangUser__form">
              <h3 className="mb-5">HieuLeMobile</h3>
              <div className="donHangUser_header text-left">
                <p>Khách Hàng : {dataCart.user.name}</p>
                <p>Số Điện Thoại : {dataCart.user.phone}</p>
                <p>Địa chỉ : {dataCart.user.address}</p>
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
                  <tbody>{renderTableHoaDon()}</tbody>
                </table>
              </div>
              <hr />
              <h5>Tổng Tiền Thanh Toán : {showTotalALL()} VNĐ</h5>
              <div className="donHangUser_foodter text-left">
                <p>Ghi Chú : {dataCart.user.note}</p>
                <p>Mua hàng : 0909123123</p>
                <p>Chăm Sóc khách Hàng : 0909123123</p>
                <p>Hỗ Trợ Kĩ Thuật : 0909123123</p>
                <div className="text-center">
                  <h5>Cảm ơn quý khách đã mua hàng tại hieuleMobile</h5>
                  <p>mã đơn hàng</p>
                  <CopyToClipboard text={MDH}>
                    <p
                      style={{
                        border: "1px solid #000",
                        width: "100%",
                        margin: "auto",
                      }}
                      id="copyMDH"
                      onClick={() => {
                        copyMDH();
                      }}
                    >
                      <i class="fa fa-copy"></i> - {MDH} -{" "}
                      <i class="fa fa-copy"></i>
                    </p>
                  </CopyToClipboard>
                  <p>thời gian đặt hàng</p>
                  <p>{dataCart.times}</p>
                </div>
              </div>
            </div>
            <p>(***) bấm vào mã đơn hàng để copy mã đơn hàng</p>
          </div>

          <div className="text-center buy__to__1">
            <button
              type="button"
              className="btn btn-lg btn-primary my-4 mx-4"
              onClick={() => formloadPrevNext("2")}
            >
              Quay Lại
            </button>
            <button
              type="button"
              className="btn btn-lg btn-warning my-4 mx-4"
              onClick={() => formloadPrevNext("4")}
            >
              Tiếp Theo
            </button>
          </div>
        </div>
      )}
      {/*--------------------- formload ===3 --------------------*/}
      {/*--------------------- formload ===4 --------------------*/}
      {formload === "4" && (
        <div className="pushToData text-center">
          <h1>Nhập mã xác nhận tiến hành mua hàng</h1>
          <input
            type="text"
            name="maXacNhan"
            onChange={(e) => {
              setMaXacNhan(e.target.value);
            }}
          />
          <div>
            {maXacNhan === "11112222" ? (
              <div>
                <p>mã xác nhận hợp lệ có thể thanh toán mua hàng</p>
                <button
                  type="button"
                  className="btn btn-lg btn-primary my-4 mx-4"
                  onClick={() => formloadPrevNext("3")}
                >
                  Quay Lại
                </button>
                <button
                  className="btn btn-danger btn-lg"
                  onClick={() => {
                    xacNhanMuaHang();
                  }}
                >
                  xác nhận mua hàng
                </button>
              </div>
            ) : (
              <div>
                <p>mã xác nhận hợp lệ vui lòng kiểm tra lại</p>
                <button
                  type="button"
                  className="btn btn-lg btn-primary my-4 mx-4"
                  onClick={() => formloadPrevNext("3")}
                >
                  Quay Lại
                </button>
                <button className="btn btn-danger btn-lg" disabled="disabled">
                  xác nhận mua hàng
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/*--------------------- formload ===4 --------------------*/}
      <div
        className="bg-warning text-center py-4"
        style={{ fontSize: "3rem", fontWeight: "bolder" }}
      >
        --- Bước {formload} ---
      </div>
      <p style={{ display: "none" }}>{user.name}</p>
    </Fragment>
  );
}

export default CartShop;

// useEffect(()=>{
//   return ()=>{
//   }
// },[])

// useEffect(()=>{
//   return ()=>{
//   }
// },[dieu kien render lai])
