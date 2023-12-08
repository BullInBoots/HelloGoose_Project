import { useState } from "react";
import { ProductType } from "../../types/ProductType";
import QuantityButton from "../QuantityButton";
import TextInput from "../TextInput";
import { UserAccountType } from "../../types/UserAccountType";
import AddToCartButton from "../AddToCartButton";
import { arrayRemove } from "../../Utils/arrayRemove";

interface FavoriteItemProps {
  item: ProductType;
}

const FavoriteItem = ({ item }: FavoriteItemProps) => {
  const [isFavorite, setFavorite] = useState(true);
  const [itemCount, setItemCount] = useState(1);
  const [additionalRequest, setRequest] = useState("");
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: "#e84a3b",
    color: "#fff",
    border: "none",
  });
  const [buttonText, setButtonText] = useState("+ Add to Cart");

  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonStyle({
      backgroundColor: "#fff",
      color: "#e84a3b",
      border: "2px solid #e84a3b",
    });
    setButtonText("Added to cart");
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userPendingCart = user.pendingCart;
    userPendingCart.push({
      product: item,
      quantity: itemCount,
      additionalRequest: additionalRequest,
    });
    localStorage.setItem("user", JSON.stringify(user));
    setTimeout(() => {
      setButtonStyle({
        backgroundColor: "#e84a3b",
        color: "#fff",
        border: "none",
      });
      setButtonText('Add to Cart');
    }, 2000);
  };


  const onClickHandler = (e: React.MouseEvent) => {
    setFavorite(!isFavorite);
    e.preventDefault();

    // Item isFavorite Toggle
    if (!isFavorite) {
      const jsonUserData: UserAccountType = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
      jsonUserData.favoriteProduct.push(item);
      localStorage.setItem("user", JSON.stringify(jsonUserData));
    } else {
      const jsonUserData: UserAccountType = JSON.parse(
        localStorage.getItem("user") || "{}"
      );
      jsonUserData.favoriteProduct = arrayRemove(
        jsonUserData.favoriteProduct,
        item
      );
      localStorage.setItem("user", JSON.stringify(jsonUserData));
    }
  }

    return (
      <div className="flex mt-6">
        <div
          className="min-w-[441px] h-[334px] mr-8 relative"
          style={
            item.image_url
              ? backgroundImageStyle(item.image_url)
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
        <div className="flex-auto">
          <div className="flex items-center justify-between font-Poppin text-2xl font-semibold text-util">
            <div>{item.name}</div>
            <div>฿ {item.price}</div>
          </div>
          <div>
            <div className="text-util">{item.description}</div>
            <div className="mt-2">
              <span className="font-Inter font-bold text-util">
                Addtional Information:{" "}
              </span>
              {item.alt_description}
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
              <AddToCartButton submitHandler={submitHandler} buttonStyle={buttonStyle} buttonText={buttonText}/>
            </form>
          </div>
        </div>
      </div>
    );
}

export default FavoriteItem;
