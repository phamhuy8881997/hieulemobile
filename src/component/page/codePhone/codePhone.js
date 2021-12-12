import React, { Component } from "react";
import firebase from "./firebaseCode";
import { toast } from "react-toastify";
import "./codePhone.scss";

class CodePhone extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "VN",
      }
    );
  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+84" + this.state.mobile;
    //console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        //console.log("Đã Gửi mã OPT");
        toast.info(`Đã Gửi mã OPT đến ${this.state.mobile} `, {
          position: "top-center",
          autoClose: 2500,
        });
        this.setState({ keyPhone: true });
        localStorage.setItem(
          "keyCartShop",
          JSON.stringify({ userPhone: "", buyCart: false })
        );
      })
      .catch((error) => {
        toast.error(`Không Thể Gửi Mã OPT đến ${this.state.mobile} `, {
          position: "top-center",
          autoClose: 2500,
        });
        this.setState({ keyPhone: false });
        localStorage.setItem(
          "keyCartShop",
          JSON.stringify({ userPhone: "", buyCart: false })
        );
      });
  };
  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    if (this.state.keyPhone && this.state.mobile) {
      //console.log(code);
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          localStorage.setItem(
            "keyCartShop",
            JSON.stringify({ userPhone: user, buyCart: true })
          );
          //console.log(JSON.stringify(user));
          toast.info(`Mã Xác Nhận Hợp Lệ `, {
            position: "top-center",
            autoClose: 2500,
          });
        })
        .catch((error) => {
          //alert("Mã Xác Nhận Không Hợp Lệ");
          toast.error(`Mã Xác Nhận Không Hợp Lệ `, {
            position: "top-center",
            autoClose: 2500,
          });
          localStorage.setItem(
            "keyCartShop",
            JSON.stringify({ userPhone: "", buyCart: false })
          );
        });
    } else {
      toast.error(`Chưa lấy mã OTP hoặc mã OTP không đúng `, {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };
  render() {
    return (
      <div className="text-center form__OTP">
        <h4>Nhập số điện thoại lấy mã OTP</h4>
        <form onSubmit={this.onSignInSubmit} className="form__OTP1">
          <div id="sign-in-button"></div>
          <input
            type="text"
            name="mobile"
            placeholder="nhập số điện thoại..."
            required
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-info btn-lg ml-3">
            Lấy mã OTP
          </button>
        </form>

        <h4>Nhập mã OTP để thanh toán</h4>
        <form onSubmit={this.onSubmitOTP} className="form__OTP1">
          <input
            type="text"
            name="otp"
            placeholder="nhập mã OTP..."
            required
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-warning btn-lg ml-3">
            Gửi Mã OTP
          </button>
        </form>
      </div>
    );
  }
}
export default CodePhone;
