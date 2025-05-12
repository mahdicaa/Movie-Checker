import { useEffect, useState } from "react";
import { MovieDetailCard } from "./MovieDetailCard";
import { StarRating } from "./StarRating";
import { WatchedMovies } from "./WatchedMovies";

export const Rightcard = ({ selectedMovieID, APIKEY, onReturnAction }) => {
  const [curMovieData, setCurrMovieData] = useState(null);

  useEffect(() => {
    const movieIDfetcher = async () => {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${APIKEY}&i=${selectedMovieID}`
      );
      const currentMovie = await res.json();
      setCurrMovieData(() => currentMovie);
      // console.log(currentMovie);
    };
    movieIDfetcher();
  }, [selectedMovieID]);

  return (
    <div className="relative flex flex-col items-center w-1/2  bg-gray-800 rounded-xl h-full overflow-hidden">
      {!selectedMovieID ? <WatchedMovies /> : null}
      {selectedMovieID && (
        <button
          onClick={onReturnAction}
          className="text-white text-2xl absolute top-2 left-2 bg-gray-800/30 hover:bg-gray-800/60 rounded-full w-8 h-8 transition cursor-pointer"
        >
          &#8592;
        </button>
      )}

      {selectedMovieID && <MovieDetailCard curMovieData={curMovieData} />}
      <div className="w-4/5 text-white">
        {selectedMovieID && (
          <div>
            <div className="p-5 bg-gray-700 rounded-2xl mb-5 mt-10">
              <StarRating />
            </div>
            <i className="mt-5">{curMovieData.Plot}</i>
            <p className="mt-5">{curMovieData.Actors}</p>
            <p className="mt-5">Directed by {curMovieData.Director}</p>
          </div>
        )}
      </div>
    </div>
  );
};
