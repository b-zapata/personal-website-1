"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    // Set an interval to update the dynamic text index every 3 seconds
    const intervalId = setInterval(() => {
      // Calculate the next index
      const nextIndex = (dynamicTextIndex + 1) % dynamicTextValues.length;
      // Update the dynamic text index
      setDynamicTextIndex(nextIndex);
    }, 5000); // Change text every 3 seconds

    // Clear the interval when component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [dynamicTextIndex]); // Re-run effect when dynamicTextIndex changes

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Hi, I'm <span className="text-primary">Benjamin Zapata</span>
              </h1>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                a {dynamicTextValues[dynamicTextIndex]}.
                {/* Display dynamic text here */}
              </h1>
              <p>
                Solid Pro - Packed with all the key integrations you need for
                swift SaaS startup launch, including - Auth, Database, Sanity
                Blog, Essential Components, Pages and More. Built-winth -
                Next.js 13, React 18 and TypeScript.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />

                <div className="relative w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/prof-headshot-hd-transparent.png"
                    alt="Hero"
                    layout="responsive"
                    width={700}
                    height={444}
                  />
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
