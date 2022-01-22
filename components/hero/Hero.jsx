import Image from "next/image";

export const Hero = () => {
  return (
    <section className="container flex items-center justify-between m-auto h-[calc(100vh-112px)]">
      <div>
        <h1 className="text-6xl font-semibold text-slate-900 capitalize leading-normal">
          I design and develop
          <br /> experiences that makes
          <br /> peoples live easier.
        </h1>
        <div className="flex items-center gap-3 mt-8 text-xl">
          <p className="text-blue-500">Check Out My</p>
          <button className="text-white px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">Works &#8594;</button>
        </div>
      </div>
      <div>
        <Image src="/hero.svg" width="500px" height="300px" alt="hero image" />
      </div>
    </section>
  );
};
