import { useEffect, useState } from "react";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      // console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setErrorMessage(e);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage(event) {
    const element = event.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;
    const height = scrollHeight - clientHeight;
    setScrollPercentage((scrollTop / height) * 100);
  }

  useEffect(() => {
    const scrollableElement = document.querySelector(".scrollable-container");
    scrollableElement.addEventListener("scroll", handleScrollPercentage);

    return () => {
      scrollableElement?.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  if (loading) {
    return <div>loading the Data! please wait.</div>;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="flex flex-col gap-8 max-w-7xl w-full md:w-[900px] h-[800px] overflow-auto p-6 md:p-8 mx-auto bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-xl border border-slate-200 scrollable-container">

      <div className="sticky top-0 bg-slate-50/95 backdrop-blur-sm p-4 rounded-lg shadow-sm z-10">
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Custom Scroll Indicator
        </h1>

        <div className="relative h-2 bg-slate-200 mt-4 rounded-full">

          <div
            className="current-progress-bar absolute top-0 left-0 h-full bg-teal-600 rounded-full transition-all duration-150"
            style={{ width: `${scrollPercentage}%` }}
          ></div>

          <span className="absolute -right-7 -top-1 text-xs font-medium text-slate-600">
            {Math.round(scrollPercentage)}%
          </span>
        </div>
      </div>

      <div className="text-slate-700 space-y-4 w-full">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <p className="p-4 bg-white text-center rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200">
                {dataItem.title}
              </p>
            ))
          : null}
      </div>

    </div>
  );
}
