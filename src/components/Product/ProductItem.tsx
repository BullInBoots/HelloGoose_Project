import React, {useState} from "react";
import { ProductType } from "../../types/ProductType";
import { Link } from "react-router-dom";
interface ProductItemProps {
  item: ProductType;
}

const ProductItem = ({ item }: ProductItemProps) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const key = item.id;
  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };

  const onClickHandler = () => {
    console.log(key);
    // when click toggle between add and remove this item in user favorite
  }
  
  return (
    <Link to={`/product`}>
    <div className="w-[256px] h-[230px] bg-accent relative shadow-xl float-left">
      <button onClick={onClickHandler} className="z-10 absolute right-2 top-2 hover:bg-black">
        <embed src="/icons/fav-trans-icon.svg" type="image/jpg"></embed>
      </button>
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
    </Link>
  );
};

export default ProductItem;

// TODO : Favorite button data tranfering