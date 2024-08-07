"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Typical from "react-typical";
import { motion } from "framer-motion";

const Hero = () => {
  const [dynamicTextIndex, setDynamicTextIndex] = useState(0);
  const [email, setEmail] = useState("");

  // Define an array of dynamic text values
  const dynamicTextValues = [
    "Developer",
    "Data Enthusiast",
    "Cybersecurity Geek",
    "Pianist",
    "Social Dancer",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h5>
                <b>WELCOME TO MY WORLD</b>
              </h5>
              <br />
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Hi, I'm <span className="text-primary">Benjamin Zapata</span>
              </h1>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <Typical
                  steps={[
                    "a Developer.",
                    5000,
                    "a Data Enthusiast.",
                    5000,
                    "a Cybersecurity Geek.",
                    5000,
                    "a UI/UX Designer.",
                    5000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h1>
              <p>
                Driven by curiosity and fueled by a passion for technology, I
                specialize in crafting robust and scalable solutions. My strong
                communication skills enable me to translate technical jargon
                into clear, actionable insights, making me an effective liaison
                between development teams and stakeholders. Let's build
                something amazing together.
              </p>

              <div>
                <h4 className="mt-5 text-black dark:text-white">
                  CONNECT WITH ME
                </h4>
                <div className="mt-5 flex items-center space-x-5">
                  <a
                    href="https://www.linkedin.com/in/benjamin-zapata/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"images/brand/brand-linkedin.svg"}
                      width={36}
                      height={36}
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://github.com/b-zapata"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={"images/brand/brand-github-alt2.svg"}
                      width={36}
                      height={36}
                      className="hidden dark:block"
                      alt="GitHub"
                    />
                    <Image
                      src={"images/brand/brand-github.svg"}
                      width={36}
                      height={36}
                      className="dark:hidden"
                      alt="GitHub"
                    />
                  </a>
                  <a href="/contact" rel="noopener noreferrer">
                    <Image
                      src={"images/icon/icon-email.svg"}
                      width={36}
                      height={36}
                      alt="Email"
                    />
                  </a>

                  <a
                    href="/documents/Resume - Online Copy.pdf"
                    download="Benjamin Zapata - Online Resume.pdf"
                    aria-label="Download Resume button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="animate_right relative md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="images/shape/shape-01.png"
                  alt="Shape 1"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="images/shape/shape-02.svg"
                  alt="Shape 2"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="images/shape/shape-03.svg"
                  alt="Shape 3"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />

                <div className="relative mb-10 flex justify-center">
                  <div className="w-3/4">
                    <Image
                      className="w-3/4 rounded-full object-cover shadow-solid-l dark:hidden"
                      src="images/hero/prof-headshot-og-square-lower.jpg"
                      alt="Hero"
                      layout="responsive"
                      width={700}
                      height={444}
                    />
                    <Image
                      className="hidden w-3/4 rounded-full object-cover shadow-solid-l dark:block"
                      src="images/hero/prof-headshot-og-square-lower.jpg"
                      alt="Hero"
                      layout="responsive"
                      width={200}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
