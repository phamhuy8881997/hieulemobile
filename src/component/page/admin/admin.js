import React, { Component } from "react";

import "./admin.scss";
import { toast } from "react-toastify";

//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "../../../Redux/action/index";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "ch瓢a c贸 th么ng tin id",
      name: "",
      img: "",
      price: "",
      imgConfig: "",
      descript: "",
      tagName: "",
      tagSearch: "",
      sale: "",
      video: "",
      status: "",
    };
  }
  // ====================================
  componentDidMount() {
    this.props.get_api();
    window.scrollTo(0, 0);
  }
  // ====================================
  handChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({ [name]: value });
  };
  // ====================================
  GetData = (product) => {
    this.setState({
      id: product._id,
      name: product.name,
      img: product.img,
      price: product.price,
      imgConfig: product.imgConfig,
      descript: product.descript,
      tagName: product.tagName,
      tagSearch: product.tagSearch,
      sale: product.sale,
      video: product.video,
      status: product.status,
    });
    toast.info(`馃 l岷 th么ng tin th脿nh c么ng `, {
      position: "bottom-left",
      autoClose: 2500,
    });
  };
  // ====================================
  DeleteApi = (id) => {
    if (window.confirm("b岷 c贸 mu峄憂 x贸a")) {
      this.props.delete_api(id);
      toast.error(`馃 x贸a s岷 ph岷﹎ th脿nh c么ng `, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  // ====================================
  clear = () => {
    this.setState({
      id: "ch瓢a c贸 th么ng tin id",
      name: "",
      img: "",
      price: "",
      imgConfig: "",
      descript: "",
      tagName: "",
      tagSearch: "",
      sale: "",
      video: "",
      status: "",
    });
    //window.location.reload();
  };
  // ====================================
  showTableAdmin = () => {
    let { products } = this.props;
    let resule = "";
    resule = products?.map((product, i) => {
      return (
        <tr key={`zqzq${i}`}>
          <td
            style={{
              backgroundColor: "rgb(25, 140, 255)",
              fontSize: "1.6rem",
              color: "#fff",
            }}
          >
            {i + 1}
          </td>
          <td>
            <button
              type="button"
              className="btn btn-primary mr-4"
              onClick={() => {
                this.GetData(product);
              }}
            >
              C岷璸 Nh岷璽
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.DeleteApi(product._id);
              }}
            >
              X贸a
            </button>
          </td>
          <td>{product._id}</td>
          <td>{product.name}</td>
          <td>
            {product.img.slice(0, 50)}
            <span>...</span>
          </td>
          <td>{product.price} VN膼</td>
          <td>
            {product.imgConfig.slice(0, 50)}
            <span>...</span>
          </td>
          <td>{product.descript.slice(0, 50)}...</td>
          <td>{product.tagName}</td>
          <td>{product.tagSearch}</td>
          <td>{product.sale}</td>
          <td>{product.video.slice(0, 30)}...</td>
          <td>{product.status}</td>
        </tr>
      );
    });
    return resule;
  };
  // ====================================
  PutApi = () => {
    let {
      id,
      name,
      img,
      price,
      imgConfig,
      descript,
      tagName,
      tagSearch,
      sale,
      video,
      status,
    } = this.state;
    let data = {
      name: name,
      img: img,
      price: price,
      imgConfig: imgConfig,
      descript: descript,
      tagName: tagName,
      tagSearch: tagSearch,
      sale: sale,
      video: video,
      status: status,
      imgSale: "1",
    };
    if (id === "ch瓢a c贸 th么ng tin id") {
      toast.error(`馃 ch瓢a c贸 id kh么ng th峄? x贸a `, {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      if (window.confirm("b岷 c贸 mu峄憂 c岷璸")) {
        this.props.put_api_to(data, id);
        toast.info(`馃 c岷璸 nh岷璽 th脿nh c么ng `, {
          position: "top-center",
          autoClose: 3000,
        });
      }
    }
  };
  // ====================================
  PostApi = () => {
    let {
      name,
      img,
      price,
      imgConfig,
      descript,
      tagName,
      tagSearch,
      sale,
      video,
      status,
    } = this.state;
    let data = {
      name: name,
      img: img,
      price: price,
      imgConfig: imgConfig,
      descript: descript,
      tagName: tagName,
      tagSearch: tagSearch,
      sale: sale,
      video: video,
      status: status,
      imgSale: "1",
    };
    if (
      (name === "",
      img === "",
      price === "",
      imgConfig === "",
      descript === "",
      tagName === "",
      tagSearch === "",
      sale === "",
      video === "",
      status === "")
    ) {
      toast.error(`馃 ph岷 th么ng tin s岷 ph岷﹎ 膽ang b峄? b峄? tr峄憂g!!`, {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      this.props.post_api(data);
      toast.info(`馃 th锚m s岷 ph岷﹎ th脿nh c么ng `, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  // ====================================
  // ===========RenDer===================
  render() {
    let {
      id,
      name,
      img,
      price,
      imgConfig,
      descript,
      tagName,
      tagSearch,
      sale,
      video,
      status,
    } = this.state;
    return (
      <div className="page__admin">
        <h1>Qu岷 L媒 S岷 Ph岷﹎ Admin</h1>
        <div className="admin__table" id="scrollAdmin">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th className="th-table">S峄璦-X贸a</th>
                <th className="th-table">ID S岷 Ph岷﹎</th>
                <th className="th-table">T锚n S岷 Ph岷﹎</th>
                <th className="th-table">H矛nh 岷h</th>
                <th className="th-table">Gi谩 B谩n</th>
                <th className="th-table">C岷 H矛nh</th>
                <th className="th-table">Th么ng Tin S岷 Ph岷﹎</th>
                <th className="th-table">TagName</th>
                <th className="th-table">TagSearch</th>
                <th className="th-table">SaleOff %</th>
                <th className="th-table">Video</th>
                <th className="th-table">Tr岷g Th谩i S岷 Ph岷﹎</th>
              </tr>
            </thead>
            <tbody>{this.showTableAdmin()}</tbody>
          </table>
        </div>
        <hr />
        <h1>C岷璸 Nh岷璽 Th么ng Tin</h1>
        <div className="admin__update">
          <div className="alert alert-danger mb-5" role="alert">
            {id}
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <span className="mb-2">S岷 Ph岷﹎</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="name"
                  value={name}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">h矛nh 岷h</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="img"
                  value={img}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">Gi谩 s岷 ph岷﹎</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="price"
                  value={price}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">c岷 h矛nh</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="imgConfig"
                  value={imgConfig}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">th么ng tin</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="descript"
                  value={descript}
                  onChange={this.handChange}
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="mb-3">
                <span className="mb-2">tagName</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="tagName"
                  value={tagName}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">tagSearch</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="tagSearch"
                  value={tagSearch}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">Sale</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="sale"
                  value={sale}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">video</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="video"
                  value={video}
                  onChange={this.handChange}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2">Status</span>
                <input
                  type="text"
                  className="form-control mb-5"
                  name="status"
                  value={status}
                  onChange={this.handChange}
                />
              </div>
            </div>
          </div>
          <div className="admin__button">
            <button
              type="button"
              className="btn btn-primary mx-5"
              onClick={() => {
                this.PutApi();
              }}
            >
              C岷璸 Nh岷璽
            </button>
            <button
              type="button"
              className="btn btn-danger mx-5"
              onClick={() => {
                this.clear();
              }}
            >
              L脿m M峄沬
            </button>
            <button
              type="button"
              className="btn btn-warning mx-5"
              onClick={() => {
                this.PostApi();
              }}
            >
              Th锚m M峄沬
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// ====================================
var mapStateToProp = (state) => {
  return {
    products: state.products,
  };
};
// ====================================
var mapDispathToProp = (dispath, props) => {
  return {
    get_api: () => {
      dispath(action.get_api());
    },
    post_api: (data) => {
      dispath(action.post_api(data));
    },
    put_api_to: (data, id) => {
      dispath(action.put_api(data, id));
    },
    delete_api: (id) => {
      dispath(action.delete_api(id));
    },
  };
};
// ====================================
export default connect(mapStateToProp, mapDispathToProp)(Admin);
