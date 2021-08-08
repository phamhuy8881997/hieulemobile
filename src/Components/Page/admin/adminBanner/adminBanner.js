import React, { Component } from "react";
import "./adminBanner.scss";
import * as action from "../../../../Redux/action/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

class AdminBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabform: "1",
      CarouselId: "xxxxxxxxxxxxxxxxxxxxxxx",
      CarouselImg: "",
      CarouselText: "",
      CarouselToLink: "",
      CarouselTextLink: "",
      NewsId: "xxxxxxxxxxxxxxxxxxxxxxx",
      NewsImg0: "",
      NewsImg1: "",
      NewsImg2: "",
      NewsImg3: "",
      NewsImg4: "",
      NewsImg5: "",
      NewsText0: "",
      NewsText1: "",
      NewsText2: "",
      NewsText3: "",
      NewsText4: "",
      NewsText5: "",
      NewsToLink: "",
      NewsTextLink: "",
      BannerId: "xxxxxxxxxxxxxxxxxxxxxxx",
      BannerImg: "",
      BannerToLink: "",
      BannerTextLink: "",
    };
  }
  componentDidMount() {
    this.props.get_carousel();
    this.props.get_news();
    this.props.get_banner();
  }
  tabform = (id) => {
    this.setState({ tabform: id });
  };
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  //======================CAROUSEL====================
  showTabCarousel = () => {
    let {
      CarouselId,
      CarouselImg,
      CarouselText,
      CarouselToLink,
      CarouselTextLink,
    } = this.state;
    return (
      <div className="showTabCarousel">
        <h1>ADMIN Quảng Cáo</h1>
        <div className="table__carousel">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Cập Nhật</th>
                <th>ID</th>
                <th>Image</th>
                <th>Text</th>
                <th>ToLink</th>
                <th>TextLink</th>
              </tr>
            </thead>
            <tbody>{this.showItemCarousel()}</tbody>
          </table>
        </div>
        <hr />
        <div className="carousel__admin">
          <div className="alert alert-warning">{CarouselId}</div>
          <div>
            <p>Hình Ảnh </p>
            <input
              type="text"
              name="CarouselImg"
              value={CarouselImg}
              onChange={this.handleChange}
            />
            <p>Thông Tin</p>
            <input
              type="text"
              name="CarouselText"
              value={CarouselText}
              onChange={this.handleChange}
            />
            <p>Link Sản Phẩm</p>
            <input
              type="text"
              name="CarouselToLink"
              value={CarouselToLink}
              onChange={this.handleChange}
            />
            <p>Thông Tin Link</p>
            <input
              type="text"
              name="CarouselTextLink"
              value={CarouselTextLink}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning btn-lg m-4"
              onClick={() => {
                this.updateCarousel();
              }}
            >
              Cập Nhật
            </button>
            <button
              type="reset"
              className="btn btn-danger btn-lg m-4"
              onClick={() => {
                this.resetCarousel();
              }}
            >
              Làm Mới
            </button>
          </div>
        </div>
      </div>
    );
  };
  showItemCarousel = () => {
    let { carousel } = this.props;
    let resule = "";
    resule = carousel?.map((item, i) => {
      return (
        <tr key={`azsa${i}`}>
          <td>{i + 1}</td>
          <td>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => {
                this.getdata1(item);
              }}
            >
              Cập-Nhật
            </button>
          </td>
          <td>{item._id}</td>
          <td>{item.img.slice(0, 15)}...</td>
          <td>{item.text.slice(0, 15)}...</td>
          <td>
            <Link to={item.toLink}>{item.toLink.slice(0, 20)}...</Link>
          </td>
          <td>{item.textLink.slice(0, 15)}...</td>
        </tr>
      );
    });
    return resule;
  };
  getdata1 = (item) => {
    this.setState({
      CarouselId: item._id,
      CarouselImg: item.img,
      CarouselText: item.text,
      CarouselToLink: item.toLink,
      CarouselTextLink: item.textLink,
    });
    toast.info(`🦝 lấy thông tin thành công `, {
      position: "bottom-left",
      autoClose: 2500,
    });
  };
  resetCarousel = () => {
    this.setState({
      CarouselId: "xxxxxxxxxxxxxxxxxxxxxxx",
      CarouselImg: "",
      CarouselText: "",
      CarouselToLink: "",
      CarouselTextLink: "",
    });
  };
  updateCarousel = () => {
    let { CarouselId } = this.state;
    let data = {
      img: this.state.CarouselImg,
      text: this.state.CarouselText,
      toLink: this.state.CarouselToLink,
      textLink: this.state.CarouselTextLink,
    };

    if (window.confirm("bạn muốn cập nhật dữ liệu ?")) {
      this.props.put_carousel(CarouselId, data);
      toast.error(`🦝 cập nhật thông tin thành công `, {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };
  //======================NEW=========================
  showTabNews = () => {
    let {
      NewsId,
      NewsImg0,
      NewsImg1,
      NewsImg2,
      NewsImg3,
      NewsImg4,
      NewsImg5,
      NewsText0,
      NewsText1,
      NewsText2,
      NewsText3,
      NewsText4,
      NewsText5,
      NewsToLink,
      NewsTextLink,
    } = this.state;
    return (
      <div className="showTabNews">
        <h1>ADMIN Tin Tức</h1>
        <div className="table__carousel">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Cập Nhật</th>
                <th>ID</th>
                <th>Image</th>
                <th>Text</th>
                <th>ToLink</th>
                <th>TextLink</th>
              </tr>
            </thead>
            <tbody>{this.showItemNews()}</tbody>
          </table>
        </div>
        <hr />
        <div className="news__admin">
          <div className="alert alert-success">ID--- {NewsId} ---ID</div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <p>Hình Ảnh 1</p>
              <input
                type="text"
                name="NewsImg0"
                value={NewsImg0}
                onChange={this.handleChange}
              />
              <p>Hình Ảnh 2</p>
              <input
                type="text"
                name="NewsImg1"
                value={NewsImg1}
                onChange={this.handleChange}
              />
              <p>Hình Ảnh 3</p>
              <input
                type="text"
                name="NewsImg2"
                value={NewsImg2}
                onChange={this.handleChange}
              />
              <p>Hình Ảnh 4</p>
              <input
                type="text"
                name="NewsImg3"
                value={NewsImg3}
                onChange={this.handleChange}
              />
              <p>Hình Ảnh 5</p>
              <input
                type="text"
                name="NewsImg4"
                value={NewsImg4}
                onChange={this.handleChange}
              />
              <p>Hình Ảnh 6</p>
              <input
                type="text"
                name="NewsImg5"
                value={NewsImg5}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <p>Text 1</p>
              <input
                type="text"
                name="NewsText0"
                value={NewsText0}
                onChange={this.handleChange}
              />
              <p>Text 2</p>
              <input
                type="text"
                name="NewsText1"
                value={NewsText1}
                onChange={this.handleChange}
              />
              <p>Text 3</p>
              <input
                type="text"
                name="NewsText2"
                value={NewsText2}
                onChange={this.handleChange}
              />
              <p>Text 4</p>
              <input
                type="text"
                name="NewsText3"
                value={NewsText3}
                onChange={this.handleChange}
              />
              <p>Text 5</p>
              <input
                type="text"
                name="NewsText4"
                value={NewsText4}
                onChange={this.handleChange}
              />
              <p>Text 6</p>
              <input
                type="text"
                name="NewsText5"
                value={NewsText5}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <p>Link Sản Phẩm</p>
              <input
                type="text"
                name="NewsToLink"
                value={NewsToLink}
                onChange={this.handleChange}
              />
              <p>Thông Tin Link</p>
              <input
                type="text"
                name="NewsTextLink"
                value={NewsTextLink}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning btn-lg m-4"
              onClick={() => {
                this.updateNews();
              }}
            >
              Cập Nhật
            </button>
            <button
              type="reset"
              className="btn btn-danger btn-lg m-4"
              onClick={() => {
                this.resetNews();
              }}
            >
              Làm Mới
            </button>
          </div>
        </div>
      </div>
    );
  };
  showItemNews = () => {
    let { news } = this.props;
    let resule = "";
    resule = news?.map((item, i) => {
      return (
        <tr key={`azxx${i}`}>
          <td>{i + 1}</td>
          <td>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => {
                this.getdata2(item);
              }}
            >
              Cập-Nhật
            </button>
          </td>
          <td>{item._id}</td>
          <td>
            <ul>
              <li>{item.img[0].slice(0, 15)}...</li>
              <li>{item.img[1].slice(0, 15)}...</li>
              <li>{item.img[2].slice(0, 15)}...</li>
              <li>{item.img[3].slice(0, 15)}...</li>
              <li>{item.img[4].slice(0, 15)}...</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>{item.text[0].slice(0, 15)}...</li>
              <li>{item.text[1].slice(0, 15)}...</li>
              <li>{item.text[2].slice(0, 15)}...</li>
              <li>{item.text[3].slice(0, 15)}...</li>
              <li>{item.text[4].slice(0, 15)}...</li>
              <li>{item.text[5].slice(0, 15)}...</li>
            </ul>
          </td>
          <td>
            <Link to={item.toLink}>{item.toLink.slice(0, 20)}...</Link>
          </td>
          <td>{item.textLink.slice(0, 15)}...</td>
        </tr>
      );
    });
    return resule;
  };
  getdata2 = (item) => {
    this.setState({
      NewsId: item._id,
      NewsImg0: item.img[0],
      NewsImg1: item.img[1],
      NewsImg2: item.img[2],
      NewsImg3: item.img[3],
      NewsImg4: item.img[4],
      NewsImg5: item.img[5],
      NewsText0: item.text[0],
      NewsText1: item.text[1],
      NewsText2: item.text[2],
      NewsText3: item.text[3],
      NewsText4: item.text[4],
      NewsText5: item.text[5],
      NewsToLink: item.toLink,
      NewsTextLink: item.textLink,
    });
    toast.info(`🦝 lấy dữ liệu thành công `, {
      position: "bottom-left",
      autoClose: 2500,
    });
  };
  resetNews = () => {
    this.setState({
      NewsId: "xxxxxxxxxxxxxxxxxxxxxxx",
      NewsImg0: "",
      NewsImg1: "",
      NewsImg2: "",
      NewsImg3: "",
      NewsImg4: "",
      NewsImg5: "",
      NewsText0: "",
      NewsText1: "",
      NewsText2: "",
      NewsText3: "",
      NewsText4: "",
      NewsText5: "",
      NewsToLink: "",
      NewsTextLink: "",
    });
  };
  updateNews = () => {
    let data = {
      img: [
        this.state.NewsImg0,
        this.state.NewsImg1,
        this.state.NewsImg2,
        this.state.NewsImg3,
        this.state.NewsImg4,
        this.state.NewsImg5,
      ],
      text: [
        this.state.NewsText0,
        this.state.NewsText1,
        this.state.NewsText2,
        this.state.NewsText3,
        this.state.NewsText4,
        this.state.NewsText5,
      ],
      toLink: this.state.NewsToLink,
      textLink: this.state.NewsTextLink,
    };
    if (window.confirm("bạn muốn cập nhật tin tức ?")) {
      this.props.put_news(this.state.NewsId, data);
      toast.error(`🦝 cập nhật thông tin thành công `, {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };
  //======================BANNER======================
  showTabBanner = () => {
    let { BannerId, BannerImg, BannerToLink, BannerTextLink } = this.state;
    return (
      <div className="showTabBanner">
        <h1>ADMIN Banner</h1>
        <div className="showTabBanner__content">{this.showBannerItem()}</div>
        <div className="banner__admin">
          <div className="alert alert-danger">ID--- {BannerId} ---ID</div>
          <div>
            <p>Hình Ảnh </p>
            <input
              type="text"
              name="BannerImg"
              value={BannerImg}
              onChange={this.handleChange}
            />
            <p>Link Sản Phẩm</p>
            <input
              type="text"
              name="BannerToLink"
              value={BannerToLink}
              onChange={this.handleChange}
            />
            <p>Thông Tin Link</p>
            <input
              type="text"
              name="BannerTextLink"
              value={BannerTextLink}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => {
                this.updateBanner();
              }}
            >
              Cập Nhật
            </button>
          </div>
        </div>
      </div>
    );
  };
  showBannerItem = () => {
    let { banner } = this.props;
    let resule = "";
    resule = banner?.map((item, i) => {
      return (
        <div key={`axcsa${i}`}>
          <div className="showTabBanner__content---img">
            <img src={item.img} alt={item.img} />
          </div>
          <div>
            <div>
              <Link className="btn btn-danger btn-lg my-3" to={item.toLink}>
                {item.toLink}
              </Link>
            </div>
            <p>textLink: {item.textLink}</p>
            <button
              className="btn btn-info btn-lg my-3"
              onClick={() => {
                this.getData3(item);
              }}
            >
              Lấy Dữ Liệu
            </button>
          </div>
        </div>
      );
    });
    return resule;
  };
  getData3 = (item) => {
    this.setState({
      BannerId: item._id,
      BannerImg: item.img,
      BannerToLink: item.toLink,
      BannerTextLink: item.textLink,
    });
  };
  updateBanner = () => {
    let data = {
      img: this.state.BannerImg,
      toLink: this.state.BannerToLink,
      textLink: this.state.BannerTextLink,
    };
    if (window.confirm("bạn muốn cập nhật ?")) {
      this.props.put_banner(this.state.BannerId, data);
      toast.error(`🦝 cập nhật thông tin thành công `, {
        position: "top-center",
        autoClose: 2500,
      });
    }
  };
  //======================RENDER======================
  render() {
    //console.log(this.state);
    return (
      <section className="adminSection__banner">
        <div className="group__btn--admin">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              this.tabform("1");
            }}
          >
            Quảng Cáo
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.tabform("2");
            }}
          >
            Tin Tức
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              this.tabform("3");
            }}
          >
            Banner
          </button>
        </div>
        {this.state.tabform === "1" && this.showTabCarousel()}
        {this.state.tabform === "2" && this.showTabNews()}
        {this.state.tabform === "3" && this.showTabBanner()}
      </section>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    carousel: state.carousel,
    news: state.news,
    banner: state.banner,
  };
};
const mapDispathToProps = (dispath, props) => {
  return {
    get_carousel: () => {
      dispath(action.get_carousel_api());
    },
    put_carousel: (id, data) => {
      dispath(action.put_carousel_api(id, data));
    },
    get_news: () => {
      dispath(action.get_news_api());
    },
    put_news: (id, data) => {
      dispath(action.put_news_api(id, data));
    },
    get_banner: () => {
      dispath(action.get_banner_api());
    },
    put_banner: (id, data) => {
      dispath(action.put_banner_api(id, data));
    },
  };
};
export default connect(mapStateToProp, mapDispathToProps)(AdminBanner);
