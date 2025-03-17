import { useState } from "react";
import Modal from "./Custom-Modal-PopUp";

export default function ModalTest(){
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }

    function onClose(){
        setShowModalPopup(false);
    }

    return (
        <div className="w-full sm:w-[500px] h-[200px] max-w-6xl mx-auto flex flex-col items-center justify-center bg-gray-100 p-3 sm:p-5">
            <button
                onClick={handleToggleModalPopup}
                className="w-full sm:w-auto bg-rose-400 hover:bg-rose-600 text-white font-medium py-2 px-3 sm:px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
                Open Modal Popup
            </button>

            {showModalPopup &&
                <Modal
                    id={"custom-id"}
                    header={<h1 className="text-lg sm:text-xl md:text-2xl font-bold text-red-950">Customized Header</h1>}
                    footer={
                        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 py-1.5 sm:py-2 px-3 sm:px-4 rounded-md transition-colors text-sm sm:text-base"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-700 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-md transition-colors text-sm sm:text-base"
                            >
                                Confirm
                            </button>
                        </div>
                    }
                    onClose={onClose}
                    body={
                        <div className="space-y-2 sm:space-y-3 px-2 sm:px-0">
                            <p className="text-gray-700 text-sm sm:text-base">This is a customized modal body with improved styling.</p>
                            <p className="text-gray-600 text-sm sm:text-base">You can add any content here, such as forms, images, or text.</p>
                        </div>
                    }
                />
            }
        </div>
    );
}