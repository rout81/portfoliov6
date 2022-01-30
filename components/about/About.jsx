import Image from "next/image";
import { useGetMeQuery } from "../../redux/services/me";
import { SkeletonBtn } from "../molecules/skeletonBtn";

export const About = () => {
  const { data, error, isLoading } = useGetMeQuery();
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
        <h2 className="text-white text-center text-4xl my-6 font-semibold">ABOUT</h2>
        {data?.aboutContent.map((content, index) => (
          <p key={index} className="text-white text-2xl m-auto mb-6 w-3/4">
            {content}
          </p>
        ))}
      </section>
      <section className="container mx-auto">
        <h2 className="text-white text-center text-4xl my-6 font-semibold">SKILLS</h2>
        <div className="w-3/4 mx-auto flex justify-between flex-wrap">
          {/* TODO USE GRID INSTEAD OF FLEX FOR BETTER RESULTS */}
          {isLoading && <SkeletonBtn count={30} />}
          {data?.skills.map((skill) => (
            <button
              key={skill}
              className="text-blue-500 mb-3 text-lg px-4 py-2 transition-all ease-in-out uppercase bg-white rounded-md hover:scale-105 active:scale-90"
            >
              {skill}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
