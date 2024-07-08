"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "My Story",
              description: `A brief overview of my life.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 flex items-center gap-8 lg:gap-32.5">
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
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
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
              <p>
                I was born in Santiago, Chile, and when I was 8, I moved to
                Antofagasta, in the north of Chile, where I lived most of my
                teenage years. When I was 16, I came to the United States as an
                international exchange student and attended Liahona Preparatory
                Academy, where I did my senior year and graduated high school.
                At age 17 I started studying at BYU. I took classes from varying
                fields and got familiar with different career paths, and on my
                sophomore year, I finally decided on majoring in Information
                Systems.
              </p>
              <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white"></h3>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
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
              <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
                I did five semesters at BYU before leaving as a volunteer
                missionary for The Church of Jesus Christ of Latter-day Saints,
                where I served in my native city of Santiago, Chile for a year,
                and then in Rio de Janeiro, Brazil, for the remaining year of my
                mission. I recently completed the Information Systems junior
                core, and am currently preparing to start the integrated Masters
                of Information Systems program at BYU. I am the youngest of four
                siblings and the proud uncle of two nephews and three nieces. I
                love trying out and learning new things—you can find a list of
                all my interests{" "}
                <a href="/interests" className="text-primary">
                  here
                </a>
                .
              </p>
              <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white"></h3>
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
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
