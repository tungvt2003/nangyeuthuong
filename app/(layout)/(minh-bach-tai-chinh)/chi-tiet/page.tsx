import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CHI TIẾT QUA CÁC CON SỐ – Nắng Yêu Thương",
  description: "CHI TIẾT QUA CÁC CON SỐ",
};

export default function ChiTietPage() {
  return (
    <div className="md:container">
      <div className="flex items-center justify-center my-7">
        <iframe
          title="file_example_XLS_10"
          width="1000"
          height="600"
          style={{ maxWidth: "100%" }}
          src="//view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fnangyeuthuong.org%2Fwp-content%2Fuploads%2F2024%2F06%2Ffile_example_XLS_10.xls&amp;embedded=true"
          sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
