import { mockUpProduct } from '../../../public/data/mockUpProduct';
import ProductFiltered from '../Product/ProductFiltered';
import { ProductType } from '../../types/ProductType';

interface HomeItemListProps {
    header: string;
    isOnSale?: boolean;
}

const HomeItemList = ({header, isOnSale=false}: HomeItemListProps) => {

    // Array Shuffle
    function shuffle(array: ProductType[]) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }
    
    const shuffleArray = shuffle(mockUpProduct);
    
  return (
    <div className='mt-16 pl-16 flex flex-col'>
    <div className="flex justify-between items-center max-w-[1140px]">
        <div className="font-Poppins font-medium text-2xl text-util">{header}</div>
        <div className="font-Inter text-base text-primary">VIEW MORE &gt;</div>
    </div>
    <div className='overflow-x-auto flex gap-16 items-center h-[300px]'>
        <ProductFiltered data={shuffleArray.slice(0, 8)} isOnSale={isOnSale} />
    </div>
    </div>
  )
}

export default HomeItemList