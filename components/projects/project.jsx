import Image from "next/image";
import React from "react";

export const Project = ({ title, description, image, liveUrl, isOpen, repoUrl }) => {
  return (
    <div className="flex py-5 my-16 justify-between">
      <div className="flex-1">
        <h3 className="text-3xl mb-4 text-slate-700 font-semibold">{title}</h3>
        <p className="mb-4 text-2xl text-slate-700 max-w-[45ch]">{description}</p>
        <div className="flex gap-3">
          <button className="text-white px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">See Live</button>
          <span
            className={`${
              isOpen ? "text-blue-500 hover:text-blue-600" : "cursor-not-allowed text-blue-300"
            }  px-4 py-2`}
          >
            {isOpen ? "Source Code" : "Proprietary"}
          </span>
        </div>
      </div>
      <div className="flex-1 transition-all relative flex justify-end shadow-md hover:shadow-2xl">
        <picture>
          <source srcSet={`http://localhost:4000${image.avif}`} type="image/avif" />
          <source srcSet={`http://localhost:4000${image.webp}`} type="image/webp" />
          <img
            className="rounded"
            src={`http://localhost:4000${image.original}`}
            alt={title}
            width="1200px"
            height="auto"
          />
        </picture>
        {/* <Image src={`http://localhost:4000/${image}`} width={1280} height={720} alt="planebazaar" /> */}
      </div>
    </div>
  );
};
