import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="container flex">
      <div className=" flex flex-col justify-between items-center w-full">
        <div className="flex flex-col justify-between items-center mt-5 w-full  space-y-5 lg:space-y-0 lg:flex-row ">
          <div className="pb-5">
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/nang-yeu-thuong-raw-logo.png"
                alt="Nắng yêu thương logo"
                width={140}
                height={140}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="lg:flex space-y-3 lg:space-y-0 lg:space-x-14 w-full lg:w-auto">
            <div className=" lg:flex lg:justify-normal space-y-3 lg:space-y-0 lg:space-x-14 md:flex md:space-y-0 md:justify-between md:items-start">
              <div className="flex flex-col justify-center items-center space-y-2 w-full lg:w-auto lg:flex-none lg:items-start lg:justify-normal">
                <h3 className="uppercase text-orange-500 text-xl font-bold">
                  Hoạt động
                </h3>
                <p>Phát cơm từ thiện</p>
                <p>Gây quỹ hỗ trợ hoàn cảnh khó khăn</p>
              </div>
              <div className="flex flex-col justify-center items-center space-y-2 w-full lg:w-auto lg:flex-none lg:items-start lg:justify-normal">
                <h3 className="uppercase text-orange-500 text-xl font-bold">
                  Liên hệ với chúng tôi
                </h3>
                <p>0942250117</p>
                <p>nangyeuthuong.org@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center space-y-2 w-full lg:w-auto lg:flex-none lg:items-start">
              <h3 className="uppercase text-orange-500 text-xl font-bold">
                Nhận thông báo
              </h3>
              <Input
                type="email"
                placeholder="Nhập Email"
                className="w-full outline-none rounded-none focus:rounded-none focus-visible:ring-offset-0 focus-visible:ring-0"
              />
              <Button className="bg-orange-500 hover:bg-orange-700 px-10 text-base">
                Gửi
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-14">
          <p className="text-sm opacity-50 font-medium">
            © 2024 Created By Tùng Văn
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
