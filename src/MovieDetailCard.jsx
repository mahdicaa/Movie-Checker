export const MovieDetailCard = ({ curMovieData }) => {
  return (
    <div className="flex items-center gap-4 w-full bg-gray-700">
      <img
        src={curMovieData.Poster}
        alt={`photo of ${curMovieData.Title}`}
        className="w-32 h-48 object-cover "
      />
      <div className="text-white">
        <div className="font-bold">{curMovieData.Title}</div>
        <div>
          {curMovieData.Released}, {curMovieData.Runtime}
        </div>
        <div>{curMovieData.Genre}</div>
      </div>
    </div>
  );
};
