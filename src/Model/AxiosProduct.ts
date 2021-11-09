import axios, { AxiosInstance } from "axios";

const AxiosProduct: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000/product",
});

export default AxiosProduct;
