export interface MenuItem {
  id: number;
  title: string;
  url: string;
  attribute?: Array<{
    id: number;
    title: string;
    url: string;
  }>;
}
export interface PostType {
  id: number;
  title: string;
  createdAt: string;
  createdBy: string;
  url_image: string;
  descripton: string;
  categories: string;
  comment: CommentType[];
  detail: string; // Giữ nguyên kiểu string nếu nội dung HTML được lưu dưới dạng chuỗi
  url_detail: string;
}

export interface CommentType {
  id: number;
  avatar: string;
  author: string;
  url_author: string;
  email: string;
  time: string;
  content: string;
}

interface Category {
  id: number; // Đảm bảo rằng kiểu `id` là `number`. Nếu nó là chuỗi thì cần sửa lại thành `string`.
  name: string;
  description: string;
}
