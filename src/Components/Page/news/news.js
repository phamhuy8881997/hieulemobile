import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";
import { Link } from "react-router-dom";
import "./news.scss";
import Product1 from "../../Main/main_product_1/product_1";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.get_news();
    let match = this.props.match;
    let id = match.params.id;
    this.setState({ id: id });
  }
  showNews = (id) => {
    let { news } = this.props;
    let resule = "";
    let arrtemp = news?.filter((item) => item._id === id);
    resule = arrtemp?.map((item, i) => {
      return (
        <div className="news__content" key={`newsasz${i}`}>
          <h3>{item.text[0]}</h3>
          <img src={item.img[0]} alt={item.img[0]} />
          <p>{item.text[1]}</p>
          <img src={item.img[1]} alt={item.img[1]} />
          <p>{item.text[2]}</p>
          <img src={item.img[2]} alt={item.img[2]} />
          <p>{item.text[3]}</p>
          <img src={item.img[3]} alt={item.img[3]} />
          <p>{item.text[4]}</p>
          <img src={item.img[4]} alt={item.img[4]} />
          <p>{item.text[5]}</p>
          <div className="text-center">
            <Link className="btn btn-info tolink" to={item.toLink}>
              Mua Ngay
            </Link>
          </div>
        </div>
      );
    });
    return resule;
  };
  goback = () => {
    let history = this.props.history;
    history.push("/");
  };
  render() {
    let { id } = this.state;
    return (
      <div>
        <div className="news__header">
          <h1>Bảng Tin</h1>
        </div>
        <div className="text-center">
          <button
            className="btn btn-danger btn-lg"
            onClick={() => {
              this.goback();
            }}
          >
            Thoát
          </button>
        </div>
        <div className="css__news">{this.showNews(id)}</div>
        <div className="news__header">
          <h1>Sản Phẩm Bạn Có Thể Thích</h1>
        </div>
        <div>
          <Product1 productList={this.state.ArrProduct[0]} />
        </div>
        <div>
          <Product1 productList={this.state.ArrProduct[1]} />
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    news: state.news,
  };
};
const mapDispathToProps = (dispath, props) => {
  return {
    get_news: () => {
      dispath(action.get_news_api());
    },
  };
};
export default connect(mapStateToProp, mapDispathToProps)(News);
