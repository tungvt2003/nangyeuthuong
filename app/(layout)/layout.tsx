"use client";

import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getTitle = () => {
    switch (pathname) {
      case "/hoat-dong":
        return "Hoạt Động";
      case "/gioi-thieu":
        return "Giới Thiệu";
      case "/chi-tiet":
        return "Chi Tiết Qua Các Con Số";
      case "/manh-thuong-quan":
        return "Mạnh Thường Quân";
      default:
        return "Trang Chủ";
    }
  };

  const title = getTitle();

  return (
    <>
      <section className="bg-black bg-layout-image bg-cover bg-center bg-no-repeat min-h-10 max-h-60">
        <div className="container">
          <div className="flex flex-col items-start px-0 py-8 md:py-14 lg:py-20 space-y-4">
            <h3 className="text-6xl font-bold text-white">{title}</h3>
            {title === "Giới Thiệu" && (
              <p className="text-white text-lg font-medium">
                Trang Chủ - Giới Thiệu
              </p>
            )}
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
