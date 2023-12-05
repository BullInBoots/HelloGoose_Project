import { UserAccountType } from '../../types/UserAccountType'
import CartItem from './CartItem';
import CartResult from './CardResult';

interface CartItemProps {
    user: UserAccountType
}

const CartItemList = ({user} : CartItemProps) => {
    const {pendingCart} = user;

    console.log(pendingCart)
  return (
    <>
    {/* This function returns JSX */}
    {pendingCart.map((item) => {
      return <CartItem product={item.product} quantity={item.quantity} additionalRequest={item.additionalRequest}/>
    })}
    <CartResult pendingCart={pendingCart}/>
    </>
  );
}

export default CartItemList