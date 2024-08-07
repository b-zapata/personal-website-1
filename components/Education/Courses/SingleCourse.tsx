import React from "react";
import { Course } from "@/types/course";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleCourse = ({ course }: { course: Course }) => {
  const { link, title, subtitle, description } = course;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            {title}
          </h3>
          <h5 className="xl:text-itemsubtitle mb-5 mt-2.5 text-xl text-black dark:text-white">
            {subtitle}
          </h5>
          <p>{description}</p>
        </a>
      </motion.div>
    </>
  );
};

export default SingleCourse;
