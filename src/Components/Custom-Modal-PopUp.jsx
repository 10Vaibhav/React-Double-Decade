export default function Modal({id, header, body, footer, onClose}){
    return (
        <div
            id={id || 'Modal'}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
            <div className="modal-content bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto overflow-hidden">
                <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {header ? header : "Header"}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none transition-colors"
                    >
                        &times;
                    </button>
                </div>
                <div className="px-6 py-4">
                    {body ? body : <div><p>This is our Modal Body!</p></div>}
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                    {footer ? footer : <h2 className="text-lg text-gray-600">Footer</h2>}
                </div>
            </div>
        </div>
    );
}