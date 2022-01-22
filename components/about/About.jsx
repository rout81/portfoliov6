import Image from "next/image";

export const About = () => {
  return (
    <div style={{ background: "radial-gradient(circle at left bottom, #3B82F6 , #6c63ff)"  }}>
      <section className="container flex items-center justify-between m-auto h-screen">
        <div>
          <h1 className="text-6xl font-semibold text-white capitalize leading-normal">
            I design and develop
            <br /> experiences that makes
            <br /> peoples live easier.
          </h1>
          <div className="flex items-center gap-3 mt-8 text-xl">
            <p className="text-white">Check Out My</p>
            <button className="text-white px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600">Works &#8594;</button>
          </div>
        </div>
        <div>
          <Image src="/hero.svg" width="500px" height="300px" alt="hero image" />
        </div>
      </section>
    </div>
  );
};
