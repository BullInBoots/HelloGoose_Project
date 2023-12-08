import { UserAccountType } from '../../types/UserAccountType';
import FavoriteItem from './FavoriteItem';

const FavoriteItemList = () => {

    const jsonUserData: UserAccountType = JSON.parse(localStorage.getItem('user') || '{}');
    const listOfFavoriteItem = jsonUserData.favoriteProduct.map((item) => {
        return <FavoriteItem key={item.id} item={item} />
    });
  return (
    <div className='max-w-[1140px] mx-auto my-8'>
        {listOfFavoriteItem}
    </div>
  )
}

export default FavoriteItemList