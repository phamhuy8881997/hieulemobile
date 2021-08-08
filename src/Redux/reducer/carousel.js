import * as typess from "../constant/index";
let intinial = [];
const carousel = (state = intinial, action) => {
  let { type } = action;
  switch (type) {
    case typess.GET_CAROUSEL:
      let { carousel } = action;
      state = [...carousel];
      return [...state];
    case typess.PUT_CAROUSEL:
      let { id, data } = action;
      let index = state.findIndex((item) => item._id === id);
      let datatemp = {
        _id: id,
        img: data.img,
        text: data.text,
        toLink: data.toLink,
        textLink: data.textLink,
        __v: 0,
      };
      if (index !== -1) {
        state.splice(index, 1, datatemp);
      }
      return [...state];
    default:
      return [...state];
  }
};
export default carousel;
