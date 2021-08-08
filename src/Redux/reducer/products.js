import * as typess from "../constant/index";

let intinial = [];
const products = (state = intinial, action) => {
  switch (action.type) {
    // --------get-api---------
    case typess.GET_API:
      state = action.products;
      return [...state];
    // --------post-api--------
    case typess.POST_API:
      return [...state, action.product];
    // --------put-api---------
    case typess.PUT_API:
      let { product } = action;
      let index = state.findIndex((item) => item._id === product._id);
      if (index !== -1) {
        state.splice(index, 1, product);
      }
      return [...state];
    // --------delete-api---------
    case typess.DELETE_API:
      const id = action.id;
      console.log("id", id);
      let state1 = state.filter((item) => item._id !== id);
      return [...state1];
    default:
      return [...state];
  }
};
export default products;
