import Image from "next/image";
import React from "react";

export const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto mb-20">
        <h2 className="text-white text-center text-4xl my-6 font-semibold">Recent Blogs</h2>
        <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an <span className="underline">email</span> instead.
              </div>
            </div>
            <div className="mt-8 text-center">
              <Image src="/contact.svg" width={1280} height={720} alt="contact-vector" />
            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input
                className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="mt-8">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
