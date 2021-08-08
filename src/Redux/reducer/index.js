import { combineReducers } from "redux";

import products from "./products";
import AddToCart from "./AddToCart";
import cartShopAdmin from "./cartShopAdmin";
import carousel from "./carousel";
import news from "./news";
import banner from "./banner";

var myReducer = combineReducers({
  products: products,
  AddToCart: AddToCart,
  cartShopAdmin: cartShopAdmin,
  carousel: carousel,
  news: news,
  banner: banner,
});
export default myReducer;
