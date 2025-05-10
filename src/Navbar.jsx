export const Navbar = ({ onInputhandler }) => {
  return (
    <div className="bg-purple-700 rounded-2xl flex justify-between items-center p-7">
      <div>🍿 usePopcorn</div>
      <input
        type="text"
        className="bg-purple-500 rounded-xl w-100 h-10 p-3"
        onChange={onInputhandler}
      />
      <div>Found X top results</div>
    </div>
  );
};
