import axios from "axios";
import { GetBaseUrl } from "./common";

export function GetAllProducts() {
  return axios.get(GetBaseUrl() + '/product');
}

export function GetProductById(id) {
  return axios.get(GetBaseUrl() + `/product/${id}`);
}
