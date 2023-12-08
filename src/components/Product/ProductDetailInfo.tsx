import { useState } from "react";
import QuantityButton from "../QuantityButton";
import TextInput from "../TextInput";
import { ProductType } from "../../types/ProductType";
import { UserAccountType } from "../../types/UserAccountType";
import AddToCartButton from "../AddToCartButton";

interface ProductDetailInfoProps {
  item: ProductType;
  user: UserAccountType;
}

const ProductDetailInfo = ({ item, user }: ProductDetailInfoProps) => {
  const [itemCount, setItemCount] = useState(1);
  const [additionalRequest, setRequest] = useState('');
  const [buttonStyle, setButtonStyle] = useState({
    backgroundColor: '#e84a3b',
    color: '#fff',
    border: 'none',
  });
  const [buttonText, setButtonText] = useState('+ Add to Cart');

  // background image must follow these rules
  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setButtonStyle({
      backgroundColor: '#fff',
      color: '#e84a3b',
      border: '2px solid #e84a3b',
    });
    setButtonText('Added to cart');
    const userPendingCart = user.pendingCart;
    userPendingCart.push({
      product: item,
      quantity: itemCount,
      additionalRequest: additionalRequest,
    });
    localStorage.setItem('user', JSON.stringify(user));
    // TODO change button style
    setTimeout(() => {
      setButtonStyle({
        backgroundColor: "#e84a3b",
        color: "#fff",
        border: "none",
      });
      setButtonText("Add to Cart");
    }, 2000);
  }

  return (
    <div className="flex gap-[92px]  max-w-[1140px] mx-auto py-[98px]">
      <div>
        <div
          className="w-[544px] h-[420px]"
          style={
            item.image_url
              ? backgroundImageStyle(item.image_url)
              : { backgroundColor: "red" }
          }
        ></div>
      </div>
      <div>
        <div>
          <div>
            <h3 className="font-Poppins font-medium text-util text-[24px]">
              {item.name}
            </h3>
          </div>
          <div className="flex">
            <div className="mr-3 leading-none font-Inter font-medium text-util text-[24px]">
              ฿ {item.price}
            </div>
            <div className="self-end font-Inter text-util text-[12px] text-opacity-70">
              <img className="inline" src="/icons/shipping-icon.svg" alt="" />
              <span className="">฿{item.shipping_cost}</span>
            </div>
          </div>
          <p className="mt-2 font-Inter text-base text-util text-opacity-70">
            {item.description}
          </p>
          <p className="font-Inter text-base text-util text-opacity-70">
            <span className="font-bold text-util">
              Additional Information:{" "}
            </span>{" "}
            {item.alt_description}
          </p>
        </div>
        <div>
          <form action="">
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
};

export default ProductDetailInfo;

// TODO finish submitHandler