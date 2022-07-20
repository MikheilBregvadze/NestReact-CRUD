export const initialState = {
  products: null,
  total: 0
}

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_PRODUCT":
      return {
        ...state,
        products: payload.products
      };
    default:
      return
  }
}

export default productReducer;