import { Navbar } from "./Navbar";
import { Leftcard } from "./Leftcard";
import { Rightcard } from "./Rightcard";
import { useState } from "react";

function App() {
  const APIKEY = "ff51c769";
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [numberOfResults, setNumberOfResults] = useState(0);

  const searchInputHandler = (e) => {
    setSearchInput(() => e.target.value);
  };
  const onSelectedMovie = (id) => {
    setSelectedMovieID((prevID) => (prevID === id ? null : id));
  };

  const returnButton = () => {
    setSelectedMovieID(null);
  };

  const numberResults = (array) => {
    setNumberOfResults(() => array.length);
  };

  return (
    <div className="p-10 flex flex-col bg-gray-950 min-h-screen">
      <Navbar
        onInputhandler={searchInputHandler}
        numberOfResults={numberOfResults}
      />
      <div className="flex w-7/10 h-screen mx-auto mt-10 gap-5">
        <Leftcard
          searchInput={searchInput}
          onSelectedMovie={onSelectedMovie}
          data={data}
          setData={setData}
          APIKEY={APIKEY}
          numberResults={numberResults}
        />
        <Rightcard
          selectedMovieID={selectedMovieID}
          APIKEY={APIKEY}
          onReturnAction={returnButton}
        />
      </div>
    </div>
  );
}

export default App;
