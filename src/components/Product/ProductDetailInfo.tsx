import { useState } from "react";
import QuantityButton from "../QuantityButton";
import TextInput from "../TextInput";
import { ProductType } from "../../types/ProductType";
import { UserAccountType } from "../../types/UserAccountType";

interface ProductDetailInfoProps {
  item: ProductType;
  user: UserAccountType;
}

const ProductDetailInfo = ({ item, user }: ProductDetailInfoProps) => {
  const [itemCount, setItemCount] = useState(1);
  const [additionalRequest, setRequest] = useState('');

  const backgroundImageStyle = (imgUrl: string) => {
    return {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    };
  };

  const sumbitHandler = () => {
    // change button style
    //set data to userAccount
    user.pendingCart.push({
      product: item,
      quantity: itemCount,
      additionalRequest: additionalRequest
    });
    // to set data to localStorage I must create userData at Signin page first
  }

  return (
    <div className="flex gap-[92px] w-fit mx-auto py-[98px]">
      <div>
        <div
          className="w-[544px] h-[420px]"
          style={
            item.image_url
              ? backgroundImageStyle(item.image_url)
              : { backgroundColor: "red" }
          }
        ></div>
        <div className="font-Roboto font-bold text-xl uppercase text-secondary text-center mt-4">
          🛵{" "}
          {item.shipping_cost > 0 ? item.shipping_cost + "฿" : "FREE SHIPPING"}
        </div>
      </div>
      <div className="">
        <div>
          <h3 className="font-Poppins font-medium text-[24px]">{item.name}</h3>
          <h4 className="font-Inter font-medium text-[24px]">{item.price} ฿</h4>
          <p className="mt-2 font-Inter text-base text-black text-opacity-70">
            {item.description}
          </p>
          <p className="font-Inter text-base text-black text-opacity-70">
            <span className="font-bold">For allergies:</span>{" "}
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
            <button onClick={sumbitHandler} type="submit" className="w-full bg-accent hover:bg-opacity-90 flex justify-center my-8 py-2 gap-1 rounded-md">
              <embed src="/icons/add-to-cart.svg" type="image/jpg"></embed>
              <span className="text-white font-medium">+ Add to cart</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;

// TODO finish submitHandler