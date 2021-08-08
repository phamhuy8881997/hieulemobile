import * as typess from "../constant/index";
let intinial = [];
const banner = (state = intinial, action) => {
  let { type } = action;
  switch (type) {
    case typess.GET_BANNER:
      let { banner } = action;
      state = [...banner];
      return [...state];
    case typess.PUT_BANNER:
      return [...state];
    default:
      return [...state];
  }
};
export default banner;
