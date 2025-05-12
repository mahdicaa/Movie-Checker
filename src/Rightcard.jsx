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
      console.log(currentMovie);
    };
    movieIDfetcher();
  }, [selectedMovieID]);

  return (
    <div className="flex flex-col items-center w-1/2  bg-gray-800 rounded-xl h-full overflow-hidden">
      {selectedMovieID && <MovieDetailCard curMovieData={curMovieData} />}
      <div className="p-10 w-9/10 text-white">
        {selectedMovieID && (
          <div className="p-5 bg-gray-700 rounded-2xl mb-5">
            <StarRating />
          </div>
        )}
        <i className="mt-5">{curMovieData.Plot}</i>
        <p className="mt-5">{curMovieData.Actors}</p>
        <p className="mt-5">Directed by {curMovieData.Director}</p>
      </div>
    </div>
  );
};
