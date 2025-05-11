import { useEffect, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { Loader } from "./Loader";
import { MovieCard } from "./MovieCard";

export const Leftcard = ({
  searchInput,
  onSelectedMovie,
  data,
  setData,
  APIKEY,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  // console.log(searchInput);

  useEffect(() => {
    const delay = setTimeout(() => {
      const fetchSearched = async () => {
        if (searchInput.trim().length < 3) return;
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchInput}`
          );
          const data = await res.json();

          setData(data.Search);
          // console.log(data);

          if (data.Response === "False") {
            throw new Error("Invalid API key");
          }
        } catch (error) {
          console.error(error);
          setFetchError(true);
        } finally {
          setIsLoading(false);
        }
      };
      fetchSearched();
    }, 3000);
    return () => clearTimeout(delay);
  }, [searchInput]);

  return (
    <div className="flex flex-col w-1/2 h-full p-8 bg-gray-800 rounded-xl gap-5 overflow-y-scroll">
      {isLoading ? (
        <Loader />
      ) : fetchError ? (
        <ErrorMessage />
      ) : (
        data.map((data) => (
          <MovieCard
            key={data.imdbID}
            poster={data.Poster}
            title={data.Title}
            year={data.Year}
            type={data.Type}
            onSelectedMovie={onSelectedMovie}
            imdbID={data.imdbID}
          />
        ))
      )}
    </div>
  );
};
