import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
    <div className="flex items-center justify-around pt-6 z-10 relative top-2">
      <div>
        <h1 className="font-Roboto font-black text-hero text-util">
          LOCAL MARKETPLACE <br /> FOR KMUTT STUDENTS
        </h1>
        <p className='text-xl/[2px] font-Roboto text-util'>Discovery our collection</p>
        <Link to='/shop'><button className='font-Roboto mt-8 text-xl font-black text-white bg-accent px-12 py-1 rounded-3xl'>SHOP NOW</button></Link>
      </div>
      <embed src="../../public/icons/hero.svg" type="image/jpg" className='drop-shadow-md'/>
    </div>
    <div className='h-16 bg-secondary flex items-center justify-evenly'>
      <Link to='/eos' className='text-white font-Inter font-medium'>EOS</Link>
      <Link to='/new' className='text-white font-Inter font-medium'>NEW IN</Link>
      <Link to='/bestseller' className='text-white font-Inter font-medium'>BEST SELLER</Link>
    </div>
    </>
  );
}

export default Hero