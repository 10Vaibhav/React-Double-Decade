import { useState } from "react";
import data from "./data.js";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="max-w-xl mx-auto  p-6 flex-col rounded-xl shadow-lg bg-[#FCF8F3]">
      <div className="flex justify-center mb-6">
        <button
          className="px-4 py-2  text-black rounded-lg   bg-gradient-to-r from-blue-100 to-indigo-200 hover:from-blue-200 hover:to-indigo-100 transition-all duration-200"
          onClick={() => {
            setEnableMultiSelection(!enableMultiSelection);
          }}
        >
          Enable Multiple Selection
        </button>
      </div>
      <div className="space-y-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex justify-between items-center p-4 cursor-pointer bg-gradient-to-r from-blue-100 to-indigo-200 hover:from-blue-200 hover:to-indigo-100 transition-all duration-200"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {dataItem.question}
                </h3>
                <span className="text-xl font-bold text-indigo-600 transform transition-transform duration-200 ease-in-out">
                  {enableMultiSelection
                    ? multiple.indexOf(dataItem.id) !== -1
                      ? "-"
                      : "+"
                    : selected === dataItem.id
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="p-5 bg-white border-gray-100 text-gray-600 ">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="p-5 bg-white border-gray-100 text-gray-600 ">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-gray-200 rounded-lg text-gray-500">
            No Data Found
          </div>
        )}
      </div>
    </div>
  );
}
