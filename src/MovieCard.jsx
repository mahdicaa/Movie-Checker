export const MovieCard = ({ poster, title, year }) => {
  return (
    <div className="flex items-center gap-4 w-full hover:bg-gray-700 cursor-pointer rounded-xl transition">
      <img
        src={poster}
        alt={`photo of ${title}`}
        className="w-24 h-36 object-cover rounded"
      />
      <div className="text-white">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-400">{year}</div>
      </div>
    </div>
  );
};
