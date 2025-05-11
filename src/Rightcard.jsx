import { useEffect, useState } from "react";
import { Starrate } from "./Starrate";

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

  // useEffect(() => {
  //   const fetcher = async () => {
  //     const res = await fetch(
  //       `https://api.exchangerate.host/list?access_key=109c906ee3ae0f187763ad023b6bda1a`
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //   };
  //   fetcher();
  // }, []);

  return (
    <div className="flex justify-center items-center w-1/2 p-8 bg-gray-600 rounded-xl h-full ">
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
