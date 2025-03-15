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

  // console.log(images);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred ! {errorMsg}</div>;
  }

  return (
    <div className="relative max-w-[1000px] w-full h-[600px] mx-auto">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white/80 cursor-pointer hover:text-white transition-all duration-300 drop-shadow-lg z-10"/>
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "w-full h-full object-cover rounded-xl shadow-xl"
                  : "hidden"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white/80 cursor-pointer hover:text-white transition-all duration-300 drop-shadow-lg z-10"
      />
      <div className="absolute bottom-4 flex justify-center w-full gap-2">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "h-3 w-3 rounded-full bg-white shadow-md transition-all duration-300"
                    : "h-3 w-3 rounded-full bg-white/50 hover:bg-white/70 transition-all duration-300"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </div>
    </div>
  );
}