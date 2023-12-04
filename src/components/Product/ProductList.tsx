import React, { useState } from "react";
import { ProductType } from "../../types/ProductType";
import ProductFiltered from "./ProductFiltered";

interface ProductListProps {
  listName: string;
  data: ProductType[];
  productCategory: string;
}

const ProductList = ({ listName, data, productCategory }: ProductListProps) => {
  const filterByPriceAscending = (data: ProductType[]) => {
    return data.sort((itemA: ProductType, itemB: ProductType) => {
      return itemA.price - itemB.price;
    });
  };

  const filterByPriceDescending = (data: ProductType[]) => {
    return data.sort((itemA: ProductType, itemB: ProductType) => {
      return itemB.price - itemA.price;
    });
  };

  const filterByCategory = (data: ProductType[]) => {
    return data.filter((product) => {
      return product.category == productCategory;
    });
  }
  
  const [productList, setProductList] = useState<ProductType[]>(filterByCategory(data));
  const [selectSort, setSelectSort] = useState("priceLowToHigh");
  

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mode = e.target.value;
    setSelectSort(mode);
    if (mode == "priceHighToLow") {
      setProductList(filterByPriceDescending(productList));
    } else if (mode == "priceLowToHigh") {
      setProductList(filterByPriceAscending(productList));
    }
  };
  
  return (
    <>
      <div className="flex justify-between items-center my-8">
        <div>
          <h2 className="font-Inter font-semibold text-2xl">
            {listName} Products
          </h2>
        </div>
        <div className="flex items-center">
          <p className="font-Inter font-semibold text-base">
            SHOWING 8 of PRODUCT_LENGTH
          </p>
          <button
            className="bg-secondary text-white"
          >
            Free Shipping
          </button>
          <select onChange={onChangeHandler} id="" defaultValue={selectSort}>
            <option value="priceLowToHigh">Price : Low to High</option>
            <option value="priceHighToLow">Price : High to Low</option>
          </select>
        </div>
      </div>
      {/* Product Filter Output */}
      <div className="w-full h-[492px] product-grid">
        <ProductFiltered data={productList} />
      </div>
    </>
  );
};

export default ProductList;