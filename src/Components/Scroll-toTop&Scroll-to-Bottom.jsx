import { useRef } from "react";
import useFetch from "./Custom_useFetchHook.jsx";

export default function ScrollToTopAndBottom(){

    const containerRef = useRef(null);
    const {data, error, Loading} = useFetch('https://dummyjson.com/products?limit=300', {});

    function handleScrollToTop(){
      containerRef.current.scrollTo({
        top:0, left: 0, behavior: 'smooth'
      });
  }

  function handleScrollToBottom(){
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

    if (Loading) {
      return <h1 className="text-2xl font-bold text-center p-8 text-teal-600">Loading Data! please wait.</h1>
    }

    if (error) {
      return <h2 className="text-xl font-semibold text-center p-8 text-red-600">Error Occurred: {error}</h2>
    }

    return (
        <div ref={containerRef} className="w-[800px] h-[700px] overflow-auto flex flex-col items-center px-4 py-8 scroll-m-2">
          <h1 className="text-3xl font-bold text-center text-teal-700 mb-6">Scroll To Top And Bottom Feature</h1>

          <div className="bg-blue-50 p-4 rounded-lg shadow mb-6 w-full flex flex-col justify-center items-center">
            <h3 className="text-xl font-medium text-teal-800 mb-4">This is the top section</h3>
            <button
            onClick={handleScrollToBottom}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Scroll To Bottom
            </button>
          </div>

          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 mb-6 w-full text-center">
            {data && data.products && data.products.length
              ? data.products.map((item, index) => (
                  <li key={index} className="p-4 text-gray-700 hover:bg-gray-50">{item.title}</li>
                ))
              : null
            }
          </ul>

          <div className="bg-blue-50 p-4 rounded-lg shadow mb-2 flex flex-col justify-center items-center w-full">
            <button
            onClick={handleScrollToTop}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Scroll To Top
            </button>
            <h3 className="text-xl font-medium text-teal-800 mt-4">This is the bottom of the page</h3>
          </div>
        </div>
    )
}

