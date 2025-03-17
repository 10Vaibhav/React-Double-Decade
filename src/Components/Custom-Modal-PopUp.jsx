export default function Modal({id, header, body, footer, onClose}){
    return (
        <div
            id={id || 'Modal'}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
        >
            <div className="modal-content bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto overflow-hidden">
                <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 pr-2">
                        {header ? header : "Header"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl font-bold focus:outline-none transition-colors"
                    >
                        &times;
                    </button>
                </div>
                <div className="px-4 sm:px-6 py-3 sm:py-4 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
                    {body ? body : <div><p className="text-sm sm:text-base">This is our Modal Body!</p></div>}
                </div>
                <div className="bg-gray-50 px-4 sm:px-6 py-2 sm:py-3 border-t border-gray-200">
                    {footer ? footer : <h2 className="text-base sm:text-lg text-gray-600">Footer</h2>}
                </div>
            </div>
        </div>
    );
}