import { useState } from "react";

export default function CustomTabs({ tabsContent, onChange }) {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex){
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex)
  }

  return (
    <div className="w-full max-w-[600px] min-h-[500px] flex flex-col justify-center space-y-9 bg-emerald-50 rounded-s-md border-cyan-950 border-2 p-4">
      <div className="flex flex-wrap justify-center gap-2 items-center text-xl">
        {tabsContent.map((tabItem, index) => (
          <div className="bg-teal-500 px-3 py-2 rounded-full font-semibold text-white cursor-pointer text-sm md:text-base md:px-4" onClick={()=> handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center font-semibold text-lg md:text-2xl px-2 text-center">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}


