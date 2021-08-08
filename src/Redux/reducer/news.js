import * as typess from "../constant/index";
let intinial = [];
const news = (state = intinial, action) => {
  let { type } = action;
  switch (type) {
    case typess.GET_NEWS:
      let { news } = action;
      state = [...news];
      return [...state];
    case typess.PUT_NEWS:
      let { id, data } = action;
      let index = state.findIndex((item) => item._id === id);
      let dataTemp = {
        _id: id,
        img: data.img,
        text: data.text,
        toLink: data.toLink,
        textLink: data.textLink,
        __v0: 0,
      };
      if (index !== -1) {
        state.splice(index, 1, dataTemp);
      }
      return [...state];
    default:
      return [...state];
  }
};
export default news;
