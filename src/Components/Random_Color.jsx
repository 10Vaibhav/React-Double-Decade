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
    <div className="max-w-4xl w-full rounded-2xl shadow-lg bg-white overflow-hidden">
      <div className="py-8 px-6 space-x-4 flex justify-center bg-gray-50">
        <button onClick={()=> setTypeOfColor('hex')} 
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow">
          Create HEX Color
        </button>
        <button onClick={()=> setTypeOfColor('rgb')} 
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow">
          Create RGB Color
        </button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} 
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow">
          Generate Random Color
        </button>
      </div>

      <div className="transition-colors duration-500" style={{background: color}}>
        <div className="flex flex-col justify-center items-center text-white min-h-[500px] backdrop-blur-sm bg-black/10">
          <h3 className="text-2xl font-medium">{typeOfColor === 'rgb' ? 'RGB Color': 'HEX Color'}</h3>
          <h1 className="mt-6 text-4xl font-bold">{color}</h1>
        </div>
      </div>
    </div>
  );
}
