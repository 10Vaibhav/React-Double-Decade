import "./App.css";
import Accordion from "./Components/Accordion.jsx";
import ImageSlider from "./Components/ImageSlider.jsx";
import LoadMoreData from "./Components/LoadMoreData.jsx";
import RandomColor from "./Components/Random_Color.jsx";
import StarRating from "./Components/StarRatingUpdater.jsx";
import menus from "./Components/tree-view-data.js";
import TreeView from "./Components/tree-view.jsx";
import QRCodeGenerator from "./Components/QR-Code-Generator.jsx"

function App() {
  return (
    <div className="bg-[#FFEDFA] min-h-screen py-10 space-y-5 flex flex-col items-center justify-center">
      {/* Accordion Component */}
      <Accordion/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'3'} limit={'10'}/>
      <LoadMoreData/>
      <TreeView menus={menus}/>
      <QRCodeGenerator/>
    </div>
  );
}

export default App;