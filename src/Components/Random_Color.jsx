import { useState, useEffect } from "react";

export default function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length){
    return Math.floor(Math.random()*length);
  }

  function handleCreateRandomHexColor(){
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColor = "#";

    for(let i=0; i<6; i++){
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor(){
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
    if(typeOfColor === 'rgb'){
      handleCreateRandomRgbColor()
    }
    else {
      handleCreateRandomHexColor()
    }

  },[typeOfColor])

  return (
    <div className="w-[1000px] h-[600px] border-2 border-gray-700 bg-white  flex flex-col  items-center">
      <div className="py-10 space-x-5 flex justify-center">
        <button onClick={()=> setTypeOfColor('hex')} className="px-4 py-2  bg-gradient-to-r from-blue-300 to-indigo-400 text-white rounded">
          Create HEX Color
        </button>
        <button onClick={()=> setTypeOfColor('rgb')} className="px-4 py-2  bg-gradient-to-r from-blue-300 to-indigo-400 text-white rounded">
          Create RGB Color
        </button>
        <button onClick={
          typeOfColor === 'hex' ? handleCreateRandomHexColor
                                : handleCreateRandomRgbColor
        } className="px-4 py-2  bg-gradient-to-r from-blue-300 to-indigo-400 text-white rounded">
          Generate Random Color
        </button>
      </div>

      <div className="w-[800px] h-[500px] mb-6" style={{background: color}}>
        <div className="flex flex-col justify-center items-center text-white text-xl mt-5 font-bold h-full w-full">
          <h3>{typeOfColor === 'rgb' ? 'RGB Color': 'HEX Color'}</h3>
          <h1 className="mt-20">{color}</h1>
        </div>
      </div>
    </div>
  );
}
