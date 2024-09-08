import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ACTIVATE_MOCK } from "@data/Data";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function HomeActivate() {
  return (
    <FadeInSection>
      <div className="flex flex-col items-center space-y-8 py-5 mb-5 md:container">
        <h2 className="uppercase text-orange-500 text-5xl font-bold">
          Các hoạt động của chúng tôi
        </h2>
        <Carousel
          className="w-full relative"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent>
            {ACTIVATE_MOCK.map((item) => (
              <CarouselItem
                key={item.id}
                className="w-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative w-full h-[400px] overflow-hidden">
                  <Image
                    src={item.url_image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
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
