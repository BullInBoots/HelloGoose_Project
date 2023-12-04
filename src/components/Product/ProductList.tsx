import React, { useEffect, useState } from "react";
import { ProductType } from "../../types/ProductType";
import ProductFiltered from "./ProductFiltered";

interface ProductListProps {
  listName: string;
  data: ProductType[];
  filterCategory: string;
}

const ProductList = ({ listName, data, filterCategory }: ProductListProps) => {
  
  const [productList, setProductList] = useState(data);
  
  useEffect(() => {
    console.log("hello");
  }, [productList]);
  
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

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mode = e.target.value;
    if (mode == "priceHighToLow") {
      setProductList(filterByPriceDescending(productList));
      console.log(mode);
      console.log(
        productList.map((product) => {
          return product;
        })
      );
    }
    if (mode == "priceLowToHigh") {
      setProductList(filterByPriceAscending(productList));
      console.log(mode);
      console.log(
        productList.map((product) => {
          return product;
        })
      );
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
            onClick={() => {
              setProductList(filterByPriceAscending(productList));
              console.log('button');
              console.log(productList);
            }}
            className="bg-secondary text-white"
          >
            Free Shipping
          </button>
          <select
            onChange={onChangeHandler}
            id=""
            defaultValue="priceLowToHigh"
          >
            <option value="priceLowToHigh">Price : Low to High</option>
            <option value="priceHighToLow">Price : High to Low</option>
          </select>
        </div>
      </div>
      {/* Product Filter Output */}
      <div className='w-full h-[492px] product-grid'>
        <ProductFiltered data={productList} />
      </div>
    </>
  );
};

export default ProductList;
