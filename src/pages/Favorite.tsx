import FavoriteItemList from '../components/Favorite/FavoriteItemList'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'

const Favorite = () => {
  return (
    <>
    <NavigationBar/>
    <FavoriteItemList />
    <div className='mt-6'><Footer /></div>
    </>
  )
}

export default Favorite