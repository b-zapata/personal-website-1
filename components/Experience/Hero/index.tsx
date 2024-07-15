"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-32.5">
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
              className="animate_left relative mx-auto aspect-[588/526.5] w-full md:block md:w-1/2"
            >
              <div className="relative flex w-full justify-center md:justify-end">
                <Image
                  src="images/icon/briefcase-square-ai.jpeg"
                  alt="About"
                  className="rounded-full object-cover dark:hidden"
                  width={1024}
                  height={1024}
                />
                <Image
                  src="images/icon/briefcase-square-ai.jpeg"
                  alt="About"
                  className="hidden rounded-full object-cover dark:block"
                  width={1024}
                  height={2000}
                />
              </div>
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
              className="animate_right w-full md:w-1/2"
            >
              <h1 className="relative mb-3 text-center text-3xl font-bold text-black dark:text-white xl:text-hero">
                Experience
              </h1>
              <p className="text-center text-metatitle2">
                My Professional Journey
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
