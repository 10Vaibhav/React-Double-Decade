import "./App.css";
import Accordion from "./Components/Accordion.jsx";
import ImageSlider from "./Components/ImageSlider.jsx";
import LoadMoreData from "./Components/LoadMoreData.jsx";
import RandomColor from "./Components/Random_Color.jsx";
import StarRating from "./Components/StarRatingUpdater.jsx";
import menus from "./Components/tree-view-data.js";
import TreeView from "./Components/tree-view.jsx";
import QRCodeGenerator from "./Components/QR-Code-Generator.jsx"
import ThemeSwitcher from "./Components/ThemeSwitcher.jsx";
import ScrollIndicator from "./Components/Scroll-Indicator.jsx";
import TabTest from "./Components/tab-test.jsx";
import ModalTest from "./Components/Modal-test.jsx";
import GitHubProfileFinder from "./Components/GitHub-Profile-Finder.jsx";
import SearchAutoComplete from "./Components/SearchAutoComplete-with-API.jsx";
import TicTacToe from "./Components/Tic-Tac-Toe.jsx";

function App() {
  return (
    <div className="bg-[#FFEDFA] min-h-screen py-10 space-y-5 flex flex-col items-center justify-center">
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Accordion</h1></div>
      <Accordion/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Random HEX RGB Color Generator</h1></div>
      <RandomColor/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Star Rating</h1></div>
      <StarRating noOfStars={10}/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Image Slider</h1></div>
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'3'} limit={'10'}/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Load More Products</h1></div>
      <LoadMoreData/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Tree View</h1></div>
      <TreeView menus={menus}/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">QR Code Generator</h1></div>
      <QRCodeGenerator/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Theme Switcher</h1></div>
      <ThemeSwitcher/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Scroll Indicator</h1></div>
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Custom Tabs</h1></div>
      <TabTest/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Modal PopUp</h1></div>
      <ModalTest/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">GitHub Profile Finder</h1></div>
      <GitHubProfileFinder/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Search Auto Complete With API</h1></div>
      <SearchAutoComplete/>
      <div><h1 className="text-slate-950 py-2 px-3 font-bold text-xl">Tic Tac Toe</h1></div>
      <TicTacToe/>
    </div>
  );
}

export default App;

