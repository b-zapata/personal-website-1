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
        </div>
      </section>

      {/* <!-- ===== About One Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            {/* Image Section */}
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
              className="animate_left relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
              style={{ order: 1 }} // Set order to 1 on all screens
            >
              {/* Show image block on small screens, hide on medium and above */}
              <div className="mb-8 block md:hidden">
                <Image
                  src="/images/about/me-casual-heashot.jpg"
                  alt="About"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src="/images/about/me-casual-headshot.jpg"
                  alt="About"
                  className="hidden dark:block"
                  fill
                />
              </div>
              {/* Show image block on medium screens and above, hide on small screens */}
              <div className="hidden md:block">
                <Image
                  src="/images/about/me-casual_3.jpg"
                  alt="About"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src="/images/about/me-casual_3.jpg"
                  alt="About"
                  className="hidden dark:block"
                  fill
                />
              </div>
            </motion.div>
            {/* Text Section */}
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
              className="animate_right md:w-1/2"
              style={{ order: 2 }} // Set order to 2 on all screens
            >
              <p>
                I was born in Santiago, Chile in 2001. When I was 8, I moved to
                Antofagasta in the north of Chile, where I lived most of my
                teenage years. At 16, I came to the United States as an
                international exchange student and attended Liahona Preparatory
                Academy, where I did my senior year and graduated high school.
                At age 17, I started studying at BYU, exploring various fields
                and career paths. In my sophomore year, I decided to major in
                Information Systems.
              </p>
              <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white"></h3>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About One End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="mb-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row lg:gap-32.5">
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
              <p>
                I did five semesters at BYU before leaving as a volunteer
                missionary for The Church of Jesus Christ of Latter-day Saints,
                where I served in my native city of Santiago, Chile for a year,
                and then in Rio de Janeiro, Brazil, for the remaining year of my
                mission. I recently completed the Information Systems junior
                core, and am currently preparing to start the integrated Masters
                of Information Systems program at BYU. I am the youngest of four
                siblings and the proud uncle of two nephews and three nieces. I
                love trying out and learning new things—you can find a list of
                my favorite hobbies and interests{" "}
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
              className="animate_right relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
            >
              <div className="mb-8 block md:hidden">
                <Image
                  src="./images/about/family_4.png"
                  alt="About"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src="./images/about/family_4.png"
                  alt="About"
                  className="hidden dark:block"
                  fill
                />
              </div>
              <div className="hidden md:block">
                <Image
                  src="./images/about/family_4.png"
                  alt="About"
                  className="dark:hidden"
                  fill
                />
                <Image
                  src="./images/about/family_4.png"
                  alt="About"
                  className="hidden dark:block"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
