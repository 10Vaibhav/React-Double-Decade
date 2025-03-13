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
    <div className="flex flex-col gap-5 w-full md:w-[1200px] h-[800px] overflow-auto p-6 mx-auto bg-slate-50 rounded-lg shadow-sm border border-gray-500">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products && products.length
          ? products.map((item) => (
              <div
                className="p-4 border border-slate-200 flex flex-col gap-3 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                key={item.id}
              >
                <img
                  className="w-full h-[120px] object-cover rounded-md"
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p className="text-slate-800 font-medium truncate">{item.title}</p>
                <p className="text-teal-600 font-bold">${item.price}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          disabled={disableButton || loading}
          onClick={() => setCount(count + 1)}
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md disabled:opacity-50 transition-colors duration-200"
        >
          {loading ? "Loading..." : "Load More Products"}
        </button>
      </div>

      {disableButton ? (
        <p className="text-orange-700 bg-orange-50 p-2 rounded-md border border-orange-200">
          You have reached to 100 products
        </p>
      ) : null}
    </div>
  );
}
