import { useState } from "react";
import starIcon from "./assets/star-svgrepo-com.svg";
import emptyStarIcon from "./assets/star-empty-svgrepo-com.svg";

function App() {
  return (
    <div className="p-10  flex-col bg-gray-800 h-screen">
      <Navbar />
      <div className="flex w-9/10 mx-auto mt-10 gap-5">
        <Leftcard />
        <Rightcard />
      </div>
    </div>
  );
}

export default App;

export const Navbar = () => {
  return (
    <div className="bg-purple-700 rounded-2xl flex justify-between items-center p-7">
      <div>🍿 usePopcorn</div>
      <input type="text" className="bg-purple-500 rounded-xl w-100 h-10" />
      <div>Found X top results</div>
    </div>
  );
};

export const Leftcard = () => {
  return (
    <div className="flex justify-center items-center w-1/2 p-8 bg-gray-600 rounded-xl">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
      veritatis voluptatem consectetur iure autem corrupti optio, maiores,
      ducimus accusamus laudantium ad laborum modi, fugiat obcaecati accusantium
      similique ipsum quos deserunt.
    </div>
  );
};

export const Rightcard = () => {
  const [rate, setRate] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleToggleRating = (rating) => {
    setRate(rating);
    // console.log("update shod!");
  };
  const tempRatingUpdater = (i) => {
    setTempRating(i + 1);
    // console.log("omad");
  };
  const tempRatingDefaulter = (i) => {
    setTempRating(0);
    // console.log("raft");
  };

  return (
    <div className="flex justify-center items-center w-1/2 p-8 bg-gray-600 rounded-xl ">
      <Starrate
        maxrating={10}
        onRate={handleToggleRating}
        rate={rate}
        tempRating={tempRating}
        tempRatingUpdater={tempRatingUpdater}
        tempRatingDefaulter={tempRatingDefaulter}
      />
    </div>
  );
};

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
        <p>{tempRating || ""}</p>
      </div>
    </div>
  );
};
