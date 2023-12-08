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

  const filterByShippingCost = (data: ProductType[]) => {
    return data.sort((itemA: ProductType, itemB: ProductType) => {
      return itemA.shipping_cost - itemB.shipping_cost;
    })
  }
  
  const [productList, setProductList] = useState<ProductType[]>(filterByCategory(data));
  const [selectSort, setSelectSort] = useState("priceLowToHigh");
  const [isChecked, setIsChecked] = useState(false);
  

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const mode = e.target.value;
    setSelectSort(mode);
    if (mode == "priceHighToLow") {
      setProductList(filterByPriceDescending(productList));
    } else if (mode == "priceLowToHigh") {
      setProductList(filterByPriceAscending(productList));
    }
  };

  const checkBoxHandler = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setProductList(filterByShippingCost(productList));
    } 
  }
  
  return (
    <>
      <div className="flex justify-between items-center my-8">
        <div>
          <h2 className="font-Poppins font-semibold text-2xl">
            {listName} Products
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-Poppins font-semibold text-base">
            SHOWING 8 of {data.length}
          </p>
          <div className="align-middle">
            <div className="flex items-center bg-tertiary px-2 rounded-md">
              <label className="ms-2 mr-1 text-base p-1">Free shipping</label>
              <input
                checked={isChecked}
                onChange={checkBoxHandler}
                type="checkbox"
                value=""
                className="accent-secondary w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
            </div>
          </div>
          <select
            onChange={onChangeHandler}
            defaultValue={selectSort}
            className="rounded-md bg-tertiary p-1"
          >
            <option value="priceLowToHigh" className="hover:bg-secondary">Price : Low to High</option>
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