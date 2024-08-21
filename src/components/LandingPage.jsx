import React from "react";
import { PiArrowUpRightThin } from "react-icons/pi";
const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure mt-40 px-10">
        {["we Create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <div className="w-[11vw] h-[6vw] relative rounded-md bg-red-500 ml-2 mr-2"></div>
                )}
                <h1
                  style={{ fontStretch: "50%", transform: "scale(1,1.2)" }}
                  className="font-founders uppercase font-semibold tracking-tight leading-[7vw] text-[7vw]"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t border-neutral-600 mt-16 flex justify-between items-center py-4 px-10">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((items, index) => {
          return (
            <p key={index} className="text-md font-light tracking-tight leading-none">
              {items}
            </p>
          );
        })}
        <div className="start flex gap-1">
          <div className="px-5 py-1 uppercase text-sm border border-neutral-600 font-light rounded-full">
            Start the Project
          </div>
          <div className="py-1 px-[0.5vw] border border-neutral-600  rounded-full flex items-center justify-center">
            <PiArrowUpRightThin className="text-primary-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
