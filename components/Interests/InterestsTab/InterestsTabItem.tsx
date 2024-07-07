import React from "react";
import { InterestTab } from "@/types/interestTab";
import { motion } from "framer-motion";
import Image from "next/image";

const InterestsTabItem = ({ interestTab }: { interestTab: InterestTab }) => {
  const { id, interests } = interestTab;

  return (
    <>
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
    </>
  );

  /*
  return (
    <>
      <div>
        {interests.map((interest, index) => (
          <div className="flex items-center gap-8 lg:gap-19">
            <div key={index}>
              <div className="md:w-1/2">
                <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                  {interest.title}
                </h2>
                <p className="mb-5">{interest.description}</p>
              </div>
              <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
                <Image
                  src={
                    interest.imageLight
                      ? interest.imageLight
                      : interest.imageDark
                  }
                  alt={interest.title}
                  className="dark:hidden"
                />
                <Image
                  src={interest.imageDark}
                  alt={interest.title}
                  className="hidden dark:block"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
  */

  /*
  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {}
          </h2>
          <p className="mb-5">{}</p>
          <p className="w-11/12">{}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image src={} alt={} fill className="dark:hidden" />
          <Image
            src={}
            alt={}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
*/
};

export default InterestsTabItem;
