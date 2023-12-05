import { UserAccountType } from '../../types/UserAccountType'
import CartItem from './CartItem';
import CartResult from './CartResult';

interface CartItemProps {
    user: UserAccountType
}

const CartItemList = ({user} : CartItemProps) => {

  let index = -1;

  return (
    <>
    {/* This function returns JSX */}
    {user.pendingCart.map((item) => {
      index += 1;
      return <CartItem index={index} user={user} product={item.product} quantity={item.quantity} additionalRequest={item.additionalRequest}/>
    })}
    <CartResult pendingCart={user.pendingCart}/>
    </>
  );
}

export default CartItemList