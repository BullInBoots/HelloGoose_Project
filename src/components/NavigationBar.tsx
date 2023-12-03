import { Link } from 'react-router-dom';

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
                <Link to='/'>
                    <img className='w-16' src="../public/images/kmutt-logo.png"/>
                </Link>
                <Link to='/sale' className="text-black font-Inter font-medium ">SALES</Link>
                <Link to='/new' className="text-black font-Inter font-medium ">NEW</Link>
                <Link to='/food' className="text-black font-Inter font-medium ">FOOD</Link>
                <Link to='/stationary' className="text-black font-Inter font-medium">STATIONARY</Link>
                <Link to='/clothes' className="text-black font-Inter font-medium">CLOTHES</Link>
            </div>
            <div className="flex items-center justify-between gap-8">
                <div className='flex items-center bg-white h-8 px-2 rounded-full'>
                    <input type="text" className="flex-1 max-w-md"/>
                    <span><embed src='../../public/icons/search-icon.svg'></embed></span>
                </div>
                <Link to='/favorite'><embed type='image/jpg' src="../../public/icons/heart-icon.svg"/></Link>
                <Link to='/cart'><embed type='image/jpg' src="../../public/icons/cart-icon.svg"/></Link>
                <Link to='/account'><embed type='image/jpg' src="../../public/icons/account-icon.svg"/></Link>
                <button><img src="../../public/images/lang-th.png" alt=""/></button>
            </div>
        </nav>
    </div>
  );
}

export default NavigationBar