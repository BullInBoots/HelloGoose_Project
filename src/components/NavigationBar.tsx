import { Link } from 'react-router-dom';
import NavigationButton from './NavigationButton';
const NavigationBar = () => {
    
  return (
    <div>
        {/* SignUp Banner */}
        <div className="py-2 bg-primary">
            <div className="mx-auto w-fit">
                <span className="font-Inter text-white text-sm">
                SIGN UP AND GET 20% OFF TO YOUR FIRST ORDER.
                </span>
                <span className="font-Inter text-black font-bold">SIGN UP NOW</span>
            </div>
        </div>
        {/* NavBar */}
        <nav className='flex justify-between bg-tertiary px-4 h-16'>
            <div className="flex items-center justify-between gap-12">
                <Link to='/home'>
                    <img className='w-16' src="/images/kmutt-logo.png"/>
                </Link>
                <NavigationButton btnName='food' linkTo='/food'/>
                <NavigationButton btnName='stationery' linkTo='/stationery'/>
                <NavigationButton btnName='clothes' linkTo='/clothes'/>
                <NavigationButton btnName='boardgame' linkTo='/boardgame'/>
            </div>
            <div className="flex items-center justify-between gap-8">
                {/* <NavSearchBox/> */}
                <Link to='/favorite'><embed type='image/jpg' src="/icons/heart-icon.svg"/></Link>
                <Link to='/cart'><embed type='image/jpg' src="/icons/cart-icon.svg"/></Link>
                <Link to='/'><embed type='image/jpg' src="/icons/account-icon.svg"/></Link>
                <button><img src="/icons/lang-en.svg" alt=""/></button>
            </div>
        </nav>
    </div>
  );
}

export default NavigationBar