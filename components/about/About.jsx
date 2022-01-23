import Image from "next/image";

export const About = () => {
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
      <section className="container m-auto">
        <h3 className="text-white text-center text-4xl my-6 font-semibold">ABOUT</h3>
        <p className="text-white text-2xl m-auto mb-6 w-3/4">
          I am Satyaranjan Rout. I specialize in creating beautiful, maintainable, professional websites using best
          practices and the latest technologies resulting in a fast and user-friendly experience.
        </p>
        <p className="text-white text-2xl m-auto mb-6 w-3/4">
          I have done freelancing, worked in a product based startup and currently working in a service based company.
          Expert in anything related to react js like redux, next js, react router, react query etc.I am also really
          good with node, express, MySQL, and mongo db.
        </p>
      </section>
      <section className="container m-auto">
        <h3 className="text-white text-center text-4xl my-6 font-semibold">SKILLS</h3>
        <div className="w-3/4 mx-auto">
          {[
            "html",
            "css",
            "sass",
            "bootstrap",
            "tailwind",
            "javascript",
            "react",
            "redux",
            "next js",
            "framer motion",
            "node js",
            "express js",
            "mongo db",
            "mysql",
          ].map((skill) => (
            <button
              key="skill"
              className="text-blue-500 mr-3 mb-3 text-lg px-4 py-2 uppercase bg-white rounded-md hover:scale-105 active:scale-90"
            >
              {skill}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
