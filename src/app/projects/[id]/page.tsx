import ImageSwiper from "@/components/image_swiper";
import { Projects } from "@/lib/constants";
import Link from "next/link";
import React from "react";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = Projects.find((i) => i.id === id);

  return (
    <div className="pb-[100px]">
      <div className="pattern  text-center  pt-[250px] h-[700px] max-[900px]:h-fit max-[900px]:pb-[200px]">
        <div className="container">
          <h1 className="head_text">{project?.title}</h1>
          <p className="text-light py-[20px] text-center w-full mx-auto max-w-[900px]  text-[20px] max-[600px]:text-[18px]">
            This page contains the details about{" "}
            <span className="font-bold ">{`${project?.title}`}</span> which
            includes the Project Overview, Tools Used and Live Links to the
            official product.
          </p>

          <div className="flex justify-center">
            <Link
              target="_blank"
              href={
                project?.liveLink
                  ? project?.liveLink === "private"
                    ? "#"
                    : project?.liveLink
                  : ""
              }
              className=""
            >
              <button
                className="btn "
                disabled={project?.liveLink === "private"}
              >
                {project?.liveLink === "private"
                  ? "This link is private"
                  : "Live link"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container2 mt-[100px]">
        <ImageSwiper images={project?.images!} />

        <div className="max-w-[800px] mx-auto">
          <h2 className="sub_head_text mt-[50px]">Project Overview</h2>

          <div
            dangerouslySetInnerHTML={{ __html: project?.longDesc ?? "" }}
            className="txt decs my-[20px] :[&>ul]:flex-col [&>ul]:space-y-3 [&>ul]:list-disc [&>ul]:pl-5 "
          />

          <h2 className="font-poppins text-[20px] mt-[50px]">Tools used:</h2>

          <div className="flex flex-wrap gap-[15px] mt-[10px]">
            {project?.tools.map((i, key) => {
              return (
                <div
                  key={key}
                  className="bg-background2 py-[10px] px-[20px]  font-medium text-[16px] text-light rounded-[5px]"
                >
                  {i}
                </div>
              );
            })}
          </div>

          <h2 className="font-poppins text-[20px] mt-[50px]">Links:</h2>

          <div className="flex gap-[20px] mt-[10px] max-[500px]:flex-col">
            <Link
              target="_blank"
              href={
                project?.liveLink
                  ? project?.liveLink === "private"
                    ? "#"
                    : project?.liveLink
                  : ""
              }
              className="max-[500px]:w-full"
            >
              <button
                className="btn max-[500px]:w-full"
                disabled={project?.liveLink === "private"}
              >
                {project?.liveLink === "private"
                  ? "This link is private"
                  : "Live link"}
              </button>
            </Link>

            <Link
              target="_blank"
              href={
                project?.githubLink
                  ? project?.githubLink === "private"
                    ? "#"
                    : project?.githubLink
                  : ""
              }
              className="max-[500px]:w-full"
            >
              <button
                className="btn max-[500px]:w-full"
                disabled={project?.githubLink === "private"}
              >
                {project?.githubLink === "private"
                  ? "This repo is private"
                  : "Github"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
