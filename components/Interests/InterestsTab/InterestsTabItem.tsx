import React from "react";
import { InterestTab } from "@/types/interestTab";
import { motion } from "framer-motion";
import Image from "next/image";

const InterestsTabItem = ({ interestTab }: { interestTab: InterestTab }) => {
  const { id, interests } = interestTab;

  return (
    <>
      <div>
        {/* Image on left begins */}
        <div className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            {interests.map((interest, index) => {
              const isOdd = interest.interestId % 2 !== 0;
              return (
                <div
                  key={index}
                  className="mt-12.5 flex items-center gap-8 lg:gap-32.5"
                >
                  {isOdd ? (
                    <>
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
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
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
                            x: 20,
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
                        className="animate_right md:w-1/2"
                      >
                        <h2 className="xl:text-sectionsubtitle mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                          {interest.title}
                        </h2>
                        <p>{interest.description}</p>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: 20,
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
                        className="animate_right md:w-1/2"
                      >
                        <h2 className="xl:text-sectionsubtitle mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                          {interest.title}
                        </h2>
                        <p>{interest.description}</p>
                      </motion.div>
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
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
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
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Image on left ends */}
        {/* Commenting out this code to save it in case the surgery above doesn't work */}
        {/* Image on left begins */}
        {/*}
        <div className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="mt-12.5 flex items-center gap-8 lg:gap-32.5"
              >
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
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
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
                      x: 20,
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
                  className="animate_right md:w-1/2"
                >
                  <h2 className="xl:text-sectionsubtitle mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                    {interest.title}
                  </h2>
                  <p>{interest.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        {/* Image on left ends */}

        {/* Image on right side begins */}
        {/* We should compare the differences in the code between the left-aligned image and the right-aligned image to see if we can condense the different divs}
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              <h2 className="xl:text-sectionsubtitle mb-4 w-11/12 text-3xl font-bold text-black dark:text-white">
                {interest.title}
              </h2>
              <p>{interest.description}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/about-light-02.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
        {*/}
        {/* Image on right side ends */}
      </div>
    </>
  );
};

export default InterestsTabItem;
