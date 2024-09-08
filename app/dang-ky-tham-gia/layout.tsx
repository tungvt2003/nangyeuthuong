import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ĐĂNG KÍ THAM GIA – Nắng Yêu Thương",
  description: "ĐĂNG KÍ THAM GIA – Nắng Yêu Thương",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
