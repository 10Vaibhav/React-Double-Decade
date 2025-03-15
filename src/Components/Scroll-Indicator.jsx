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

  console.log(scrollPercentage);

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
      <div className="top-container">
        <h1 className="text-3xl font-bold text-slate-800 text-center">
          Custom Scroll Indicator
        </h1>
        <div className="scroll-progress-bar">
          <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
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
