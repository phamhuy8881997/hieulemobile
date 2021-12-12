import * as typess from "../constant/index";
import callapi from "../../API/API";

// =======================GET-API=============================
export const get_api = () => {
  return (dispath, props) => {
    callapi("api", "GET", null).then((res) => {
      dispath(get_products_api(res.data));
    });
  };
};
export const get_products_api = (products) => {
  return {
    type: typess.GET_API,
    products: products,
  };
};
// =======================GET-API=============================
// =======================POST-API============================
export const post_api = (data) => {
  return (dispath, props) => {
    callapi("api", "POST", data).then((res) => {
      dispath(post_products_api(res.data));
    });
  };
};
export const post_products_api = (product) => {
  return {
    type: typess.POST_API,
    product: product,
  };
};
// =======================POST-API============================
// =======================PUT-API=============================
export const put_api = (data, id) => {
  return (dispath, props) => {
    callapi(`api/${id}`, "PUT", data).then((res) => {
      dispath(put_products_api({ ...data, _id: id }));
    });
  };
};
export const put_products_api = (product) => {
  return {
    type: typess.PUT_API,
    product: product,
  };
};
// =======================PUT-API=============================
// =======================DELETE-API==========================
export const delete_api = (id) => {
  return (dispath, props) => {
    callapi(`api/${id}`, "DELETE", null).then((res) => {
      dispath(delete_products_api(id));
    });
  };
};
export const delete_products_api = (id) => {
  return {
    type: typess.DELETE_API,
    id: id,
  };
};
// =======================DELETE-API==========================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// -----------------Gio-hàng----------------------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// =======================ADD-TO-CART=========================
export const add_to_cart = (product) => {
  return {
    type: typess.ADD_CART,
    product: product,
  };
};
// =======================ADD-TO-CART=========================
// =======================DELETE-TO-CART======================
export const delete_cart_id = (id) => {
  return {
    type: typess.DELETE_CART_ID,
    id: id,
  };
};
// =======================DELETE-TO-CART=======================
// =====================DELETE-CART-ALL========================
export const delete_cart_all = () => {
  return {
    type: typess.DELETE_CART_ALL,
  };
};
// =====================DELETE-CART-ALL========================
// =====================Counter-product========================
export const counter_amount = (id, count) => {
  return {
    type: typess.COUNTER_CART,
    id: id,
    count: count,
  };
};
// =====================Counter-product========================
// =====================GET-CART-LOCALSTORE====================
// export const get_cart_localStore = () => {
//   let data = JSON.parse(localStorage.getItem("CartShopHieuMobile"));
//   let data1 = [...data];
//   return {
//     type: typess.GET_CART_TO_LOCALSTORE,
//     data: data1,
//   };
// };
// =====================GET-CART-LOCALSTORE====================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//-----------------------mua-hàng------------------------------
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//======================GET-DATA-CART-API======================
export const get_data_cart_api = () => {
  return (dispath, props) => {
    callapi("Cart", "GET", null).then((res) => {
      dispath(get_data_cart(res.data));
    });
  };
};
export const get_data_cart = (dataCart) => {
  return {
    type: typess.GET_CART,
    dataCart: dataCart,
  };
};
//======================GET-DATA-CART-API======================
//======================POST-DATA-CART-API=====================
export const post_data_cart_api = (data) => {
  return (dispath, props) => {
    callapi("Cart", "POST", data).then((res) => {
      dispath(post_data_cart(res.data));
    });
  };
};
export const post_data_cart = (data) => {
  return {
    type: typess.POST_CART,
    data: data,
  };
};
//======================POST-DATA-CART-API=====================
//======================PUT-DATA-CART-API======================
export const put_data_cart_api = (id, data) => {
  return (dispath, props) => {
    callapi(`Cart/${id}`, "PUT", data).then((res) => {
      dispath(put_data_cart(id, data));
    });
  };
};
export const put_data_cart = (id, data) => {
  return {
    type: typess.PUT_CART,
    id: id,
    data: data,
  };
};
//======================PUT-DATA-CART-API======================
//======================DELETE-DATA-CART-API===================
export const delete_data_cart_api = (id) => {
  return (dispath, props) => {
    callapi(`Cart/${id}`, "DELETE", null).then((res) => {
      dispath(delete_data_cart(id));
    });
  };
};
export const delete_data_cart = (id) => {
  return {
    type: typess.DELETE_CART,
    id: id,
  };
};
//======================DELETE-DATA-CART-API===================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================GET-CAROUSEL============================
export const get_carousel_api = () => {
  return (dispath, props) => {
    callapi("carousel", "GET", null).then((res) => {
      dispath(get_carousel(res.data));
    });
  };
};
export const get_carousel = (carousel) => {
  return {
    type: typess.GET_CAROUSEL,
    carousel: carousel,
  };
};
//=====================GET-CAROUSEL============================
//=====================PUT-CAROUSEL============================
export const put_carousel_api = (id, data) => {
  return (dispath, props) => {
    callapi(`carousel/${id}`, "PUT", data).then((res) => {
      dispath(put_carousel(id, data));
    });
  };
};
export const put_carousel = (id, data) => {
  return {
    type: typess.PUT_CAROUSEL,
    id: id,
    data: data,
  };
};
//=====================PUT-CAROUSEL============================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================GET-NEWS================================
export const get_news_api = () => {
  return (dispath, props) => {
    callapi("news", "GET", null).then((res) => {
      dispath(get_news(res.data));
    });
  };
};
export const get_news = (news) => {
  return {
    type: typess.GET_NEWS,
    news: news,
  };
};
//=====================GET-NEWS================================
//=====================PUT-NEWS================================
export const put_news_api = (id, data) => {
  return (dispath, props) => {
    callapi(`news/${id}`, "PUT", data).then((res) => {
      dispath(put_news(id, data));
    });
  };
};
export const put_news = (id, data) => {
  return {
    type: typess.PUT_NEWS,
    id: id,
    data: data,
  };
};
//=====================PUT-NEWS================================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================GET-BANNER==============================
export const get_banner_api = () => {
  return (dispath, props) => {
    callapi("banner", "GET", null).then((res) => {
      dispath(get_banner(res.data));
    });
  };
};
export const get_banner = (banner) => {
  return {
    type: typess.GET_BANNER,
    banner: banner,
  };
};
//=====================GET-BANNER==============================
//=====================PUT-BANNER==============================
export const put_banner_api = (id, data) => {
  return (dispath, props) => {
    callapi(`banner/${id}`, "PUT", data).then((res) => {
      dispath(put_banner(id, data));
    });
  };
};
export const put_banner = (id, data) => {
  return {
    type: typess.PUT_BANNER,
    id: id,
    data: data,
  };
};
//=====================PUT-BANNER==============================
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
