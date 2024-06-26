"use client";
import React from "react";
import coursesData from "./coursesData";
import SingleCourse from "./SingleCourse";
import SectionHeader from "../../Common/SectionHeader";
import { motion } from "framer-motion";

const Course = () => {
  return (
    <>
      {/* <!-- ===== Courses Start ===== --> */}
      <section id="courses" className="py-10 lg:py-25 xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Relevant Coursework",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          {/* <!-- Download grades transcript button start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto text-center"
          >
            <a
              href="/documents/Official Transcript - Winter 2024.pdf"
              download="Benjamin Zapata - Online Resume.pdf"
              aria-label="Download Resume button"
              className="rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              Download Grades Transcript (Winter 2024)
            </a>
          </motion.div>
          {/* <!-- Download grades transcript button end --> */}

          <div className="mt-12.5 flex grid grid-cols-1 gap-7.5 text-center md:grid-cols-2 lg:mt-15 lg:grid-cols-4 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {coursesData.map((course, key) => (
              <SingleCourse course={course} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Course;
