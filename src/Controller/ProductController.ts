import AxiosProduct from "../Model/AxiosProduct";

export const fetchAllProducts = async () => {
  return await AxiosProduct.get("/");
};
