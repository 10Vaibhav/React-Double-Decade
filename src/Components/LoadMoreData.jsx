import { useEffect } from "react";
import { useState } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );

      const result = await response.json();
      //console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading && products.length === 0) {
    return <div className="flex items-center justify-center h-screen bg-slate-50 text-teal-700 font-medium">
      Loading Data! Please wait.
    </div>;
  }

  return (
    <div className="flex flex-col gap-6 max-w-7xl w-full h-[800px] overflow-auto p-8 mx-auto bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg border border-slate-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products && products.length
          ? products.map((item) => (
              <div
                className="p-5 border border-slate-100 flex flex-col gap-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                key={item.id}
              >
                <img
                  className="w-full h-48 object-cover rounded-lg"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p className="text-slate-800 font-medium text-lg truncate">{item.title}</p>
                <p className="text-teal-600 text-xl font-bold">${item.price}</p>
              </div>
            ))
          : null}
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          disabled={disableButton || loading}
          onClick={() => setCount(count + 1)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg disabled:opacity-50 transition-all duration-300 font-medium shadow-sm hover:shadow"
        >
          {loading ? "Loading..." : "Load More Products"}
        </button>

        {disableButton && (
          <p className="text-orange-700 bg-orange-50 px-4 py-3 rounded-lg border border-orange-200 font-medium">
            You have reached to 100 products
          </p>
        )}
      </div>
    </div>
  );
}
