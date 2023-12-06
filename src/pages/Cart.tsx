import NavigationBar from '../components/NavigationBar'
import { UserAccountType } from '../types/UserAccountType'
import CardList from '../components/Cart/CartList';
import { Link } from 'react-router-dom';

interface CartProps {
  user: UserAccountType;
}


const Cart = ({user}: CartProps) => {
  return (
    <>
    <NavigationBar/>
    <div className='my-16'>
      <div className='w-fit text-hero font-Poppins font-semibold mx-auto'>Your carts items</div>
      <div className='w-fit mx-auto mb-12'>
        <Link to='/' className='text-base font-Inter text-primary underline'>Back to shopping</Link>
      </div>
      <CardList user={user} />
    </div>
    </>
  )
}

export default Cart