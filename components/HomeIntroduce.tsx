import Image from "next/image";
import { Button } from "./ui/button";
import FadeInSection from "./FadeInSection";

export default function HomeIntroduce() {
  return (
    <FadeInSection>
      <div className="md:container py-4 md:flex bg-white">
        {/* Text Content */}
        <div className="flex flex-col justify-between space-y-8 md:space-y-5">
          <h1 className="uppercase text-orange-500 text-5xl font-bold">
            Về Chúng Tôi
          </h1>
          <div className="space-y-5 font-normal text-lg">
            <p>
              <span className="font-bold">Nắng Yêu Thương</span> thành lập ngày
              03/11/2019
            </p>
            <p>
              Nhóm hoạt động không vì lợi nhuận, trên nguyên tắc tự tạo vốn,
              nhằm các mục đích: Nhân đạo, từ thiện; Hỗ trợ và khuyến khích phát
              triển văn hóa, giáo dục, y tế, thể dục thể thao, khoa học; Phát
              triển cộng đồng phù hợp quy định của Pháp luật.
            </p>
          </div>
          <Button className="bg-green-500 rounded-3xl px-7 w-28">
            Xem Thêm
          </Button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative overflow-hidden rounded-full w-[17rem] h-[17rem] my-7 mx-5 md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] md:m-16">
            <Image
              src="/assets/images/431013256_823282093164942_3628363132355764580_n.jpg"
              alt="Tình nguyện _ Giới thiệu"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}
