import { UserAccountType } from '../../types/UserAccountType'
import InputText from './InputText'

interface ProductSummaryResult {
    user: UserAccountType
}

const ProductSummaryResult = ({user}: ProductSummaryResult) => {
  const productPriceList = user.pendingCart.map(
    (item) => item.product.price * item.quantity
  );
  const totalPrice = productPriceList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const allProductShippingPrice = user.pendingCart.map((item) => item.product.shipping_cost);
  
  const totalShippingPrice = allProductShippingPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
  return (
    <div>
      <div className="flex gap-3">
        <InputText size={30} placeholder="Coupon Code" />
        <button className="mt-3 px-5 h-10 bg-primary text-white rounded-md">
          Add code
        </button>
      </div>
      <hr className="mt-7" />
      <div className="flex justify-between my-3">
        <div className="font-Inter">Subtotal</div>
        <div className="font-Inter">฿ {totalPrice}</div>
      </div>
      <hr />
      <div className="flex justify-between my-3">
        <div className="font-Inter">Shipping</div>
        <div className="font-Inter text-primary">
          ฿ {totalShippingPrice}
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-6">
        <div className="font-Inter font-medium">Total</div>
        <div className="font-Inter font-medium text-primary">
          ฿ {totalShippingPrice + totalPrice}
        </div>
      </div>
    </div>
  );
}

export default ProductSummaryResult