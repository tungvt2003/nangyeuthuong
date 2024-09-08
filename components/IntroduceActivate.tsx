import Image from "next/image";
import React from "react";
import FadeInSection from "./FadeInSection";

export default function IntroduceActivate() {
  return (
    <FadeInSection>
      <div className="md:container my-5 px-2">
        <div className="flex flex-col justify-center items-center space-y-7">
          <div className="title py-5 md:py-10">
            <h2 className="uppercase text-[#6a56a6] font-medium text-3xl md:text-4xl">
              Các hoạt động của chúng tôi
            </h2>
          </div>
          <div className="flex items-center flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
            <div className="h-[500px] md:h-[753px] w-full md:w-1/2">
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2Ft_Nsf824yH%2F&width=500&show_text=false&height=753&appId"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  overflow: "hidden",
                }}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="space-y-8 w-full md:w-1/2">
              <h2 className="uppercase text-[#6a56a6] font-medium text-3xl lg:text-5xl">
                Phát Cơm Thiện Nguyện
              </h2>
              <p className="text-[#716c80] lg:text-lg">
                Những buổi phát cơm miễn phí tại các bệnh viện không chỉ mang
                lại những bữa ăn dinh dưỡng mà còn tạo ra một không gian giao
                lưu, chia sẻ giữa các bệnh nhân và gia đình. Đây không chỉ là cơ
                hội để họ cảm thấy được quan tâm mà còn là dịp để chia sẻ những
                lo lắng, hy vọng và niềm tin trong cuộc sống.
              </p>
            </div>
          </div>
          <div className="flex items-center md:space-x-5 space-y-5 md:space-y-0 flex-col md:flex-row">
            <div className="space-y-8 w-full md:w-1/2">
              <h2 className="uppercase text-[#6a56a6] font-medium text-3xl lg:text-5xl">
                Chăm sóc người lớn tuổi
              </h2>
              <p className="text-[#716c80] lg:text-lg">
                Những buổi hoạt động chăm sóc người lớn tuổi tại các bệnh viện
                không chỉ mang lại những bữa ăn dinh dưỡng mà còn tạo ra một
                không gian giao lưu, chia sẻ giữa các bệnh nhân và gia đình. Đây
                không chỉ là cơ hội để họ cảm thấy được quan tâm mà còn là dịp
                để chia sẻ những lo lắng, hy vọng và niềm tin trong cuộc sống.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-[600px] md:h-[753px] flex flex-col relative">
              <Image
                src="/assets/images/introduceActivate.jpg"
                alt="Chăm sóc người lớn tuổi"
                fill
                className="rounded-[10%]"
                style={{
                  border: "none",
                  overflow: "hidden",
                  filter:
                    "brightness(100%) contrast(100%) saturate(100%) blur(0px) hue-rotate(0deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
