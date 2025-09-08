import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/",
});
export const getProductData = () => {
  return api.get("/products/category/smartphones");
};

export const getSingleProduct = (id) => {
  return axios.get(`https://dummyjson.com/products/${id}`);
};
