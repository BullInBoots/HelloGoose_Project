import React, {useState} from "react";
import { ProductType } from "../../types/ProductType";
import { Link } from "react-router-dom";
import { UserAccountType } from "../../types/UserAccountType";
interface ProductItemProps {
  item: ProductType;
  isOnSale?: boolean
}

const ProductItem = ({ item, isOnSale=false }: ProductItemProps) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);
  const MAX_NAME_LENGTH = 30;
  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };

  const arrayRemove = (arr:ProductType[], value:ProductType) => {
    return arr.filter((item:ProductType) => {
      return item.id != value.id;
    });
  } 

  const itemNameHandler = (text: string) => {
    return text.slice(0, MAX_NAME_LENGTH).concat("...");
  }

  const onClickHandler = (e: React.MouseEvent) => {
    setFavorite(!isFavorite);
    e.preventDefault();
    if (!isFavorite) {
      const jsonUserData: UserAccountType = JSON.parse(localStorage.getItem('user') || '{}');
      jsonUserData.favoriteProduct.push(item);
      localStorage.setItem('user', JSON.stringify(jsonUserData));  
    } else {
      const jsonUserData: UserAccountType = JSON.parse(localStorage.getItem("user") || '{}');
      jsonUserData.favoriteProduct = arrayRemove(jsonUserData.favoriteProduct, item);
      localStorage.setItem('user', JSON.stringify(jsonUserData));
    }
    // when click toggle between add and remove this item in user favorite
  }
  
  return (
    <Link to={`./product/${item.id}`}>
      <div className="w-[256px] h-[230px] bg-accent relative shadow-xl float-left hover:scale-110 transition-all">
        <button
          onClick={onClickHandler}
          className="z-10 absolute right-2 top-2 hover:scale-110 transition-all"
        >
          <embed src={isFavorite? '/icons/fav-fill-icon.svg' : '/icons/fav-trans-icon.svg'} type="image/jpg"></embed>
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
          <div className="font-Poppins font-medium text-base flex-grow text-util">
            {item.name.length > MAX_NAME_LENGTH ? itemNameHandler(item.name) : item.name}
          </div>
          <div className="flex flex-col self-end min-w-[60px]">
            <div className="font-Roboto font-medium text-sm self-end text-util  ">
              {isOnSale ? <span className="text-accent">{item.price} ฿</span> : <span>฿ {item.price}</span> }
            </div>
            <div className="w-fit text-opacity-50 font-Inter text-[12px] text-util self-end flex items-center gap-1">
              <embed src="/icons/shipping-icon.svg" />
              <span>{ "฿" + item.shipping_cost}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

// TODO : Favorite button data tranfering