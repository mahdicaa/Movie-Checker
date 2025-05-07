import emptyStarIcon from "./assets/star-empty-svgrepo-com.svg";
import starIcon from "./assets/star-svgrepo-com.svg";

export const Starrate = ({
  maxrating,
  onRate,
  rate,
  tempRating,
  tempRatingUpdater,
  tempRatingDefaulter,
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        {Array.from({ length: maxrating }, (_, i) => (
          <span
            key={i}
            onClick={() => onRate(i + 1)}
            onMouseEnter={() => tempRatingUpdater(i)}
            onMouseLeave={() => tempRatingDefaulter(i)}
          >
            {rate >= i + 1 || tempRating >= i + 1 ? (
              <img src={starIcon} alt="starIcon" className="w-12 h-12" />
            ) : (
              <img
                src={emptyStarIcon}
                alt="emptyStarIcon"
                className="w-12 h-12"
              />
            )}
          </span>
        ))}
        <p>{tempRating || rate || ""}</p>
      </div>
    </div>
  );
};
