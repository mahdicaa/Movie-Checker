import { useEffect, useState } from "react";
import { MovieDetailCard } from "./MovieDetailCard";
import { StarRating } from "./StarRating";

export const Rightcard = ({ selectedMovieID, APIKEY }) => {
  const [curMovieData, setCurrMovieData] = useState(null);

  useEffect(() => {
    const movieIDfetcher = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&i=${selectedMovieID}`
      );
      const currentMovie = await res.json();
      setCurrMovieData(() => currentMovie);
    };
    movieIDfetcher();
  }, [selectedMovieID]);

  return (
    <div className="flex flex-col items-start w-1/2  bg-gray-800 rounded-xl h-full overflow-hidden">
      {selectedMovieID && <MovieDetailCard curMovieData={curMovieData} />}
      <StarRating />
    </div>
  );
};
