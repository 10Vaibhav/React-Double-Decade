import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQr() {
    setQrCode(input)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">QR Code Generator</h1>
      <div className="mb-6 flex gap-2">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQr}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Generate
        </button>
      </div>

      {qrCode && (
        <div className="flex justify-center p-6 bg-gray-50 rounded-lg">
          <QRCode
            id="qr-code-value"
            value={qrCode}
            size={250}
            className="bg-white p-4 rounded shadow"
          />
        </div>
      )}
    </div>
  )
}