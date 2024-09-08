import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOẠT ĐỘNG – Nắng Yêu Thương",
  description: "HOẠT ĐỘNG – Nắng Yêu Thương",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
