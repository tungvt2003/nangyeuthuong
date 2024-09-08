"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { SPONSOR_MOCK } from "@data/Data";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function HomeSponsor() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      // Do something on select.
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <FadeInSection>
      <div className="flex flex-col items-center space-y-8 container py-5 mb-5">
        <div>
          <h2 className="uppercase text-orange-500 text-5xl font-bold">
            Những mạnh thường quân
          </h2>
        </div>
        <Carousel
          className="w-full relative"
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent>
            {SPONSOR_MOCK.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="w-full md:basis-1/2 lg:basis-1/3 transition-opacity duration-500 ease-in-out"
              >
                <div className="relative w-full overflow-hidden h-[500px]">
                  <Image
                    src={item.url_image}
                    alt={item.name}
                    fill
                    className="object-cover object-center"
                  />
                  {activeIndex === index && (
                    <div className="absolute inset-0 flex flex-col items-center justify-end before:content-[''] before:absolute before:inset-0 before:bg-transparent before:bg-gradient-to-t before:from-black before:to-transparent text-white p-4">
                      <p className="text-lg font-semibold uppercase text-[#e6e7ed] mb-1 transform transition-transform duration-300 ease-out inline-block">
                        {item.name}
                      </p>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="z-40 ml-16" />
          <CarouselNext className="z-40 mr-16" />
        </Carousel>
      </div>
    </FadeInSection>
  );
}
