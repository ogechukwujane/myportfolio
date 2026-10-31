import { Projects } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import { ProjectImageSlider } from "./_components/project-image-slider";
import { FiArrowUpRight, FiLock } from "react-icons/fi";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = Projects.find((i) => i.id === id);

  const isPrivate = !project?.liveLink || project.liveLink === "private";

  return (
    <div className="pb-[100px]">
      <ProjectImageSlider images={project?.images ?? []}>
        <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4),0_4px_28px_rgba(0,0,0,0.45)] sm:text-4xl">
          {project?.title}
        </h1>

        <p className="mx-auto mt-3 max-w-[480px] text-[15px] leading-relaxed text-white/85 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] sm:text-base">
          Details about{" "}
          <span className="font-semibold text-white">{project?.title}</span>,
          including the project overview, tools used and the live link.
        </p>

        <div className="mt-6 flex justify-center">
          {isPrivate ? (
            <button className="btn inline-flex items-center gap-2" disabled>
              <FiLock aria-hidden="true" />
              This link is private
            </button>
          ) : (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex items-center gap-2 no-underline"
            >
              Live link
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          )}
        </div>
      </ProjectImageSlider>

      <div className="container2 mt-[50px] md:mt-[80px]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="sub_head_text mt-[50px]">Project Overview</h2>

          <div
            dangerouslySetInnerHTML={{ __html: project?.longDesc ?? "" }}
            className="
   txt decs my-4
    [&>h3]:text-base
    [&>h3]:font-semibold
    [&>h3]:mt-4
    [&>h3]:mb-2
    [&>h3:first-child]:mt-0
    [&>p]:mb-2
    [&>ul]:list-disc
    [&>ul]:pl-5
    [&>ul]:space-y-1.5
    [&>ul>li]:pl-1
    [&>ul>li>strong]:font-medium
  "
          />

          <h2 className="font-poppins text-[20px] mt-[50px]">Tools used:</h2>

          <div className="mt-3 flex flex-wrap gap-2">
            {project?.tools.map((tool) => (
              <div
                key={tool}
                className="rounded-md border border-border/50 bg-background2 px-3 py-1.5 text-sm font-medium text-light"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
