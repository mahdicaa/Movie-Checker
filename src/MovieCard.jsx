export const MovieCard = ({ poster, title, year }) => {
  return (
    <div className="flex justify-start w-full hover:bg-gray-700 cursor-pointer rounded-xl overflow-hidden">
      <img src={poster} alt="photo of ${}" className="w-20" />
      <div>
        <div>{title}</div>
        <div>{year}</div>
      </div>
    </div>
  );
};
