"use client";

import CountUp from "react-countup";
import FadeInSection from "./FadeInSection";

export default function HomeResult() {
  return (
    <FadeInSection>
      <div className="bg-black my-5 bg-custom-image bg-cover">
        <div className="flex flex-col justify-between items-center text-white py-10 space-y-5 px-5">
          <h3 className="text-[28px] md:text-4xl font-semibold">
            Những con số biết nói
          </h3>
          <div className="md:flex justify-between items-center max-w-4xl w-full px-1">
            {[
              { label: "Người tham gia", end: 500 },
              { label: "Xuất cơm", end: 10000 },
              { label: "Chai nước", end: 5000 },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center py-7 space-y-2"
              >
                <h4 className="text-lg md:text-xl">{item.label}</h4>
                <CountUp
                  className="lg:text-7xl md:text-6xl text-5xl font-sans font-semibold"
                  start={0}
                  end={item.end}
                  duration={2}
                  separator="."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
