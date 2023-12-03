import React from "react";
import { ProductType } from "../../types/ProductType";

interface ProductItemProps {
  item: ProductType;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };
  return (
    <div className="w-[256px] h-[230px] bg-accent relative shadow-xl float-left mr-7">
        <button className="z-10 absolute right-2 top-2" onClick={() => {console.log("Add data to account")}}><embed src="/icons/fav-trans-icon.svg"></embed></button>
      <div
        className="w-full h-[154px]"
        style={
          item.image_url
            ? backgroundImageStyle(item.image_url)
            : { backgroundColor: "red" }
        }
      ></div>
        <div className="bg-white h-[76px] p-3 flex">
            <div className="font-Poppins font-medium text-base flex-grow">{item.name}</div>
            <div className="font-Roboto font-medium text-base self-end">{item.price}฿</div>
        </div>
    </div>
  );
};

export default ProductItem;

// TODO : Favorite button data tranfering