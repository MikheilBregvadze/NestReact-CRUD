import { createContext, useCallback, useContext, useReducer } from "react";
import productReducer, { initialState } from "./reducers/product.reducer";

const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = useCallback((products) => {
    dispatch({
      type: "GET_ALL_PRODUCT",
      payload: {
        products: products
      }
    })
  }, []);

  const value = {
    total: state.total,
    products: state.products,
    getProducts
  }
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) throw new Error("useProduct must be used within Products Context");

  return context;
}

export default useProduct;