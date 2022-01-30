import React from "react";
import { useGetMeQuery } from "../../redux/services/me";
import { Project } from "./project";

export const Projects = () => {
  const { data, error, isLoading } = useGetMeQuery();
  return (
    <div className="min-h-screen">
      <section className="container mx-auto mb-20">
        <h2 className="text-slate-900 text-center text-4xl my-6 font-semibold">PROJECTS</h2>
        {isLoading && "loading..."}
        {error && "something went wrong"}
        {data?.projects.map((project) => (
          <Project
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            liveUrl={project.liveUrl}
            isOpen={project.isOpen}
            repoUrl={project?.repoUrl}
          />
        ))}
        <div className="flex justify-center">
          <button className="text-white transition-all px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 hover:scale-105 active:scale-90">
            MORE
          </button>
        </div>
      </section>
    </div>
  );
};
