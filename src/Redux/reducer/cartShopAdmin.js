import * as typess from "../constant/index";
let intinial = [];
const cartShopAdmin = (state = intinial, action) => {
  const { type } = action;
  switch (type) {
    case typess.GET_CART:
      let { dataCart } = action;
      state = [...dataCart];
      return [...state];
    case typess.PUT_CART:
      let { id, data } = action;
      let index = state.findIndex((item) => item._id === id);
      let dataTemp = { _id: id, data: data.data, __v: 0 };
      if (index !== -1) {
        state.splice(index, 1, dataTemp);
      }
      return [...state];
    case typess.DELETE_CART:
      let id1 = action.id;
      let state1 = state.filter((item) => item._id !== id1);
      state = state1;
      return [...state];
    default:
      return [...state];
  }
};
export default cartShopAdmin;
