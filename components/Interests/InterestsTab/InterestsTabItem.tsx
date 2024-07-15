import React from "react";
import { InterestTab } from "@/types/interestTab";
import { motion } from "framer-motion";
import Image from "next/image";

const InterestsTabItem = ({ interestTab }: { interestTab: InterestTab }) => {
  const { id, interests } = interestTab;

  return (
    <>
      <div>
        <div className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            {interests.map((interest, index) => {
              const isOdd = interest.interestId % 2 !== 0;
              return (
                <div
                  key={index}
                  className={`mt-12.5 flex flex-col-reverse items-center gap-8 ${
                    isOdd ? "md:flex-row" : "md:flex-row-reverse"
                  } lg:gap-32.5`}
                >
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: isOdd ? -20 : 20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_left relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
                  >
                    <Image
                      src={
                        interest.imageLight
                          ? interest.imageLight
                          : interest.imageDark
                      }
                      alt={interest.title}
                      className="dark:hidden"
                      fill
                    />
                    <Image
                      src={interest.imageDark}
                      alt={interest.title}
                      className="hidden dark:block"
                      fill
                    />
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: isOdd ? 20 : -20,
                      },
                      visible: {
                        opacity: 1,
                        x: 0,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="animate_right w-full md:w-1/2"
                  >
                    <h2 className="xl:text-sectionsubtitle mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                      {interest.title}
                    </h2>
                    <p>{interest.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestsTabItem;
