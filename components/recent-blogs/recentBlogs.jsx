import Image from "next/image";
import React from "react";
import { BlogCard } from "./blogCard";

export const RecentBlogs = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(circle at left bottom, #3B82F6 , #6c63ff)",
        clipPath: "polygon(0 10%,100% 0,100% 90%,0 100%)",
        paddingTop: "10%",
        paddingBottom: "10%",
      }}
    >
      <section className="container mx-auto mb-20">
        <h2 className="text-white text-center text-4xl my-6 font-semibold">Recent Blogs</h2>
        <div className="flex justify-evenly my-16">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </div>
  );
};
