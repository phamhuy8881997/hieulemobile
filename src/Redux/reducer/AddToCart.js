import * as typess from "../constant/index";

let intinial = [];
const AddToCart = (state = intinial, action) => {
  if (JSON.parse(localStorage.getItem("CartShopHieuMobile"))) {
    var temp = JSON.parse(localStorage.getItem("CartShopHieuMobile"));
  } else {
    temp = [];
  }
  state = [...temp];
  switch (action.type) {
    case typess.ADD_CART:
      let { product } = action;
      let index = state.findIndex((item) => item._id === product._id);
      if (index === -1) {
        state = [...state, { ...product, amount: 1 }];
      } else {
        state[index].amount += 1;
      }
      localStorage.setItem("CartShopHieuMobile", JSON.stringify([...state]));
      return [...state];
    case typess.DELETE_CART_ID:
      let { id } = action;
      let state1 = state.filter((item) => item._id !== id);
      state = state1;
      //console.log(state);
      localStorage.setItem("CartShopHieuMobile", JSON.stringify([...state]));
      return [...state];
    case typess.DELETE_CART_ALL:
      let state2 = [];
      state = state2;
      localStorage.setItem("CartShopHieuMobile", JSON.stringify([...state]));
      return [...state];
    case typess.COUNTER_CART:
      let id_cart = action.id;
      let count = action.count;
      let index1 = state.findIndex((item) => item._id === id_cart);
      if (index1 !== -1 && count === "tang") {
        state[index1].amount += 1;
      } else if (index1 !== -1 && count === "giam") {
        if (state[index1].amount > 1) {
          state[index1].amount -= 1;
        }
      }
      localStorage.setItem("CartShopHieuMobile", JSON.stringify([...state]));
      return [...state];
    default:
      return [...state];
  }
};
export default AddToCart;
