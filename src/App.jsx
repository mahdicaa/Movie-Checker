import { Navbar } from "./Navbar";
import { Leftcard } from "./Leftcard";
import { Rightcard } from "./Rightcard";
import { StarRating } from "./StarRating";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const searchInputHandler = (e) => {
    setSearchInput(() => e.target.value);
  };
  return (
    <div className="p-10  flex-col bg-gray-950 h-screen">
      <Navbar onInputhandler={searchInputHandler} />
      <div className="flex w-9/10 mx-auto mt-10 gap-5">
        <Leftcard searchInput={searchInput} />
        <Rightcard />
      </div>
      {/* <div className="flex justify-center items-center m-10">
        <StarRating />
      </div> */}
    </div>
  );
}

export default App;
