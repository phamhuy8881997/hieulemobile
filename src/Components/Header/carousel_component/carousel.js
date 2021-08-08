import React, { Component, Fragment } from "react";
import "./carousel.scss";
import * as action from "../../../Redux/action/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.get_carousel();
    this.props.get_news();
  }
  showCarouselActive = () => {
    let { carousel } = this.props;
    let resule = "";
    resule = carousel?.slice(0, 1).map((item, i) => {
      return (
        <div className="carousel-item active" key={`carousel${i}`}>
          <img src={item.img} alt={item.img} />
          <div className="carousel-caption">
            <h5>{item.text}</h5>
            <p>{item.textLink}</p>
            <div>
              <Link
                type="button"
                className="btn btn-warning btn-lg btn__toLink"
                to={item.toLink}
              >
                Mua Ngay
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return resule;
  };
  showCarousel = () => {
    let { carousel } = this.props;
    let resule = "";
    resule = carousel?.slice(1).map((item, i) => {
      return (
        <div className="carousel-item" key={`carousel${i}`}>
          <img src={item.img} alt={item.img} />
          <div className="carousel-caption">
            <h5>{item.text}</h5>
            <p>{item.textLink}</p>
            <div className="aaa">
              <Link
                type="button"
                className="btn btn-warning btn-lg btn__toLink"
                to={item.toLink}
              >
                Mua Ngay
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return resule;
  };
  showSlideCarousel = () => {
    let { carousel } = this.props;
    let resule = "";
    resule = carousel.slice(1).map((item, i) => {
      return (
        <li
          data-target="#CarouselLeft"
          data-slide-to={i + 1}
          key={`zzaz${i}`}
        ></li>
      );
    });
    return resule;
  };
  showNewsActive = () => {
    let { news } = this.props;
    let resule = "";
    resule = news?.slice(0, 1).map((item, i) => {
      return (
        <div className="carousel-item active" key={`news${i}`}>
          <img src={item.img[0]} alt={item.img[0]} />
          <div className="carousel-caption">
            <p>{item.textLink}</p>
            <div>
              <Link
                type="button"
                className="btn btn-warning btn-lg btn__toLink"
                to={`/news/${item._id}/news`}
              >
                Xem Thêm...
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return resule;
  };
  showNews = () => {
    let { news } = this.props;
    let resule = "";
    resule = news?.slice(1).map((item, i) => {
      return (
        <div className="carousel-item" key={`news${i}`}>
          <img src={item.img[0]} alt={item.img[0]} />
          <div className="carousel-caption">
            <p>{item.textLink}</p>
            <div>
              <Link
                type="button"
                className="btn btn-info btn-lg btn__toLink"
                to={`/news/${item._id}/news`}
              >
                Xem Thêm...
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return resule;
  };
  showSlideNews = () => {
    let { news } = this.props;
    let resule = "";
    resule = news.slice(1).map((item, i) => {
      return (
        <li
          data-target="#myCarousel-banner"
          data-slide-to={i + 1}
          key={`zzazq${i}`}
        ></li>
      );
    });
    return resule;
  };
  render() {
    return (
      <Fragment>
        <section className="My__Carousel">
          <div className="container-fluid">
            <div className="row Carousel_content">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                <div
                  id="CarouselLeft"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#CarouselLeft"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    {this.showSlideCarousel()}
                  </ol>
                  <div className="carousel-inner">
                    {this.showCarouselActive()}
                    {this.showCarousel()}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#CarouselLeft"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#CarouselLeft"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  id="myCarousel-banner"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel-banner"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    {this.showSlideNews()}
                  </ol>
                  <div className="carousel-inner">
                    {this.showNewsActive()}
                    {this.showNews()}
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel-banner"
                    role="button"
                    data-slide="prev"
                  >
                    <span>
                      <i className="fa fa-angle-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel-banner"
                    role="button"
                    data-slide="next"
                  >
                    <span>
                      <i className="fa fa-angle-right"></i>
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    carousel: state.carousel,
    news: state.news,
  };
};
const mapDispathToProps = (dispath, props) => {
  return {
    get_carousel: () => {
      dispath(action.get_carousel_api());
    },
    get_news: () => {
      dispath(action.get_news_api());
    },
  };
};
export default connect(mapStateToProp, mapDispathToProps)(Carousel);
