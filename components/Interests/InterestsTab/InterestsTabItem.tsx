import React from "react";
import { InterestTab } from "@/types/interestTab";
import Image from "next/image";

const InterestsTabItem = ({ interestTab }: { interestTab: InterestTab }) => {
  const { id, interests } = interestTab;

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
