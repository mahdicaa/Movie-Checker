import { Navbar } from "./Navbar";
import { Leftcard } from "./Leftcard";
import { Rightcard } from "./Rightcard";
import { useState } from "react";

function App() {
  const APIKEY = "ff51c769";
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("friends");
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  const searchInputHandler = (e) => {
    setSearchInput(() => e.target.value);
  };
  const onSelectedMovie = (id) => {
    setSelectedMovieID((prevID) => (prevID === id ? null : id));
    // console.log(selectedMovieID);
  };

  const returnButton = () => {
    setSelectedMovieID(null);
  };

  return (
    <div className="p-10 flex flex-col bg-gray-950 min-h-screen">
      <Navbar onInputhandler={searchInputHandler} />
      <div className="flex w-7/10 h-screen mx-auto mt-10 gap-5">
        <Leftcard
          searchInput={searchInput}
          onSelectedMovie={onSelectedMovie}
          data={data}
          setData={setData}
          APIKEY={APIKEY}
        />
        <Rightcard
          selectedMovieID={selectedMovieID}
          APIKEY={APIKEY}
          onReturnAction={returnButton}
        />
      </div>
      {/* <div className="flex justify-center items-center m-10">
        <StarRating />
      </div> */}
    </div>
  );
}

export default App;
