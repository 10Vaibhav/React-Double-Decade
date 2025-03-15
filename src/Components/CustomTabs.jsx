import { useState } from "react";

export default function CustomTabs({ tabsContent, onChange }) {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex){
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex)
  }

  return (
    <div className="w-[600px] h-[500px] flex flex-col justify-center space-y-9 bg-emerald-50 rounded-s-md border-cyan-950  border-2">

      <div className="flex justify-center gap-2 items-center text-xl">
        {tabsContent.map((tabItem, index) => (

          <div className="bg-teal-500 px-4 py-2 rounded-full font-semibold text-white cursor-pointer" onClick={()=> handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>

        ))}
      </div>

      <div className="flex justify-center font-semibold text-2xl">
          {
            tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
          }
      </div>

    </div>
  );
}


