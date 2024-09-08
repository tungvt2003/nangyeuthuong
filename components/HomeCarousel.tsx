"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CAROUSEL_MOCK } from "@data/Data";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <FadeInSection>
      <Carousel
        plugins={[plugin.current]}
        className="relative"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {CAROUSEL_MOCK.map((index) => (
            <CarouselItem key={index.id} className=" w-full">
              <div className="relative w-full h-[500px]">
                <Image
                  src={index.url_image}
                  alt={index.name}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-40 ml-20" />
        <CarouselNext className="z-40 mr-20" />
      </Carousel>
    </FadeInSection>
  );
}
