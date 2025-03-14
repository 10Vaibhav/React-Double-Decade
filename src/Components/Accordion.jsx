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
    <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg bg-gradient-to-br from-[#FCF8F3] to-white">
      <div className="flex justify-center mb-8">
        <button
          className="px-6 py-3 text-indigo-700 font-medium rounded-lg bg-gradient-to-r from-indigo-100 to-blue-100 hover:from-indigo-200 hover:to-blue-200 transition-all duration-300 shadow-sm hover:shadow"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multiple Selection
        </button>
      </div>
      <div className="space-y-4">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="flex justify-between items-center p-5 cursor-pointer bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {dataItem.question}
                </h3>
                <span className="text-2xl font-medium text-indigo-600 transform transition-transform duration-300">
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
                    <div className="p-6 bg-white/80 text-gray-700 leading-relaxed">
                      {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="p-6 bg-white/80 text-gray-700 leading-relaxed">
                      {dataItem.answer}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-gray-50 rounded-xl text-gray-500 font-medium">
            No Data Found
          </div>
        )}
      </div>
    </div>
  );
}
