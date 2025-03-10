import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft, FaStar, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  const bannerData = useSelector((state) => state.movieData.bannerData);
  const imageURL = useSelector((state) => state.movieData.imageURL);
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((preve) => preve + 1);
    }
  };
  const handleprevious = () => {
    if (currentImage > 0) {
      setCurrentImage((preve) => preve - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerData, imageURL, currentImage]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "bannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageURL + data.backdrop_path}
                  className="h-full w-full object-cover"
                />
              </div>

              {/***button next and previous image */}
              <div className="absolute top-0 w-full h-full hidden items-center  justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handleprevious}
                  className=" p-1 rounded-full  text-5xl z-10 text-zinc-200"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNext}
                  className=" p-1 rounded-full  text-5xl z-10 text-zinc-200 "
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>

              <div className="container mx-auto">
                <div className=" w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-4xl lg:text-6xl text-white drop-shadow-2xl ">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-2">
                    <FaStar />

                    <p>Rating : {Number(data.vote_average).toFixed(1)}+</p>
                  </div>
                  <Link to={"/" + data?.media_type + "/" + data.id}>
                    <button className=" bg-white px-4 py-2 text-black font-bold rounded mt-4 mb-5  hover:bg-red-500 hover:text-white shadow-md transition-all hover:scale-105 flex items-center justify-around gap-2">
                      <span>
                        <FaPlay />
                      </span>
                      Play Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Banner;
