import { useState } from "react";
import { projectImages } from "../../../../assets/for-slider/images";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Slider = () => {
  let [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(projectImages.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === projectImages.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="w-full md:w-[70%] m-auto pt-10 pb-20 px-4">
      <h1 className="text-gray-400 text-center text-xl md:text-2xl">
        Проекты, которые мы реализовали во время обучения
      </h1>
      <div className="overflow-hidden relative mt-4">
        <div
          className={`flex transition ease-out duration-500`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {projectImages.map((img) => (
            <div
              className="min-w-full h-48 md:h-64 overflow-hidden flex items-center justify-center"
              key={img}
            >
              <img
                src={img}
                className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                alt="Project"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <BsArrowLeftCircleFill
            onClick={previousSlide}
            className="cursor-pointer  text-3xl md:text-4xl hover:text-slate-800 transition-colors mr-2 bg-white rounded-full"
          />
          <BsArrowRightCircleFill
            onClick={nextSlide}
            className="cursor-pointer  text-3xl md:text-4xl hover:text-slate-800 transition-colors ml-2 bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
