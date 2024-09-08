import { Category, PostType } from "../types/Data";

export const MENU_MOCK = [
  { id: 1, title: "Trang Chủ", url: "/" },
  { id: 2, title: "Giới Thiệu", url: "/gioi-thieu" },
  {
    id: 3,
    title: "Minh Bạch Tài Chính",
    url: "#",
    attribute: [
      { id: 1, title: "Chi tiết qua các con số", url: "/chi-tiet" },
      { id: 2, title: "Mạnh thường quân", url: "/manh-thuong-quan" },
    ],
  },
  { id: 4, title: "Hoạt Động", url: "/hoat-dong" },
  { id: 5, title: "Đăng Ký Tham Gia", url: "/dang-ky-tham-gia" },
];

export const CAROUSEL_MOCK = [
  {
    id: 1,
    name: "carousel_1",
    url_image:
      "/assets/images/82871210_183346483122361_8122074574562000896_n-1.jpg",
  },
  {
    id: 2,
    name: "carousel_2",
    url_image:
      "/assets/images/407444711_771400935019725_8133004829484104979_n.jpg",
  },
  {
    id: 3,
    name: "carousel_3",
    url_image:
      "/assets/images/440353189_864564452370039_8066590949111259582_n-1.jpg",
  },
];

export const ACTIVATE_MOCK = [
  {
    id: 1,
    name: "ACTIVATE_1",
    url_image: "/assets/images/activate_1.jpg",
  },
  {
    id: 2,
    name: "ACTIVATE_2",
    url_image: "/assets/images/activate_2.jpg",
  },
  {
    id: 3,
    name: "ACTIVATE_3",
    url_image: "/assets/images/activate_3.jpg",
  },
  {
    id: 4,
    name: "ACTIVATE_4",
    url_image: "/assets/images/activate_4.jpg",
  },
  {
    id: 5,
    name: "ACTIVATE_5",
    url_image: "/assets/images/activate_5.jpg",
  },
  {
    id: 6,
    name: "ACTIVATE_6",
    url_image: "/assets/images/activate_6.jpg",
  },
  {
    id: 7,
    name: "ACTIVATE_7",
    url_image: "/assets/images/activate_7.jpg",
  },
  {
    id: 8,
    name: "ACTIVATE_8",
    url_image: "/assets/images/activate_8.jpg",
  },
  {
    id: 9,
    name: "ACTIVATE_9",
    url_image: "/assets/images/activate_9.jpg",
  },
];

export const SPONSOR_MOCK = [
  {
    id: 1,
    name: "Nguyễn Thị Thúy",
    url_image: "/assets/images/Nguyen_Thi_Thuy.jpg",
  },
  {
    id: 2,
    name: "Đặng Thị Minh Nhật",
    url_image: "/assets/images/Dang_Thi_Minh_Nhat.jpg",
  },
  {
    id: 3,
    name: "Trần Thị Thúy Nga",
    url_image: "/assets/images/Tran_Thi_Thuy_Nga.jpg",
  },
  {
    id: 4,
    name: "Đặng Ngọc Huyền",
    url_image: "/assets/images/Dang_Ngoc_Huyen.jpg",
  },
];

