import { useState, useEffect } from "react";
import { ProductType } from "../../types/ProductType";
import QuantityButton from "../QuantityButton";
import { UserAccountType } from "../../types/UserAccountType";

interface CartItemProps {
  user: UserAccountType;
  index: number;
  product: ProductType;
  quantity: number;
  additionalRequest?: string;
}

const backgroundImageStyle = (imgUrl: string) => {
  return {
    backgroundImage: `url(${imgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
};

const CartItem = ({user, index, product, quantity, additionalRequest }: CartItemProps) => {
  const [productQuantity, setProductQuantity] = useState(quantity);
  useEffect(() => {
    user.pendingCart[index].quantity = productQuantity;
    localStorage.setItem('user', JSON.stringify(user));
  }, [productQuantity, user, index]);
  
  return (
    <>
    <div className="flex max-w-[1140px] h-[120px] justify-between mx-auto">
      <div className="flex">
        <div
          className="w-[160px] h-full mr-6"
          style={
            product.image_url
              ? backgroundImageStyle(product.image_url)
              : { backgroundColor: "red" }
          }
        ></div>
        <div>
          <div className="text-2xl font-Poppins font-medium">
            {product.name}
          </div>
          <div className="text-sm leading-3 font-Inter text-p-secondary">{additionalRequest}</div>
          {/* click to remove button */}
          <button className="text-accent font-Inter text-sm underline mt-1">
            Remove
          </button>
        </div>
      </div>
      <div className="flex items-center gap-20">
        <div>{product.price} ฿</div>
        <QuantityButton count={productQuantity} setCount={setProductQuantity} />
        <div className="w-20">{(product.price * productQuantity).toFixed(2) + ' ฿'}</div>
      </div>
    </div>
    <hr className="outline-black opacity-10 max-w-[1140px] mx-auto my-4"/>
    </>
  );
};

export default CartItem;
