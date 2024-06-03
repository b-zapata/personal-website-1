"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../../Common/SectionHeader";

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-25 md:px-8 lg:py-25 xl:py-25 2xl:px-0">
        {/* <!-- Section Title Start --> */}
        <SectionHeader
          headerInfo={{
            title: "",
            subtitle: "Enrolled Degrees",
            description: ``,
          }}
        />
        {/* <!-- Section Title End --> */}

        <div className="flex flex-wrap items-center justify-center gap-8">
          <Image
            src="/images/logo/BYU-logo.png"
            alt="BYU Logo"
            width={150}
            height={150}
            className="rounded-lg"
          />

          {/* <!-- Card begins here --> */}
          <div className="w-full max-w-[1200px] rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-15 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-12">
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
                  Brigham Young University
                </h2>
                <h3 className="xl:text-sectionsubtitle mb-5 w-11/12 text-xl font-bold text-black dark:text-white">
                  B.S. - M.S. in Information Systems
                </h3>
                <p className="my-5">⚡ Cumulative GPA: 3.90</p>
                <p className="my-5">
                  ⚡ Emphasis on Software Development, Machine Learning, and
                  Cybersecurity
                </p>
                <p className="my-5">
                  ⚡ Full merit-based BYU scholarship recipient
                </p>
                <p className="my-5">
                  ⚡ Numbered among Marriot School Dean's List sophomore year
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  );
};

export default CTA;
