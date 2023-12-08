import { ProductType } from "../types/ProductType";

export const arrayRemove = (arr: ProductType[], value: ProductType) => {
  return arr.filter((item: ProductType) => {
    return item.id != value.id;
  });
};