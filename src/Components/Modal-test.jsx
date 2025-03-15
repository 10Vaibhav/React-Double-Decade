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
        <div className="w-[500px] h-[200px] max-w-6xl mx-auto flex flex-col items-center justify-center bg-gray-100 p-5">
            <button
                onClick={handleToggleModalPopup}
                className="bg-rose-400 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2  focus:ring-offset-2"
            >
                Open Modal Popup
            </button>

            {showModalPopup &&
                <Modal
                    id={"custom-id"}
                    header={<h1 className="text-2xl font-bold text-red-950">Customized Header</h1>}
                    footer={
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={onClose}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onClose}
                                className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors"
                            >
                                Confirm
                            </button>
                        </div>
                    }
                    onClose={onClose}
                    body={
                        <div className="space-y-3">
                            <p className="text-gray-700">This is a customized modal body with improved styling.</p>
                            <p className="text-gray-600">You can add any content here, such as forms, images, or text.</p>
                        </div>
                    }
                />
            }
        </div>
    );
}