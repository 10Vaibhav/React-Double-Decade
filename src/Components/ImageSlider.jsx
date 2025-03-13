import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred ! {errorMsg}</div>;
  }

  return (
    <div className="relative w-[1000px] h-[600px]">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-800 cursor-pointer hover:text-gray-600 transition-colors z-10"/>
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "w-full h-full rounded-lg shadow-md"
                  : "hidden w-full h-full rounded-lg shadow-md"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-gray-800 cursor-pointer hover:text-gray-600 transition-colors z-10"
      />
      <div className="absolute bottom-4 flex justify-center w-full">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "h-4 w-4 mx-1 rounded-full bg-white cursor-pointer"
                    : "h-4 w-4 mx-1 rounded-full bg-gray-500 cursor-pointer"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}