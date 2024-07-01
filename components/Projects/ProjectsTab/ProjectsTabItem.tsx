import React from "react";
import { ProjectTab } from "@/types/projectTab";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectsTabItem = ({ projectTab }: { projectTab: ProjectTab }) => {
  const { id, projects } = projectTab;

  return (
    <>
      <div className="overflow-hidden px-4 py-0 md:px-8 lg:py-0 xl:py-0 2xl:px-0">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-wrap items-center justify-center gap-8 py-10"
          >
            {/* <!-- Card begins here --> */}
            <div
              key={index}
              className="w-full max-w-[1200px] rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-15 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-12"
            >
              <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -20,
                    },

                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_left w-full"
                >
                  <h2 className="xl:text-sectionsubtitle mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                    {project.title}
                  </h2>
                  <p className="my-5">{project.description}</p>
                  {/* Render link if it exists */}
                  {project.link && (
                    <p className="my-5">
                      ⚡{" "}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        See project
                      </a>
                    </p>
                  )}
                  <div className="flex justify-end">
                    {project.codingStacks.map((codingStack, index) => (
                      <span key={index} className="m-5">
                        <Image
                          src={
                            codingStack.iconLight
                              ? codingStack.iconLight
                              : codingStack.iconDark
                          }
                          alt={codingStack.title}
                          width={25}
                          height={25}
                          className="dark:hidden"
                        />
                        <Image
                          src={codingStack.iconDark}
                          alt={codingStack.title}
                          width={25}
                          height={25}
                          className="hidden dark:block"
                        />
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  /*
  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
  */
};

export default ProjectsTabItem;
