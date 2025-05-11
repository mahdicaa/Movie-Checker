export const MovieCard = ({
  poster,
  title,
  year,
  type,
  imdbID,
  onSelectedMovie,
}) => {
  return (
    <div
      className="flex items-center gap-4 w-full hover:bg-gray-700 cursor-pointer rounded-xl transition"
      onClick={() => onSelectedMovie(imdbID)}
    >
      <img
        src={poster}
        alt={`photo of ${title}`}
        className="w-24 h-36 object-cover rounded"
      />
      <div className="text-white">
        <div className="font-bold">{title}</div>
        <div className="text-m text-gray-400">{type}</div>
        <div className="text-sm text-gray-400">{year}</div>
      </div>
    </div>
  );
};
