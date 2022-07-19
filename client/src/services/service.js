import axios from "axios";
import { GetBaseUrl } from "./common";

export function GetAllProducts() {
  return axios.get(GetBaseUrl() + '/product');
}