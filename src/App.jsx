import "./App.css";
import Accordion from "./Components/Accordion.jsx";
import RandomColor from "./Components/Random_Color.jsx";
import StarRating from "./Components/StarRatingUpdater.jsx";

function App() {
  return (
    <div className="bg-[#FFEDFA] min-h-screen py-10 space-y-5 flex flex-col items-center justify-center">
      {/* Accordion Component */}
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;