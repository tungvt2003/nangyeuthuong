import HomeResult from "@components/HomeResult";
import IntroduceActivate from "@components/IntroduceActivate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIỚI THIỆU – Nắng Yêu Thương",
  description: "GIỚI THIỆU – Nắng Yêu Thương",
};

export default function IntroducePage() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-start space-y-8 py-20">
          <div>
            <h2 className="text-[#F84365] text-xl">Về chúng tôi</h2>
          </div>
          <div>
            <h2
              className="text-[#222222] font-bold text-5xl"
              style={{ fontFamily: "Prata, Sans-serif" }}
            >
              Nắng Yêu Thương
            </h2>
          </div>
          <div className="space-y-7 text-[#69727d] text-lg">
            <p>
              <span className="font-bold">Nắng Yêu Thương</span> thành lập ngày
              03/11/2019.
            </p>
            <p>
              Nhóm hoạt động không vì lợi nhuận, trên nguyên tắc tự tạo vốn,
              nhằm các mục đích: Nhân đạo, từ thiện; Hỗ trợ và khuyến khích phát
              triển văn hóa, giáo dục, y tế, thể dục thể thao, khoa học; Phát
              triển cộng đồng phù hợp quy định của Pháp luật.
            </p>
            <p>
              Nắng Yêu Thương không chỉ đặt trọng tâm vào việc hỗ trợ những
              người vô gia cư và người nghèo đói mà còn đặc biệt quan tâm đến
              những người đang trải qua khó khăn về sức khỏe tại các bệnh viện.
              Tổ chức này thường xuyên tổ chức các hoạt động phát cơm miễn phí
              và phân phát nước cho bệnh nhân và gia đình tại các bệnh viện,
              giúp họ có thêm sức mạnh và sự khích lệ trong quá trình điều trị.
            </p>
            <p>
              Những buổi phát cơm miễn phí tại các bệnh viện không chỉ mang lại
              những bữa ăn dinh dưỡng mà còn tạo ra một không gian giao lưu,
              chia sẻ giữa các bệnh nhân và gia đình. Đây không chỉ là cơ hội để
              họ cảm thấy được quan tâm mà còn là dịp để chia sẻ những lo lắng,
              hy vọng và niềm tin trong cuộc sống.
            </p>
            <p>
              Bên cạnh việc phát cơm, việc phân phát nước uống miễn phí cũng
              đóng vai trò quan trọng trong việc chăm sóc sức khỏe của bệnh
              nhân. Đặc biệt là trong những ngày nắng nóng, việc cung cấp nước
              uống sạch giúp bệnh nhân giữ gìn sức khỏe và tinh thần trong quá
              trình điều trị.
            </p>
            <p>
              Nắng Yêu Thương không chỉ dừng lại ở việc cung cấp thực phẩm và
              nước uống mà còn thường xuyên tổ chức các hoạt động văn hóa, nghệ
              thuật và tình nguyện tại các bệnh viện. Điều này không chỉ giúp
              tạo ra một môi trường tích cực mà còn mang lại sự chia sẻ, kết nối
              và niềm vui cho những người đang trải qua khó khăn về sức khỏe.
            </p>
            <p>
              Nhờ sự quan tâm và sự hy vọng từ Nắng Yêu Thương, những người đang
              điều trị tại các bệnh viện không chỉ cảm thấy được an ủi mà còn
              nhận thấy rằng họ không đơn độc trong cuộc chiến chống lại bệnh
              tật. Điều này thực sự là một nguồn động viên lớn lao cho họ và
              cũng là một minh chứng rõ ràng về sức mạnh của tình người trong
              cuộc sống.
            </p>
          </div>
        </div>
      </div>

      <HomeResult />
      <IntroduceActivate />
    </section>
  );
}