export const POSTS_MOCK: PostType[] = [
  {
    id: 1,
    title: "Phát Cơm Cho Những Bệnh Nhân Khó khăn",
    createdAt: " 1 June, 2024",
    createdBy: "admin",
    url_image: "/assets/images/imagesPost_1.jpg",
    descripton:
      "Trong những hoàn cảnh khó khăn, những bữa ăn có thể trở thành một thách thức lớn đối với nhiều bệnh nhân. Tuy nhiên, có những tổ chức và cá nhân đang nỗ lực để giúp đỡ những người này tiếp cận được bữa ăn đầy đủ và dinh dưỡng. Một số tổ chức thiện nguyện đang phát cơm miễn phí cho những bệnh nhân vô gia cư hoặc có hoàn cảnh khó khăn, đảm bảo rằng họ có thể hấp thụ đủ chất dinh dưỡng cần thiết để hồi phục sức khỏe. Không chỉ cung cấp bữa ăn, mà họ còn mang đến sự ấm áp, sự chăm sóc và kết nối cộng đồng cho những người đang gặp khó khăn. Những nỗ lực như vậy thực sự là nguồn sức mạnh tinh thần và động lực để những bệnh nhân có thể vượt qua những thách thức của cuộc sống.",
    categories: "chưa phân loại",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
		<p>Trong những hoàn cảnh khó khăn, những bữa ăn có thể trở thành một thách thức lớn đối với nhiều bệnh nhân. Tuy nhiên, có những tổ chức và cá nhân đang nỗ lực để giúp đỡ những người này tiếp cận được bữa ăn đầy đủ và dinh dưỡng. Một số tổ chức thiện nguyện đang phát cơm miễn phí cho những bệnh nhân vô gia cư hoặc có hoàn cảnh khó khăn, đảm bảo rằng họ có thể hấp thụ đủ chất dinh dưỡng cần thiết để hồi phục sức khỏe. Không chỉ cung cấp bữa ăn, mà họ còn mang đến sự ấm áp, sự chăm sóc và kết nối cộng đồng cho những người đang gặp khó khăn. Những nỗ lực như vậy thực sự là nguồn sức mạnh tinh thần và động lực để những bệnh nhân có thể vượt qua những thách thức của cuộc sống.</p>
			</div>`,
    url_detail: "phat-com-cho-nhung-benh-nhan-kho-khan",
  },

  {
    id: 2,
    title: "Tiếp sức hỗ trợ nguồn vốn cho các hợp tác xã điển hình",
    createdAt: " 22 May, 2024",
    createdBy: "admin",
    url_image: "/assets/images/Trao-tai-tro-1.jpg",
    descripton:
      "Các hợp tác xã điển hình tại Tuyên Quang, Phú Thọ, Lào Cai, Hà Tĩnh, Quảng Bình vừa được Quỹ Thiện Tâm bàn giao nguồn vốn vay ưu đãi với lãi suất 0 đồng. Những hỗ trợ của Quỹ Thiện Tâm không chỉ tiếp thêm nguồn lực để các hợp tác phát triển sản xuất, mà còn tạo điều kiện để các đơn vị bố trí công ăn việc làm, tạo nguồn sinh kế giúp các hộ gia đình nghèo khó khăn tại địa phương thoát nghèo bền vững. Trong tháng 11/2023, Quỹ Thiện Tâm phối hợp với Trung tâm Khuyến nông Quốc gia, Văn phòng điều phối Nông thôn mới Trung ương tổ chức bàn giao hỗ trợ trang thiết bị, vật tư nông nghiệp triển khai “Dự án hợp tác xã liên kết với hộ nông dân để phát triển kinh tế và thoát nghèo bền vững” cho các hợp tác xã điển hình tại các tỉnh: Tuyên Quang, Lào Cai, Phú Thọ, Quảng Bình, Hà Tĩnh. Các Hợp tác xã (HTX) được Quỹ Thiện Tâm lựa chọn, triển khai hỗ trợ gồm: HTX nông nghiệp công nghệ cao Tiến Thành, HTX nông nghiệp và dịch vụ Hoàng Thức, HTX nông lâm nghiệp Thổ Bình của tỉnh Tuyên Quang; Hợp tác xã nông nghiệp Thanh Phong của tỉnh Lào Cai; Hợp tác xã nông nghiệp hữu cơ Sơn Hùng của tỉnh Phú Thọ; HTX Đầu tư và Phát triển nhung hươu Hương Sơn, HTX Thông Hà, HTX nuôi trồng, thu mua, chế biến xuất nhập khẩu thủy hải sản Loan Hoan của tỉnh Hà Tĩnh. Tỉnh Quảng Bình có HTX Dược liệu sạch Thủy Mai. Các hợp tác xã  được Quỹ Thiện Tâm hỗ trợ trị giá 1 tỷ đồng/HTX theo hình thức vay vốn 0 đồng trong 10 năm để đầu tư mua con giống (trâu, bò, dê) và phương tiện vận chuyển để phục vụ sản xuất.",
    categories: "tin tức & sự kiện",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
      <p><strong>Các hợp tác xã điển hình tại Tuyên Quang, Phú Thọ, Lào Cai, Hà Tĩnh, Quảng Bình vừa được Quỹ Thiện Tâm bàn giao nguồn vốn vay ưu đãi với lãi suất 0 đồng. Những hỗ trợ của Quỹ Thiện Tâm không chỉ tiếp thêm nguồn lực để các hợp tác phát triển sản xuất, mà còn tạo điều kiện để các đơn vị bố trí công ăn việc làm, tạo nguồn sinh kế giúp các hộ gia đình nghèo khó khăn tại địa phương thoát nghèo bền vững.</strong></p>
      <p>Trong tháng 11/2023, Quỹ Thiện Tâm phối hợp với Trung tâm Khuyến nông Quốc gia, Văn phòng điều phối Nông thôn mới Trung ương tổ chức bàn giao hỗ trợ trang thiết bị, vật tư nông nghiệp triển khai “Dự án hợp tác xã liên kết với hộ nông dân để phát triển kinh tế và thoát nghèo bền vững” cho các&nbsp;hợp tác xã điển hình&nbsp;tại các&nbsp;tỉnh: Tuyên Quang, Lào Cai, Phú Thọ, Quảng Bình, Hà Tĩnh.</p>
      <p>Các&nbsp;Hợp tác xã (HTX) được Quỹ Thiện Tâm lựa chọn, triển khai hỗ trợ gồm: HTX nông nghiệp&nbsp;công nghệ cao Tiến Thành, HTX nông&nbsp;nghiệp và dịch vụ Hoàng Thức, HTX nông lâm nghiệp Thổ Bình của tỉnh Tuyên Quang; Hợp tác xã nông nghiệp Thanh Phong của tỉnh Lào Cai;&nbsp;Hợp tác xã nông nghiệp hữu cơ Sơn Hùng của tỉnh Phú Thọ; HTX Đầu tư và Phát triển nhung hươu Hương Sơn, HTX Thông Hà, HTX nuôi trồng, thu mua, chế biến xuất nhập khẩu thủy hải sản Loan Hoan của tỉnh Hà Tĩnh. Tỉnh Quảng Bình có HTX Dược liệu sạch Thủy Mai. Các hợp tác xã&nbsp; được Quỹ Thiện Tâm hỗ trợ trị giá 1 tỷ đồng/HTX theo hình thức vay vốn 0 đồng trong 10 năm để đầu tư mua con giống (trâu, bò, dê) và phương tiện vận chuyển để phục vụ sản xuất.</p>
      <p><img fetchpriority="high" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Trao-tai-tro.jpg" alt="" width="750" height="432"></p>
      <p><em>Quỹ Thiện Tâm trao biển tài trợ tượng trưng cho 5 HTX tại Phú Thọ, Lào Cai và Tuyên Quang</em></p>
      <p><img decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/331.jpg" alt="" width="750" height="517"></p>
      <p>Đại diện Quỹ Thiện Tâm trao biển hỗ trợ tượng trưng cho 4 HTX tại Hà Tĩnh và Quảng Bình</p>
      <p>Trong khuôn khổ chương trình hợp tác, Trung tâm Khuyến nông Quốc gia, Văn Phòng điều phối Nông thôn mới Trung ương cũng đã thống nhất cùng Quỹ Thiện Tâm tiếp tục triển khai hỗ trợ đào tạo cán bộ khuyến nông (bác sỹ đa khoa trong nông nghiệp) nhằm hỗ trợ nâng cao năng lực cho các thành viên HTX thông qua công tác chỉ đạo kỹ thuật; tổ chức các lớp đào tạo tập huấn nâng cao trình độ cho các thành viên HTX từ nguồn ngân sách khuyến nông trung ương, địa phương và Quỹ Thiện Tâm.</p>
      <p>Ông Lý Minh Tuấn – Giám đốc Quỹ Thiện Tâm cho biết: “Năm 2022, Dự án hợp tác xã liên kết với hộ nông dân để phát triển kinh tế và thoát nghèo bền vững do Quỹ Thiện Tâm triển khai chính thức đi vào hoạt động tại 2 tỉnh Thái Nguyên và Sơn La. Tiếp nối những thành công bước đầu, từ năm 2023, Quỹ Thiện Tâm quyết định nhân rộng mô hình tới nhiều tỉnh thành trên cả nước với mong muốn đóng góp nhiều hơn nữa trong công cuộc xóa đói giảm nghèo”.</p>
      <p>Với tinh thần khẩn trương, đến nay, Quỹ Thiện Tâm đã và đang hoàn thành công tác giải ngân vốn cho 20 hợp tác xã và đang nhanh chóng triển khai công tác bàn giao, hỗ trợ trang thiết bị, máy móc, vật tư, cây giống, con giống để kịp tiến độ mùa vụ.</p>
      <p><img decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/127.jpg" alt="" width="750" height="563"></p>
      <p><em>Các đại biểu thăm quan mô hình nuôi hươu lấy nhung giá trị cao tại HTX Nhung hươu Hà Tĩnh</em></p>
      <p><img loading="lazy" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Cac-dai-bieu-di-tham-mo-hinh.jpg" alt="" width="750" height="563"></p>
      <p><em>Các đại biểu thăm quan mô hình nuôi bò công nghệ cao của HTX Tiến Thành – Tuyên Quang</em></p>
      <p>Thông qua chương trình hỗ trợ, sẽ giúp giải quyết vấn đề thiếu vốn để đầu tư sản xuất hiện nay của các HTX, đặc biệt là những HTX mới thành lập, giúp các HTX cùng chính quyền hỗ trợ người dân thực hiện tốt công tác xoá đói giảm nghèo.</p>
      <p>HTX Nông nghiệp và Dịch vụ Hoàng Thức (xã Yên Nguyên, huyện Chiêm Hóa, Tuyên Quang) hiện có 15 thành viên hoạt động trong các lĩnh vực trồng trọt, chăn nuôi. Riêng đàn bò của HTX đến nay đạt trên 200 con, với 150 con bò nuôi theo hình thức vỗ béo thương phẩm, còn lại là bò sinh sản và bê. Toàn bộ nguồn chất thải đã được HTX xử lý để nuôi giun quế và làm phân bón cho cây trồng để đảm bảo môi trường…</p>
      <p>Chị Nguyễn Thị Uyên, Giám đốc HTX Hoàng Thức cho biết, các thành viên trong HTX không có hộ nghèo, nhưng nhiều người dân tham gia lao động trong HTX là hộ nghèo. Qua chương trình hỗ trợ lần này của Quỹ Thiện Tâm, các hộ dân sẽ có cơ hội giải quyết công ăn việc làm, nhất là hộ khó khăn, hộ nghèo có động lực và cơ hội thoát nghèo. HTX mong muốn sẽ là cầu nối tạo việc làm và sinh kế cho các hộ nghèo.</p>
      <div class="blog-share text-center"></div>
      </div>`,
    url_detail: "tiep-suc-ho-tro-nguon-von-cho-cac-hop-tac-xa-dien-hinh",
  },
  {
    id: 3,
    title: "Cuộc thi hùng biện Tiếng nói Xanh",
    createdAt: "22 May, 2024",
    createdBy: "admin",
    url_image: "/assets/images/FB-TNX-1-804x800-1.jpg",
    descripton:
      "Cuộc thi hùng biện – tranh biện Tiếng nói Xanh do Quỹ Vì Tương lai Xanh thuộc Tập đoàn Vingroup tổ chức đã bắt đầu nhận đơn đăng ký từ 0h ngày 02/11/2023. Đây là sân chơi tri thức để các bạn trẻ thể hiện bản lĩnh, tư duy, sáng tạo, mang đến những thay đổi tích cực, góp phần thúc đẩy, lan tỏa lối sống xanh, hướng tới một tương lai xanh và bền vững cho tất cả mọi người.",
    categories: "tin tức & sự kiện",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
      <p><strong>Cuộc thi hùng biện – tranh biện Tiếng nói Xanh do Quỹ Vì Tương lai Xanh thuộc Tập đoàn Vingroup tổ chức đã bắt đầu nhận đơn đăng ký từ 0h ngày 02/11/2023. Đây là sân chơi tri thức để các bạn trẻ thể hiện bản lĩnh, tư duy, sáng tạo, mang đến những thay đổi tích cực, góp phần thúc đẩy, lan tỏa lối sống xanh, hướng tới một tương lai xanh và bền vững cho tất cả mọi người.</strong></p>
      <p>Cuộc thi dành cho các bạn học sinh tại các trường Trung học phổ thông trên toàn lãnh thổ Việt Nam. Thí sinh có thể tham gia dưới hình thức cá nhân hoặc nhóm đôi. Đồng thời, thí sinh có quyền lựa chọn ngôn ngữ thi đấu bằng tiếng Anh hoặc tiếng Việt.</p>
      <p>Thời gian mở đơn ứng tuyển: 0h ngày 02/11/2023 đến 23h59 ngày 02/12/2023.</p>
      <p><img fetchpriority="high" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/FB-TNX-1.jpg" alt="" width="750" height="746"></p>
      <p>Cơ cấu giải thưởng gồm 01 giải Nhất, 01 giải Nhì, 02 giải Ba và các giải phụ cho mỗi bảng thi đấu. Riêng cá nhân/đội thi xuất sắc Nhất sẽ giành được giải thưởng trị giá 3,4 tỷ đồng, bao gồm phần thưởng hiện kim lên đến 100 triệu đồng, học bổng chương trình cử nhân tại Trường Đại học VinUni, xe máy điện VinFast EVO200, kỳ nghỉ dưỡng tại VinPearl Nha Trang và nhiều giải thưởng giá trị khác…</p>
            </div>`,
    url_detail: "cuoc-thi-hung-bien-tieng-noi-xanh",
  },
  {
    id: 4,
    title:
      "Quỹ Thiện Tâm đẩy mạnh mô hình hợp tác xã liên kết với hộ nông dân để phát triển sinh kế và thoát nghèo bền vững",
    createdAt: " 22 May, 2024",
    createdBy: "admin",
    url_image: "/assets/images/IMG_2456-min-1200x800-1.jpg",
    descripton:
      "Tại buổi lễ, Quỹ Thiện Tâm đã trao hỗ trợ cho 04 hợp tác xã là: Hợp tác xã sản xuất kinh doanh nông sản Quang Lanh tại Thái Bình; Hợp tác xã nông nghiệp hữu cơ V-Organic, Hợp tác xã nông nghiệp Yên Trị và Hợp tác xã Green Life cùng ở tỉnh Hòa Bình.  Mỗi hợp tác xã được Quỹ hỗ trợ nguồn vốn vay ưu đãi không lãi suất trị giá 1 tỷ đồng để đầu tư các trang thiết bị nông nghiệp hiện đại như: Thiết bị bay phun thuốc trừ sâu không người lái, máy cày và máy cuộn rơm công suất lớn, máy làm đất chuyên dụng, hệ thống kho lạnh bảo quản nông sản, hệ thống tưới tự động thông minh cùng các loại giống cây trồng giá trị cao khác. Phát biểu tại buổi lễ, ông Lê Quốc Thanh – Giám đốc Trung tâm Khuyến nông Quốc gia đánh giá cao chương trình hợp tác giữa Trung tâm Khuyến nông Quốc gia, Quỹ Thiện Tâm và Văn phòng Điều phối Nông thôn mới Trung ương. Dự án góp phần quan trọng tìm lời giải cho bài toán thiếu vốn và công nghệ đầu tư cho sản xuất của các hợp tác xã nông nghiệp hiện nay, đặc biệt là các hợp tác xã trẻ, hợp tác xã khởi nghiệp. Đồng thời tạo điều kiện để các hợp tác xã có cơ hội hỗ trợ các hộ khó khăn phát triển kinh tế, tạo việc làm, nâng cao thu nhập cho bà con. “Đây là cách làm đầy sáng tạo, vừa khơi thông nguồn vốn vừa giúp các hợp tác xã tiếp cận được với trang thiết bị hiện đại, khoa học kỹ thuật mới để mở rộng sản xuất. Hệ thống khuyến nông sẽ luôn đồng hành cùng hợp tác xã và bà con nông dân. Đặc biệt là đội ngũ cán bộ khuyến nông cơ sở, cán bộ khuyến nông cộng đồng sẽ sát cánh để hỗ trợ tối đa cho hợp tác xã về các vấn đề chuyên môn”, ông Thanh nhấn mạnh.",
    categories: "tin tức & sự kiện",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
      <p>Tại buổi lễ, Quỹ Thiện Tâm đã trao hỗ trợ cho 04 hợp tác xã là: Hợp tác xã sản xuất kinh doanh nông sản Quang Lanh tại Thái Bình; Hợp tác xã nông nghiệp hữu cơ V-Organic, Hợp tác xã nông nghiệp Yên Trị và Hợp tác xã Green Life cùng ở tỉnh Hòa Bình.&nbsp; Mỗi hợp tác xã được Quỹ hỗ trợ nguồn vốn vay ưu đãi không lãi suất trị giá 1 tỷ đồng để đầu tư các trang thiết bị nông nghiệp hiện đại như: Thiết bị bay phun thuốc trừ sâu không người lái, máy cày và máy cuộn rơm công suất lớn, máy làm đất chuyên dụng, hệ thống kho lạnh bảo quản nông sản, hệ thống tưới tự động thông minh cùng các loại giống cây trồng giá trị cao khác.</p>
      <p>Phát biểu tại buổi lễ, ông Lê Quốc Thanh – Giám đốc Trung tâm Khuyến nông Quốc gia đánh giá cao chương trình hợp tác giữa Trung tâm Khuyến nông Quốc gia, Quỹ Thiện Tâm và Văn phòng Điều phối Nông thôn mới Trung ương. Dự án góp phần quan trọng tìm lời giải cho bài toán thiếu vốn và công nghệ đầu tư cho sản xuất của các hợp tác xã nông nghiệp hiện nay, đặc biệt là các hợp tác xã trẻ, hợp tác xã khởi nghiệp. Đồng thời tạo điều kiện để các hợp tác xã có cơ hội hỗ trợ các hộ khó khăn phát triển kinh tế, tạo việc làm, nâng cao thu nhập cho bà con.</p>
      <p>“Đây là cách làm đầy sáng tạo, vừa khơi thông nguồn vốn vừa giúp các hợp tác xã tiếp cận được với trang thiết bị hiện đại, khoa học kỹ thuật mới để mở rộng sản xuất. Hệ thống khuyến nông sẽ luôn đồng hành cùng hợp tác xã và bà con nông dân. Đặc biệt là đội ngũ cán bộ khuyến nông cơ sở, cán bộ khuyến nông cộng đồng sẽ sát cánh để hỗ trợ tối đa cho hợp tác xã về các vấn đề chuyên môn”, ông Thanh nhấn mạnh.</p>
      <p><img fetchpriority="high" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_2456-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Bà Phan Thu Hương – Phó Chủ tịch&nbsp;Quỹ Thiện Tâm trao biển tượng trưng hỗ trợ của Quỹ Thiện Tâm cho Hợp tác xã Quang Lanh (Thái Bình) trước sự chứng kiến của các đại biểu Trung ương và địa phương</em></p>
      <p><img decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_2540-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Đại diện&nbsp;Quỹ Thiện Tâm&nbsp;trao hỗ trợ trang thiết bị, máy móc cho HTX Quang Lanh (Thái Bình)</em></p>
      <p><img decoding="async" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_2775-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Bà Trần Thị Lanh – Giám đốc Hợp tác xã Quang Lanh giới thiệu hệ thống máy móc tiên tiến cho các đại biểu&nbsp;</em></p>
      <p><img loading="lazy" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_2678-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Hệ thống thiết bị bay phun thuốc sâu không người lái và máy gặt hiện đại vận hành trên cánh đồng quê lúa Thái Bình</em></p>
      <p>Thay vì cách làm truyền thống là hỗ trợ trực tiếp tới từng hộ dân, Quỹ Thiện Tâm quyết định chuyển hướng hỗ trợ thông qua hợp tác xã để với tư cách là một tổ chức pháp nhân đại diện cho các xã viên, bà con nông dân sẽ được tiếp nhận nguồn vốn hỗ trợ ưu đãi không lãi suất của Quỹ với giá trị 1 tỷ đồng/hợp tác xã với cam kết sẽ tạo thêm nhiều công ăn việc làm ổn định cho các hộ nghèo/cận nghèo/khó khăn tại địa phương với mức thu nhập tối thiểu từ trên 1 triệu đồng/hộ/tháng. Cách làm này sẽ đem lại hiệu quả về kinh tế trong thời gian ngắn nhất, giúp các hộ nghèo có nguồn thu nhập ổn định ngay từ thời điểm đầu tham gia dự án. Thông qua việc tham gia vào chương trình, các hộ nghèo cũng sẽ được tiếp thu kiến thức kỹ thuật trồng trọt, chăn nuôi tiến tiến, hiện đại. Việc triển khai dự án cũng phát huy nguồn lực tại chỗ và sự vào cuộc của các cấp, các ngành trong công tác chuyên môn để hỗ trợ về kỹ thuật sản xuất, trồng trọt, chăn nuôi và hỗ trợ đầu ra cho sản phẩm cũng như đồng hành trong công tác hỗ trợ các hộ gia đình thoát nghèo bền vững từng năm. Ngoài những lợi ích thiết thực mà các hộ dân và hợp tác xã được thụ hưởng, nguồn vốn mà hợp tác xã hoàn trả cho dự án sẽ tiếp tục được tái đầu tư hỗ trợ cho các mô hình nông nghiệp tiềm năng khác hoặc ưu tiên phân bổ để xây dựng thêm các công trình phúc lợi phục vụ dân sinh tại các địa phương.</p>
      <p><img loading="lazy" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_3043-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Đại diện Trung tâm Khuyến nông Quốc gia, Văn phòng Nông thôn mới Trung ương và Quỹ Thiện Tâm trao biển hỗ trợ tượng trưng cho HTX V-Organic, HTX Yên Trị và HTX Green Life (Hòa Bình)</em></p>
      <p><img loading="lazy" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_3098-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Các đại biểu thăm quan mô hình trồng rau sạch xuất khẩu của HTX nông nghiệp hữu cơ V-Organic (Hòa Bình)</em></p>
      <p><img loading="lazy" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_3122-min.jpg" alt="" width="750" height="500"></p>
      <p><em>Các hộ dân tham gia dự án hăng say lao động trên mảnh đất quê hương</em></p>
      <p><img loading="lazy" decoding="async" class="aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/IMG_3188-min.jpg" alt="" width="750" height="500"></p>
      <p>Hệ thống máy móc tiên tiến, hiện đại vận hành tại trang trại của HTX V-Organic (Hòa Bình)</p>
      <p>Không đơn thuần là mô hình nông nghiệp thuần túy, Quỹ Thiện Tâm kỳ vọng 100% hợp tác xã tham gia dự án đều hướng tới xây dựng theo mô hình kinh tế tuần hoàn với đa dạng hoạt động sản xuất từ trồng trọt, chăn nuôi tới chế biến, tạo được sự tiếp nối trong chuỗi sản xuất vừa góp phần tận dụng nguồn lực vừa bảo vệ môi trường và nhất là xử lý được các nguồn chất thải trong sản xuất, chăn nuôi vốn là bài toán nan giải trong ngành nông nghiệp.</p>
      <p>Với cách làm hoàn toàn mới, Dự án này là dấu mốc quan trọng trên hành trình thiện nguyện vì cộng đồng của Quỹ Thiện Tâm nói chung cũng như những chương trình hỗ trợ cho ngành nông nghiệp nước nhà nói riêng, thúc đẩy sự phát triển của các hợp tác xã và tạo cơ hội cho bà con nông dân có nguồn sinh kế thoát nghèo bền vững, trở thành mô hình nông nghiệp tiêu biểu trên cả nước, đóng góp hiệu quả vào công cuộc xóa đói giảm nghèo theo đúng tinh thần: “Tất cả hướng về người nghèo – Không để ai bị bỏ lại phía sau” và hoàn thành tốt các Chương trình Mục tiêu Quốc gia giai đoạn 2021-2025.</p>
      </div>`,
    url_detail:
      "quy-thien-tam-day-manh-mo-hinh-hop-tac-xa-lien-ket-voi-ho-nong-dan-de-phat-trien-sinh-ke-va-thoat-ngheo-ben-vung",
  },
  {
    id: 5,
    title: "Trung tâm Từ thiện và Hướng nghiệp Phật Tích",
    createdAt: "22 May, 2024",
    createdBy: "admin",
    url_image: "/assets/images/nh-chon-2-1568881032-1.jpg",
    descripton:
      "Thành lập đúng dịp kỷ niệm 999 năm Thăng Long, Dự án Trung tâm Từ thiện và Hướng nghiệp Phật Tích ra đời trở thành mái ấm yêu thương của hơn 200 em nhỏ mồi côi và các cụ già đơn thân không nơi nương tựa. Hoạt động chăm sóc của Trung tâm thực hiện theo hình thức 24/7 với đội ngũ cán bộ nhân viên và y tá nhiệt tình trách nhiệm, tạo một môi trường sống và sinh hoạt thuận tiện, ấm cúng và luôn tràn ngập tình yêu thương như trong một gia đình. Trung tâm được xây dựng trên diện tích 12 hecta tại xã Phật Tích, huyện Tiên Du, tỉnh Bắc Ninh với cảnh quan thiên nhiên xanh, sạch, đẹp và cơ sở vật chất hiện đại gồm vườn hoa, hồ nước, sân thể thao, hội trường đa năng, nhà ăn… Khu vực nhà ở của các cụ già và các cháu riêng biệt nhằm phù hợp lứa tuổi, giới tính và đáp ứng đầy đủ các nhu cầu sinh hoạt. Trung tâm luôn quan tâm đến việc tạo cho các cụ, các cháu một cuộc sống vui hòa nhập cộng đồng, thường xuyên tổ chức các buổi giao lưu văn nghệ, thể thao, phát triển văn hóa đọc, hướng nghiệp… Cuối tuần được lên chùa tụng kinh, niệm Phật, hướng thiện, tu dưỡng và rèn luyện nhân cách. Với khẩu hiệu ý nghĩa như “Trung tâm LÀ NHÀ, Các cụ LÀ ÔNG BÀ. Các cô chú cán bộ nhân viên LÀ CHA MẸ. Các con LÀ ANH EM” hay “Trong xã hội loài người, cái quý nhất là LAO ĐỘNG” tình yêu thương lan tỏa và tinh thần hăng say lao động luôn được đề cao và phát huy tại Trung tâm Phật Tích.",
    categories: "văn hóa & giáo dục",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
      <p><strong>Thành lập đúng dịp kỷ niệm 999 năm Thăng Long, Dự án Trung tâm Từ thiện và Hướng nghiệp Phật Tích ra đời trở thành mái ấm yêu thương của hơn 200 em nhỏ mồi côi và các cụ già đơn thân không nơi nương tựa.</strong></p>
      <p>Hoạt động chăm sóc của Trung tâm thực hiện theo hình thức 24/7 với đội ngũ cán bộ nhân viên và y tá nhiệt tình trách nhiệm, tạo một môi trường sống và sinh hoạt thuận tiện, ấm cúng và luôn tràn ngập tình yêu thương như trong một gia đình.</p>
      <p>Trung tâm được xây dựng trên diện tích 12 hecta tại xã Phật Tích, huyện Tiên Du, tỉnh Bắc Ninh với cảnh quan thiên nhiên xanh, sạch, đẹp và cơ sở vật chất hiện đại gồm vườn hoa, hồ nước, sân thể thao, hội trường đa năng, nhà ăn… Khu vực nhà ở của các cụ già và các cháu riêng biệt nhằm phù hợp lứa tuổi, giới tính và đáp ứng đầy đủ các nhu cầu sinh hoạt. Trung tâm luôn quan tâm đến việc tạo cho các cụ, các cháu một cuộc sống vui hòa nhập cộng đồng, thường xuyên tổ chức các buổi giao lưu văn nghệ, thể thao, phát triển văn hóa đọc, hướng nghiệp… Cuối tuần được lên chùa tụng kinh, niệm Phật, hướng thiện, tu dưỡng và rèn luyện nhân cách.</p>
      <p>Với khẩu hiệu ý nghĩa như “Trung tâm LÀ NHÀ, Các cụ LÀ ÔNG BÀ. Các cô chú cán bộ nhân viên LÀ CHA MẸ. Các con LÀ ANH EM” hay “Trong xã hội loài người, cái quý nhất là LAO ĐỘNG” tình yêu thương lan tỏa và tinh thần hăng say lao động luôn được đề cao và phát huy tại Trung tâm Phật Tích.</p>
      <div class="blog-share text-center"></div>
      </div>`,
    url_detail: "trung-tam-tu-thien-va-huong-nghiep-phat-tich",
  },
  {
    id: 6,
    title:
      "Bác sỹ trẻ – Chìa khóa giải quyết bài toán thiếu hụt nhân lực y tế vùng cao",
    createdAt: "22 May, 2024",
    createdBy: "admin",
    url_image: "/assets/images/Le-ky1-1199x800-1.jpg",
    descripton:
      "Theo phân tích dự báo nhu cầu nhân lực ngành y tế, số lượng bác sỹ và điều dưỡng cần được bổ sung ở các vùng khó khăn tiếp tục tăng. Vùng Bắc Trung Bộ và Duyên Hải miền Trung cần khoảng 14.000 bác sỹ và 60.000 điều dưỡng, vùng Tây Nguyên cần khoảng 5.400 bác sỹ và 20.700 điều dưỡng. Để giải quyết vấn đề này, Bộ Y tế đang tích cực triển khai chương trình đào tạo bác sỹ trẻ với kỳ vọng đây sẽ là lực lượng chính lấp đầy khoảng trống thiếu hụt nhân lực trình độ cao phục vụ tại các địa phương vùng sâu, vùng xa khó khăn.",
    categories: "chăm sóc sức khỏe cộng đồng",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
      <p><strong>Theo phân tích dự báo nhu cầu nhân lực ngành y tế, số lượng bác sỹ và điều dưỡng cần được bổ sung ở các vùng khó khăn tiếp tục tăng. Vùng Bắc Trung Bộ và Duyên Hải miền Trung cần khoảng 14.000 bác sỹ và 60.000 điều dưỡng, vùng Tây Nguyên cần khoảng 5.400 bác sỹ và 20.700 điều dưỡng. Để giải quyết vấn đề này, Bộ Y tế đang tích cực triển khai chương trình đào tạo bác sỹ trẻ với kỳ vọng đây sẽ là lực lượng chính lấp đầy khoảng trống thiếu hụt nhân lực trình độ cao phục vụ tại các địa phương vùng sâu, vùng xa khó khăn.</strong></p>
      <p>Mới đây, tại Trường Đại học Y Hà Nội, Bộ Y tế phối hợp với Quỹ Thiện Tâm đã tổ chức Lễ khai giảng lớp bác sỹ chuyên khoa I với sự tham gia của 40 bác sỹ trẻ đến từ 22 huyện nghèo tại 4 tỉnh miền núi phía Bắc. Đây đã là lớp đào tạo thứ ba cho khu vực miền núi phía Bắc và là lớp thứ 6 được triển khai với sự hỗ trợ kinh phí đến từ Quỹ Thiện Tâm.</p>
      <p><img fetchpriority="high" decoding="async" class="size-medium wp-image-717 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Le-ky1-600x400.jpg" sizes="(max-width: 600px) 100vw, 600px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Le-ky1-600x400.jpg 600w, https://quythientam.com.vn/wp-content/uploads/2023/12/Le-ky1-1199x800.jpg 1199w, https://quythientam.com.vn/wp-content/uploads/2023/12/Le-ky1-768x512.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/Le-ky1-1536x1025.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/Le-ky1.jpg 1920w" alt="" width="600" height="400"></p>
      <p>“Việc tổ chức đào tạo bác sĩ chuyên khoa I theo hình thức cầm tay chỉ việc “1 thầy kèm 1 trò” có ý nghĩa xã hội hết sức to lớn trong việc việc bù đắp nhân lực có trình độ chuyên môn phù hợp với tuyến y tế cơ sở vùng khó khăn của khu vực miền Bắc nói riêng và cả nước nói chung”, Tiến sỹ Phạm Văn Tác- Phó Chủ tịch Hội đồng Y khoa Quốc gia chia sẻ.</p>
      <p>Theo Tiến sỹ Tác, thực tế cho thấy, trong những năm qua, việc đào tạo đưa bác sỹ trẻ tốt nghiệp chuyên khoa I về công tác tại các huyện nghèo, vùng sâu vùng xa đã mang lại nhiều hiệu quả thiết thực. Bà con ở nhiều xã, huyện vùng sâu, vùng xa được tiếp cận y tế chất lượng cao ngay tại cơ sở. Nhiều đoàn Đại biểu Quốc hội khi tiếp xúc cử tri đều nhận được những ý kiến đánh giá cao vai trò của bác sỹ trẻ được đào tạo chuyên môn bài bản.</p>
      <p>“Ví như bác sỹ Quyết về công tác tại vùng cao của tỉnh Lào Cai: Chỉ trong 3 năm đã trực tiếp phẫu thuật hơn 1.200 ca bệnh; hay bác sỹ Sùng Seo Toả – người đồng bào dân tộc Mông ở huyện Mường Khương đi học bác sỹ chuyên khoa I chuyên ngành sản về quê hương làm việc đã cứu được nhiều người, đồng thời thay đổi được nhận thức của đồng bào trong chăm sóc sức khoẻ…”- Tiến sỹ Phạm Văn Tác thông tin.</p>
      <p><img decoding="async" class="size-medium wp-image-714 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Bac-sy-tre-Nguyen-Chien-Quyet-Lao-Cai-600x400.jpeg" sizes="(max-width: 600px) 100vw, 600px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Bac-sy-tre-Nguyen-Chien-Quyet-Lao-Cai-600x400.jpeg 600w, https://quythientam.com.vn/wp-content/uploads/2023/12/Bac-sy-tre-Nguyen-Chien-Quyet-Lao-Cai-1200x800.jpeg 1200w, https://quythientam.com.vn/wp-content/uploads/2023/12/Bac-sy-tre-Nguyen-Chien-Quyet-Lao-Cai-768x512.jpeg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/Bac-sy-tre-Nguyen-Chien-Quyet-Lao-Cai-1536x1024.jpeg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/Bac-sy-tre-Nguyen-Chien-Quyet-Lao-Cai.jpeg 1920w" alt="" width="600" height="400"></p>
      <p><em>Bác sỹ trẻ Nguyễn Chiến Quyết – một trong 7 bác sĩ chuyên khoa I đợt đầu tiên được Bộ Y tế bàn giao cho Bệnh viện Đa khoa huyện Bắc Hà (Lào Cai) để bổ sung thêm nguồn nhân lực có chất lượng cho công tác chăm sóc sức khoẻ nhân dân của địa phương.</em></p>
      <p>Từ năm 2021, bằng sự hỗ trợ của Quỹ Thiện Tâm, Cục Khoa học công nghệ và Đào tạo (Bộ Y tế) đã tổ chức khai giảng 06 lớp đào tạo bác sỹ chuyên khoa cấp I cho 224 bác sỹ trẻ tình nguyện tại 110 huyện khó khăn, biên giới, hải đảo thuộc 34 tỉnh khu vực miền núi phía Bắc, miền Trung, Tây nguyên, duyên hải Nam Trung bộ và Tây Nam Bộ. Đáng chú ý, trong giai đoạn này, ngoài việc hỗ trợ kinh phí đào tạo cho bác sĩ trẻ, Quỹ Thiện Tâm cũng sẽ xem xét, tài trợ máy móc, trang thiết bị thiết yếu cho các huyện khó khăn căn cứ vào nhu cầu triển khai các kỹ thuật của Bệnh viện, Trung tâm y tế đồng bộ với chuyên khoa đào tạo của bác sỹ.</p>
      <div class="blog-share text-center"></div>
      </div>`,
    url_detail:
      "bac-sy-tre-chia-khoa-giai-quyet-bai-toan-thieu-hut-nhan-luc-y-te-vung-cao",
  },
  {
    id: 7,
    title:
      "Lễ ký thỏa thuận hợp tác về phát triển các mô hình nông nghiệp, nông thôn điển hình gắn với xây dựng nông thôn mới",
    createdAt: "22 May, 2024",
    createdBy: "admin",
    url_image:
      "/assets/images/Thu-truong-Tran-Thanh-Nam-tang-hoa-1200x800-1.jpg",
    descripton:
      "Ngày 16/3/2023 tại Hà Nội, Quỹ Thiện Tâm, Trung tâm Khuyến nông Quốc gia và Văn phòng Điều phối Nông thôn mới Trung ương đã ký kết Thỏa thuận hợp tác về phát triển các mô hình nông nghiệp, nông thôn điển hình gắn với xây dựng nông thôn mới.",
    categories: "hỗ trợ sinh kế",
    comment: [],
    detail: `<div class="entry-content single-page">
      <p><strong>Ngày 16/3/2023 tại Hà Nội, Quỹ Thiện Tâm, Trung tâm Khuyến nông Quốc gia và Văn phòng Điều phối Nông thôn mới Trung ương đã ký kết Thỏa thuận hợp tác về phát triển các mô hình nông nghiệp, nông thôn điển hình gắn với xây dựng nông thôn mới.</strong></p>
      <p>Dự Lễ ký kết về phía Bộ Nông nghiệp và Phát triển nông thôn có Thứ trưởng Trần Thanh Nam, ông Ngô Trường Sơn – Chánh Văn phòng Điều phối Nông thôn mới Trung ương, ông Lê Quốc Thanh – Giám đốc Trung tâm Khuyến nông Quốc gia, bà Nguyễn Thị Hoàng Yến – Phó Cục trưởng Cục Kinh tế Hợp tác và Phát triển nông thôn. Về phía Quỹ Thiện Tâm có bà Phan Thu Hương – Phó Chủ tịch Hội đồng Quản lý Quỹ, ông Lý Minh Tuấn – Giám đốc Quỹ.</p>
      <p>Theo ông Lê Quốc Thanh – Giám đốc Trung tâm Khuyến nông Quốc gia, Thỏa thuận hợp tác giữa Trung tâm Khuyến nông Quốc gia, Văn phòng Điều phối Nông thôn mới Trung ương và Quỹ Thiện Tâm sẽ tập trung vào ba nội dung chính: Hợp tác trong công tác đào tạo, tâp huấn, nâng cao trình độ năng lực đội ngũ cán bộ khuyến nông và người sản xuất nhằm tăng thu nhập, nâng cao đời sống cho người dân, đặc biệt là nông dân, ngư dân nghèo vùng cận nghèo và các vùng khó khăn; Hợp tác trong hoạt động xây dựng mô hình khuyến nông điển hình (mô hình Nông nghiệp tuần hoàn, nông nghiệp hữu cơ, mô hình giảm nhẹ rủi ro thiên tai, xóa đói giảm nghèo…) tại các vùng sinh thái, vùng sản xuất tập trung trên cả nước; Hợp tác triển khai các hoạt động thông tin truyền thông trên các phương tiện thông tin đại chúng và dữ liệu hóa, chuyển giao tiến bộ kỹ thuật trong nông nghiệp nhằm đảm bảo lan tỏa kết quả, hiệu quả các chương trình, dự án hợp tác tới cộng đồng xã hội.</p>
      <p><img fetchpriority="high" decoding="async" class="size-medium wp-image-756 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Ong-Le-Quoc-Thanh-phat-bieu-533x400.jpg" sizes="(max-width: 533px) 100vw, 533px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Ong-Le-Quoc-Thanh-phat-bieu-533x400.jpg 533w, https://quythientam.com.vn/wp-content/uploads/2023/12/Ong-Le-Quoc-Thanh-phat-bieu.jpg 600w" alt="" width="533" height="400"></p>
      <p><em>Ông Lê Quốc Thanh – Giám đốc Trung tâm Khuyến nông Quốc gia phát biểu tại lễ ký kết</em></p>
      <p>Ông Ngô Trường Sơn – Chánh Văn phòng Điều phối Nông thôn mới Trung ương cho biết, Chương trình Mục tiêu Quốc gia xây dựng nông thôn mới đã triển khai hơn 10 năm và đạt được nhiều kết quả tích cực. Một trong những nguyên nhân để đạt được kết quả đó là nhờ nguồn lực, trong đó nguồn lực từ Trung ương chỉ chiếm dưới 2%, địa phương khoảng 10%, còn lại từ nguồn xã hội hóa, tín dụng… Chính vì vậy, việc Tập đoàn Vingroup thông qua Quỹ Thiện Tâm phối hợp để hỗ trợ triển khai chương trình sẽ rất có ý nghĩa, giúp chương trình đạt hiệu quả hơn nữa.</p>
      <p><img decoding="async" class="size-medium wp-image-755 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Ong-Ngo-Truong-Son-phat-bieu-533x400.jpg" sizes="(max-width: 533px) 100vw, 533px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Ong-Ngo-Truong-Son-phat-bieu-533x400.jpg 533w, https://quythientam.com.vn/wp-content/uploads/2023/12/Ong-Ngo-Truong-Son-phat-bieu.jpg 600w" alt="" width="533" height="400"></p>
      <p><em>Ông Ngô Trường Sơn – Chánh Văn phòng Điều phối Nông thôn mới Trung ương phát biểu</em></p>
      <p>Ông Lý Minh Tuấn – Giám đốc Quỹ Thiện Tâm cho biết, với sứ mệnh “Vì một cuộc sống tốt đẹp hơn cho mọi người”, trong suốt 17 năm qua, Quỹ Thiện Tâm của Tập đoàn Vingroup đã triển khai rất nhiều hoạt động từ thiện trong cả nước và nhận thấy vai trò đặc biệt của ngành nông nghiệp đối với sự ổn định và phát triển kinh tế xã hội của đất nước. Đây cũng là lĩnh vực liên quan đến đời sống của hàng chục triệu bà con nông dân Việt Nam. Quỹ Thiện Tâm đã chủ trương dành một phần ngân sách để hỗ trợ cho lĩnh vực này, đặc biệt tập trung vào hỗ trợ phát triển nông nghiệp, nông dân, nông thôn. Với chủ trương đó, ông Tuấn cho biết rất vui mừng khi cùng với Trung tâm Khuyến nông Quốc gia và Văn phòng Điều phối Nông thôn mới Trung ương ký kết thỏa thuận hợp tác phát triển các mô hình nông nghiệp nông thôn điển hình gắn với xây dựng nông thôn mới. Ông hy vọng ba bên sẽ phối hợp thật tốt thỏa thuận này, góp phần vào sự phát triển kinh tế ở địa phương và chung tay vào sự nghiệp phát triển bền vững của ngành nông nghiệp và phát triển nông thôn Việt Nam.</p>
      <p><img decoding="async" class="size-medium wp-image-754 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Anh-Ly-Minh-Tuan-phat-bieu-600x400.jpg" sizes="(max-width: 600px) 100vw, 600px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Anh-Ly-Minh-Tuan-phat-bieu-600x400.jpg 600w, https://quythientam.com.vn/wp-content/uploads/2023/12/Anh-Ly-Minh-Tuan-phat-bieu-1200x800.jpg 1200w, https://quythientam.com.vn/wp-content/uploads/2023/12/Anh-Ly-Minh-Tuan-phat-bieu-768x512.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/Anh-Ly-Minh-Tuan-phat-bieu-1536x1024.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/Anh-Ly-Minh-Tuan-phat-bieu.jpg 1920w" alt="" width="600" height="400"></p>
      <p><em>Ông Lý Minh Tuấn – Giám đốc Quỹ Thiện Tâm phát biểu tại lễ ký kết</em></p>
      <p>Tại buổi lễ, Thứ trưởng Trần Thanh Nam cảm ơn sự hỗ trợ của Tập đoàn Vingroup thông qua Quỹ Thiện Tâm ký kết thỏa thuận hợp tác với Trung tâm Khuyến nông Quốc gia và Văn phòng Điều phối nông thôn mới Trung ương. Cho rằng nông dân là lực lượng nền tảng của xã hội Việt Nam, Thứ trưởng Trần Thanh Nam nhấn mạnh việc ký kết hợp tác giữa ba bên phải thực sự có ý nghĩa và hiệu quả thông qua việc xây dựng được các mô hình nâng cao năng lực cho nông dân, khơi dậy tiềm năng sáng tạo trong sản xuất, khai thác sản phẩm đặc sản của từng địa phương, nâng cao chất lượng đời sống, tạo sinh kế lâu dài cho người dân nhờ sản xuất nông nghiệp.</p>
      <p><img loading="lazy" decoding="async" class="size-medium wp-image-753 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-phat-bieu-533x400.jpg" sizes="(max-width: 533px) 100vw, 533px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-phat-bieu-533x400.jpg 533w, https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-phat-bieu.jpg 600w" alt="" width="533" height="400"></p>
      <p><em>Thứ trưởng Bộ NN-PTNT Trần Thanh Nam nhấn mạnh cần khơi dậy tính sáng tạo của nông dân khi tiếp nhận các nguồn lực hỗ trợ</em></p>
      <p><img loading="lazy" decoding="async" class="size-medium wp-image-752 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-tang-hoa-600x400.jpg" sizes="(max-width: 600px) 100vw, 600px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-tang-hoa-600x400.jpg 600w, https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-tang-hoa-1200x800.jpg 1200w, https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-tang-hoa-768x512.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-tang-hoa-1536x1024.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/Thu-truong-Tran-Thanh-Nam-tang-hoa.jpg 1920w" alt="" width="600" height="400"></p>
      <p><em>Toàn cảnh lễ ký kết&nbsp;</em></p>
      </div>`,
    url_detail:
      "le-ky-thoa-thuan-hop-tac-ve-phat-trien-cac-mo-hinh-nong-nghiep-nong-thon-dien-hinh-gan-voi-xay-dung-nong-thon-moi",
  },
  {
    id: 8,
    title:
      "Nâng đỡ những mảnh đời trẻ thơ mồ côi bố, mẹ trong đại dịch Covid-19",
    createdAt: "22 May, 2024",
    createdBy: "admin",
    url_image: "/assets/images/84-1070x800-1.jpg",
    descripton:
      "Đại dịch Covid-19 đã cướp đi tính mạng của hơn 21.000 người tại Việt Nam. Chỉ trong phút chốc, biết bao những cháu nhỏ tội nghiệp rơi vào cảnh mồ côi, mất đi sự yêu thương, quan tâm, chăm sóc của cha mẹ, người thân… Thấu hiểu những mất mát của các cháu cùng gia đình, Quỹ Thiện Tâm đã khẩn trương tiến hành khảo sát hoàn cảnh và kịp thời trao hỗ trợ nhằm giúp các cháu có thêm động lực để vươn lên trong cuộc sống.",
    categories: "an sinh xã hội",
    comment: [],
    detail: `<div class="entry-content clear" itemprop="text">
      <p><strong>Đại dịch Covid-19 đã cướp đi tính mạng của hơn 21.000 người tại Việt Nam. Chỉ trong phút chốc, biết bao những cháu nhỏ tội nghiệp rơi vào cảnh mồ côi, mất đi sự yêu thương, quan tâm, chăm sóc của cha mẹ, người thân… Thấu hiểu những mất mát của các cháu cùng gia đình, Quỹ Thiện Tâm đã khẩn trương tiến hành khảo sát hoàn cảnh và kịp thời trao hỗ trợ nhằm giúp các cháu có thêm động lực để vươn lên trong cuộc sống.</strong></p>
      <p>&nbsp;</p>
      <p><strong>Bố ơi, mẹ ơi…. Giờ bố mẹ nơi đâu?</strong></p>
      <p>Trong căn nhà trọ ẩm thấp và xuống cấp, tiếng trẻ em khóc đến xé lòng. Ai ghé thăm gia đình bà Nguyễn Hồng Hà (phường Tân Thuận Đông, quận 7, Tp.HCM) những ngày này đều không cầm được nước mắt. Bé Trần Nguyễn Minh Đăng mới sinh còn đỏ hòn đã mất đi hơi ấm của mẹ. Những vất vả trong quá trình mang thai cùng với sự đau đớn do căn bệnh Covid-19 hành hạ đã khiến người mẹ không thể giữ được mạng sống. Vào thời điểm khó khăn nhất, bố lại không thể đồng hành cùng hai mẹ con vì bị mắc kẹt ở quê nhà. Khát sữa mẹ, người dì cùng bà ngoại chỉ biết dỗ dành cháu bằng những cái ôm yêu thương. Bà ngoại vừa chia sẻ vừa rơm rớm nước mắt: “Tội nghiệp hai mẹ con thằng bé. Mẹ mắc Covid phải vào bệnh viện điều trị. Gia đình ở nhà mà như ngồi trên đống lửa. Đến lúc bác sỹ báo con gái tôi sức khỏe đã kiệt quệ, buộc phải mổ để cứu thai nhi mà chân tay tôi rụng rời. Ngày đi đón bé, thấy thằng bé mắt tròn xoe nhìn bà mà tôi không cầm được xúc động. Cứ nghĩ Covid nó ở đâu xa, không ngờ nó lại mang đến tai họa và nỗi đau khôn cùng cho gia đình thế này”.</p>
      <p>Cháu Lê Chí Bảo (10 tuổi, quận Bình Chánh, Tp.HCM) cùng bốn anh em&nbsp;trong gia đình giờ rơi vào cảnh bơ vơ khi người cha là trụ cột chính&nbsp;đã mất vì Covid-19. Trước đó, do hoàn cảnh khó khăn, mẹ đã bỏ các cháu ra đi không một lời từ biệt.</p>
      <p>“Cả năm anh em đều đang đi học nên chúng cháu rất mong các cô chú giúp đỡ để chúng cháu vẫn được đến trường. Chị gái đang là người thay Ba làm chỗ dựa cho tụi cháu, nhưng một mình chị đang nuôi&nbsp;ba con nhỏ nên cuộc sống cũng rất khó khăn”, cháu Bảo tâm sự.</p>
      <p><img fetchpriority="high" decoding="async" class="size-medium wp-image-743 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/76-456x400.jpg" sizes="(max-width: 456px) 100vw, 456px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/76-456x400.jpg 456w, https://quythientam.com.vn/wp-content/uploads/2023/12/76-912x800.jpg 912w, https://quythientam.com.vn/wp-content/uploads/2023/12/76-768x674.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/76-1536x1347.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/76.jpg 1880w" alt="" width="456" height="400"></p>
      <p align="center"><em>Dịch Covid-19 đã khiến người cha mà 5&nbsp;anh em nhất mực yêu thương ra đi mãi mãi</em></p>
      <p><strong>Điểm tựa cho những mảnh đời mồ côi</strong></p>
      <p>Theo báo cáo mới nhất của Bộ Lao động, Thương binh và Xã hội, hiện cả nước có 2.184 trẻ mồ côi do ảnh hưởng của đại dịch Covid-19.</p>
      <p>Để kịp thời hỗ trợ, giảm nhẹ nỗi đau thương, mất mát của các cháu, thời gian qua, Quỹ Thiện Tâm đã triển khai khảo sát hoàn cảnh thực tế nhằm kịp thời hỗ trợ cho các cháu nhỏ có bố, mẹ mất vì Covid-19. Sau gần một tháng khẩn trương, đến nay, Quỹ Thiện Tâm đã hỗ trợ cho 837 cháu nhỏ mồ côi dưới 16 tuổi có hoàn cảnh đặc biệt khó khăn. Mức hỗ trợ từ 700.000 đồng đến 1.000.000 đồng/cháu/tháng, thời gian hỗ trợ giai đoạn 1 kéo dài trong 11 tháng.</p>
      <p><img decoding="async" class="size-medium wp-image-742 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/5-600x400.jpg" sizes="(max-width: 600px) 100vw, 600px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/5-600x400.jpg 600w, https://quythientam.com.vn/wp-content/uploads/2023/12/5-1200x800.jpg 1200w, https://quythientam.com.vn/wp-content/uploads/2023/12/5-768x512.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/5-1536x1024.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/5.jpg 1920w" alt="" width="600" height="400"></p>
      <p><img decoding="async" class="size-medium wp-image-741 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/6-600x400.jpg" sizes="(max-width: 600px) 100vw, 600px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/6-600x400.jpg 600w, https://quythientam.com.vn/wp-content/uploads/2023/12/6-1200x800.jpg 1200w, https://quythientam.com.vn/wp-content/uploads/2023/12/6-768x512.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/6-1536x1024.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/6.jpg 1920w" alt="" width="600" height="400"></p>
      <p align="center"><em>Đại diện Quỹ Thiện Tâm trao quà cho&nbsp;</em><em>người thân các</em>&nbsp;<em>cháu mồ côi</em>&nbsp;<em>do Covid-19 tại quận 1 (Tp.HCM)</em></p>
      <p><img loading="lazy" decoding="async" class="size-medium wp-image-740 aligncenter" src="https://quythientam.com.vn/wp-content/uploads/2023/12/84-535x400.jpg" sizes="(max-width: 535px) 100vw, 535px" srcset="https://quythientam.com.vn/wp-content/uploads/2023/12/84-535x400.jpg 535w, https://quythientam.com.vn/wp-content/uploads/2023/12/84-1070x800.jpg 1070w, https://quythientam.com.vn/wp-content/uploads/2023/12/84-768x574.jpg 768w, https://quythientam.com.vn/wp-content/uploads/2023/12/84-1536x1149.jpg 1536w, https://quythientam.com.vn/wp-content/uploads/2023/12/84.jpg 1920w" alt="" width="535" height="400"></p>
      <p align="center"><em>Các em nhỏ mồ côi của huyện Hoóc Môn (Tp.HCM) nhận hỗ trợ của Quỹ Thiện Tâm</em></p>
      <p>Xúc động trước tấm lòng của Quỹ Thiện Tâm, bà Mai Thị Hồng Hoa – Phó Chủ tịch Quận 1 (Tp.HCM) bày tỏ: “Hơn lúc nào hết, các cháu nhỏ mồ côi đang rất cần sự quan tâm, chăm sóc của cộng đồng xã hội và những nhà hảo tâm. Mỗi phần quà, mỗi sự sẻ chia lúc này đặc biệt có ý nghĩa để các cháu có nguồn kinh phí duy trì cuộc sống và tiếp tục đến trường khi mất đi những người thân yêu nhất. Thay mặt các gia đình, lãnh đạo Quận 1 xin cảm ơn sự chung tay và đồng hành của Quỹ Thiện Tâm – Tập đoàn Vingroup vì nghĩa cử cao đẹp này”.</p>
      <p>Hiện nay, Quỹ Thiện Tâm vẫn đang tiếp tục rà soát các cháu nhỏ mồ côi tại các tỉnh Miền Nam để đánh giá và hỗ trợ kịp thời.</p>
      </div>`,
    url_detail:
      "nang-do-nhung-manh-doi-tre-tho-mo-coi-bo-me-trong-dai-dich-covid-19",
  },
  {
    id: 9,
    title: "Chào tất cả mọi người!",
    createdAt: "22 May, 2024",
    createdBy: "admin",
    url_image: "",
    descripton:
      "Cảm ơn vì đã sử dụng trang Web. Đây là bài viết đầu tiên của bạn. Sửa hoặc xóa nó, và bắt đầu bài viết của bạn nhé!",
    categories: "chưa phân loại",
    comment: [
      {
        id: 1,
        author: "Một người bình luận WordPress",
        url_author: "https://vi.wordpress.org/",
        avatar: "/assets/images/d7a973c7dab26985da5f961be7b74480.png",
        email: "thientung57203@gmail.com",
        time: "22 May, 2024 at 7:00 am",
        content: `<p>Hi, this is a comment.<br>
        To get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.<br>
        Commenter avatars come from <a href="https://en.gravatar.com/">Gravatar</a>.</p>`,
      },
    ],
    detail: `<div class="entry-content clear" ast-blocks-layout="true" itemprop="text">	
      <p>Cảm ơn vì đã sử dụng trang Web. Đây là bài viết đầu tiên của bạn. Sửa hoặc xóa nó, và bắt đầu bài viết của bạn nhé!</p>
      </div>`,
    url_detail: "chao-moi-nguoi",
  },
];

export const CATEGORY_MOCK: Category[] = [
  {
    id: 1,
    name: "an sinh xã hội",
    description: "an sinh xã hội",
  },
  {
    id: 2,
    name: "chăm sóc sức khỏe cộng đồng",
    description: "chăm sóc sức khỏe cộng đồng",
  },
  {
    id: 3,
    name: "hỗ trợ sinh kế",
    description: "hỗ trợ sinh kế",
  },
  {
    id: 4,
    name: "tin tức & sự kiện",
    description: "tin tức & sự kiện",
  },
  {
    id: 5,
    name: "văn hóa & giáo dục",
    description: "văn hóa & giáo dục",
  },
  {
    id: 6,
    name: "chưa phân loại",
    description: "chưa phân loại",
  },
];
