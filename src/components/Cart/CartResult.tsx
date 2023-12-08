import { Link } from 'react-router-dom';
import { PendingProductType } from '../../types/PendingProductType'

interface CartResultProps {
    pendingCart: PendingProductType[]
}

const CartResult = ({pendingCart}: CartResultProps) => {
    const productPriceList = pendingCart.map((item) => item.product.price * item.quantity);
    const totalPrice = productPriceList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)
  return (
    <div className="max-w-[1140px] mx-auto flex justify-end items-center">
      {/* checkout button */}
      <div className='mr-8'>
        <div className="font-Roboto font-medium text-base text-util text-right">
          <span className="mr-3">Sub-total</span>
          {"฿ " + totalPrice.toFixed(2)}
        </div>
        <div className="font-Roboto text-sm text-util text-opacity-40">
          Tax and shipping cost will be calculated later
        </div>
      </div>
      <Link to='/details' className="h-[45px] px-[44px] flex items-center bg-primary font-Roboto font-medium text-white rounded-md">
        Check-out
      </Link>
    </div>
  );
}

export default CartResult