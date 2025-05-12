export const Navbar = ({ onInputhandler, numberOfResults }) => {
  return (
    <div className="bg-purple-700 rounded-2xl flex justify-between items-center p-7">
      <div className="font-bold text-white text-2xl">🍿 usePopcorn</div>
      <input
        type="text"
        className="bg-purple-500 rounded-xl w-100 h-10 p-3"
        onChange={onInputhandler}
      />
      <div className="font-bold text-white text-2xl">
        Found {numberOfResults} top results
      </div>
    </div>
  );
};
