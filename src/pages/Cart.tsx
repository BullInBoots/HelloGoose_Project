import NavigationBar from '../components/NavigationBar'
import { UserAccountType } from '../types/UserAccountType'
import CardList from '../components/Cart/CartList';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Cart = () => {
  const jsonUserData: UserAccountType = JSON.parse(localStorage.getItem('user') || '{}');
  

  return (
    <>
    <NavigationBar/>
    <div className='my-16'>
      <div className='w-fit text-hero font-Poppins font-semibold mx-auto'>Your carts items</div>
      <div className='w-fit mx-auto mb-12'>
        <Link to='/' className='text-base font-Inter text-primary underline'>Back to shopping</Link>
      </div>
      <CardList user={jsonUserData} />
    </div>
    <Footer />
    </>
  )
}

export default Cart