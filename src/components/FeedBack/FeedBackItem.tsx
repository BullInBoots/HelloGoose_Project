import { UserFeedBackType } from "../../types/UserFeedBackType";

interface FeedBackItemProps {
  persons: UserFeedBackType[];
}

const FeedBackItem = ({ persons }: FeedBackItemProps) => {
  const ratingStars = (rating: number) => {
    const resultStar = [];
    const fullStarCount = Math.floor(rating);
    for (let i = 0; i < fullStarCount; i++) {
      resultStar.push(
        <embed
          src="../../public/icons/full-star.svg"
          type="image/jpg"
          className="w-[24px] h-[22px] mr-1"
        ></embed>
      );
    }
    if (rating % 1 !== 0) { resultStar.push(
      <embed
        src="../../public/icons/half-star.svg"
        type="image/jpg"
        className="w-[24px] h-[22px] mr-1"
      ></embed>);
    }
    return resultStar;
  };

  return persons.map((person) => {
    return (
      <div className="bg-white w-[350px] h-[295px] flex flex-col items-center justify-center shrink-0 shadow-lg">
        <div className="w-[84px] h-[84px] mb-3">
          {person.image ? (
            <img src={person.image} alt=""  className="w-full h-full rounded-full"/>
          ) : (
            <div className="w-full h-full bg-accent rounded-full"></div>
          )}
        </div>
        <div className="flex items-center mb-6">
            {ratingStars(person.rating)}
        </div>
        <div className="font-Poppins font-medium text-[22px] leading-none w-[200px] text-center mb-1">
            "{person.quote}"
        </div>
        <div className="font-Poppins text-lg text-p-secondary">
            {person.name}
        </div>
      </div>
    );
  });
};

export default FeedBackItem;
