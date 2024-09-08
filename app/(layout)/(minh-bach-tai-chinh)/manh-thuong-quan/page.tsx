import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MẠNH THƯỜNG QUÂN – Nắng Yêu Thương",
  description: "MẠNH THƯỜNG QUÂN – Nắng Yêu Thương",
};

export default function SponsorPage() {
  return (
    <div className="md:container">
      <div className="flex items-center justify-center my-7">
        <iframe
          title="Mạnh Thường Quân"
          width="1000"
          height="600"
          style={{ maxWidth: "100%" }}
          src="https://view.officeapps.live.com/op/embed.aspx?src=https%3A%2F%2Fnangyeuthuong.org%2Fwp-content%2Fuploads%2F2024%2F06%2Ffile_example_XLS_10.xls&embedded=true"
          sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-downloads"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
