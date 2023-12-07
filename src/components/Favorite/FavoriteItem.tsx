import { useState } from "react";
import { ProductType } from "../../types/ProductType";
import QuantityButton from "../QuantityButton";
import TextInput from "../TextInput";
import { UserAccountType } from "../../types/UserAccountType";

interface FavoriteItemProps {
  product: ProductType;
}

const FavoriteItem = ({ product }: FavoriteItemProps) => {
  const [isFavorite, setFavorite] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const [additionalRequest, setRequest] = useState("");

  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };

  const sumbitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userPendingCart = user.pendingCart;
    userPendingCart.push({
      product: product,
      quantity: itemCount,
      additionalRequest: additionalRequest,
    });
    localStorage.setItem("user", JSON.stringify(user));
    // TODO change button style
  };

  // Remove Item From Array method
  const arrayRemove = (arr: ProductType[], value: ProductType) => {
    return arr.filter((item: ProductType) => {
      return item.id != value.id;
    });
  };

  const onClickHandler = (e: React.MouseEvent) => {
    setFavorite(!isFavorite);
    e.preventDefault();
    if (!isFavorite) {
      const jsonUserData: UserAccountType = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
      jsonUserData.favoriteProduct.push(product);
      localStorage.setItem("user", JSON.stringify(jsonUserData));
    } else {
      const jsonUserData: UserAccountType = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
      jsonUserData.favoriteProduct = arrayRemove(
        jsonUserData.favoriteProduct,
        product
      );
      localStorage.setItem("user", JSON.stringify(jsonUserData));
    }
  }

    return (
      <div className="flex mt-6">
        <div
          className="min-w-[441px] h-[334px] mr-8 relative"
          style={
            product.image_url
              ? backgroundImageStyle(product.image_url)
              : { backgroundColor: "red" }
          }
        >
          <button
            onClick={onClickHandler}
            className="z-10 absolute right-2 top-2 hover:scale-110 transition-all"
          >
            <embed
              src={
                isFavorite
                  ? "/icons/fav-fill-icon.svg"
                  : "/icons/fav-trans-icon.svg"
              }
              type="image/jpg"
            ></embed>
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between font-Poppin text-2xl font-semibold">
            <div>{product.name}</div>
            <div>฿ {product.price}</div>
          </div>
          <div>
            <div>{product.description}</div>
            <div className="mt-2">
              <span className="font-Inter font-bold ">
                Addtional Information:{" "}
              </span>
              {product.alt_description}
            </div>
          </div>
          <div>
            {/* INPUT FORM */}
            <form className="ml-auto w-1/2">
              <div className="flex gap-4 mt-4">
                <QuantityButton
                  label="Quantity"
                  count={itemCount}
                  setCount={setItemCount}
                />
                <TextInput
                  label="Additional Request"
                  input={additionalRequest}
                  setInput={setRequest}
                />
              </div>
              <button
                onClick={sumbitHandler}
                type="submit"
                className="w-full bg-accent hover:bg-opacity-90 flex justify-center my-4 py-2 gap-1 rounded-md"
              >
                <embed src="/icons/add-to-cart.svg" type="image/jpg"></embed>
                <span className="text-white font-medium">+ Add to cart</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default FavoriteItem;
