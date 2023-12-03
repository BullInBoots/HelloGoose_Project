import FeedBackCarousel from './FeedBackCarousel';
import FeedBackItem from './FeedBackItem';
import { mockUpPersons } from '../../../public/data/mockUpPersons'



const FeedBack = () => {
  return (
    <div className='py-12'>
      <div>
        <h2 className="text-hero/10 font-Inter mx-auto w-fit mb-4">
          RECENT <span className="font-semibold italic">FEEDBACK</span> <br />{" "}
          FROM OUR CLIENTS
        </h2>
        <p className="font-semibold font-Poppins text-base text-p-secondary mx-auto w-fit">
          Some quotes from our happy customers
        </p>
      </div>

        <FeedBackCarousel>
            <FeedBackItem persons={mockUpPersons}/>
        </FeedBackCarousel>
    </div>
  );
}

export default FeedBack