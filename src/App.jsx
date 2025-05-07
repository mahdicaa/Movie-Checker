import { Navbar } from "./Navbar";
import { Leftcard } from "./Leftcard";
import { Rightcard } from "./Rightcard";
import { StarRating } from "./StarRating";

function App() {
  return (
    <div className="p-10  flex-col bg-gray-800 h-screen">
      <Navbar />
      <div className="flex w-9/10 mx-auto mt-10 gap-5">
        <Leftcard />
        <Rightcard />
      </div>
      <div className="flex justify-center items-center m-10">
        <StarRating />
      </div>
    </div>
  );
}

export default App;
