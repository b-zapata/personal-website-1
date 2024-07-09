"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import technologiesData from "./technologiesData";
import Image from "next/image";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <>
      {/* <!-- ===== Technologies Start ===== --> */}
      <section id="technologies" className="pb-10 lg:pb-25 xl:pb-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Technologies",
              description: `These are the languages and tools I am experienced in.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-2 gap-7.5 text-center sm:grid-cols-3 md:grid-cols-4 lg:mt-15 lg:grid-cols-5 xl:mt-20 xl:grid-cols-6 xl:gap-12.5">
            {technologiesData.map((technology, index) => (
              <motion.div
                key={index}
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
              >
                <span className="m-5 block">
                  <Image
                    src={
                      technology.iconLight
                        ? technology.iconLight
                        : technology.iconDark
                    }
                    alt={technology.title}
                    width={70}
                    height={70}
                    className="dark:hidden"
                  />
                  <Image
                    src={technology.iconDark}
                    alt={technology.title}
                    width={70}
                    height={70}
                    className="hidden dark:block"
                  />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Technologies End ===== --> */}
    </>
  );
};

export default Technologies;
