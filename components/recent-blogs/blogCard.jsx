import Image from "next/image";
import React from "react";

export const BlogCard = () => {
  return (
    <div className="bg-white rounded mx-5 w-80 h-96 pb-5 space-y-3 shadow-xl shadow-blue-700/20">
      <div className="bg-slate-300 w-full h-1/2">
        <img
          className="h-full w-full object-cover rounded"
          src="https://picsum.photos/id/237/200/300"
          alt="blog-card"
        />
      </div>
      <div className="px-5 text-slate-700 text-2xl font-semibold line-clamp-2">This is a blog title.</div>
      <div className="text-slate-700 line-clamp-3 px-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla non reiciendis laborum impedit enim commodi,
        doloribus ullam magni distinctio aliquid eveniet nesciunt quibusdam accusamus voluptatem voluptas ratione autem?
      </div>
      <div className="px-5">
        <button className="text-white transition-all px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105 active:scale-90">
          Read More
        </button>
      </div>
    </div>
  );
};
