import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import Timeline from "../../Timeline";

const ExperiencesTabItem = ({
  experienceTab,
}: {
  experienceTab: FeatureTab;
}) => {
  const { title, desc1, desc2, image, imageDark } = experienceTab;

  return (
    <>
      <div>
        <main className="min-h-screen bg-gray-100 py-10">
          <h1 className="mb-10 text-center text-4xl font-bold">My Timeline</h1>
          <Timeline />
        </main>
      </div>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>
      </div>
    </>
  );
};

export default ExperiencesTabItem;