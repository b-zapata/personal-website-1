import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Timeline = () => {
  const jobs = [
    {
      startDate: "Jul 2023",
      endDate: "Present",
      title: "Computer Staff Representative",
      employer: "Brigham Young University - Math Department",
      location: "Hermosillo, Mexico",
      bulletPoint1:
        "Architeted new math major website to improve traffic by 30%",
      bulletPoint2:
        "Modernize department equipment to ensure up-to-date technology for faculty and students",
      bulletPoint3:
        "Offer on-demand tech support to faculty and students to enhance learning experience",
    },
    {
      startDate: "Feb 2021",
      endDate: "Mar 2023",
      title: "Volunteer Representative",
      employer: "The Church of Jesus Christ of Latter-day Saints",
      location: "Santiago, Chile & Rio de Janeiro, Brazil",
      bulletPoint1:
        "Averaged 70+ work hours a week teaching life skills to people from various backgrounds",
      bulletPoint2:
        "Served in leadership positions of increasing scope to boost missionary results and training",
      bulletPoint3:
        "Fulfilled key administrative and logistical responsibilities to ensure well-being of 150+ missionaries",
    },
    {
      startDate: "Mar 2020",
      endDate: "Dec 2020",
      title: "Mendix Developer",
      employer: "Brigham Young University - Student Life Technology",
      location: "Provo, UT",
      bulletPoint1:
        "Architected 3 department websites with API integrations to Strava and other platforms to improve user experience",
      bulletPoint2:
        "Conducted regular consultations with stakeholders to align website development with their expectations",
      bulletPoint3:
        "Pioneered development in the Mendix platform to offer personalized training to 2 team members",
    },
  ];

  return (
    <section className="overflow-hidden px-4 py-25 md:px-8 lg:py-25 xl:py-25 2xl:px-0">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <Image
            src="/images/logo/BYU-logo.png"
            alt="BYU Logo"
            width={150}
            height={150}
            className="rounded-lg"
          />
          {/* <!-- Card begins here --> */}
          <div
            key={index}
            className="w-full max-w-[1200px] rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-15 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-12"
          >
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
                  {job.title}
                </h2>
                <h3 className="xl:text-sectionsubtitle mb-5 w-11/12 text-xl font-bold text-black dark:text-white">
                  {job.employer}
                </h3>
                <p className="my-5">⚡ {job.bulletPoint1}</p>
                <p className="my-5">⚡ {job.bulletPoint2}</p>
                <p className="my-5">⚡ {job.bulletPoint3}</p>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
