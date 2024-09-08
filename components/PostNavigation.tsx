// components/PostNavigation.tsx
import Link from "next/link";

interface Post {
  url_detail: string;
  title: string;
}

interface PostNavigationProps {
  postNext: Post | null;
  postPre: Post | null;
}

const PostNavigation: React.FC<PostNavigationProps> = ({
  postNext,
  postPre,
}) => (
  <nav className="post-navigation" role="navigation">
    <span className="sr-only">Post navigation</span>
    <div className="nav-links flex justify-between items-center">
      {/* Previous Post Navigation */}
      <div className="nav-previous flex items-center w-1/3">
        {postPre && (
          <Link
            href={`/${postPre.url_detail}`}
            title={postPre.title}
            className="flex items-start hover:text-[#c10fff] flex-col text-[#8a95a7] space-y-2"
            rel="prev"
          >
            <span className="ast-post-nav flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 mr-2"
                fill="currentColor"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path>
              </svg>
              <span className="text-base font-medium uppercase">Previous</span>
            </span>
            <p className="ml-2 line-clamp-1">{postPre.title}</p>
          </Link>
        )}
      </div>
      {/* Next Post Navigation */}
      <div className="nav-next flex items-center w-1/3 justify-end">
        {postNext && (
          <Link
            href={`/${postNext.url_detail}`}
            title={postNext.title}
            className="flex items-end hover:text-[#c10fff] flex-col text-[#8a95a7] space-y-2"
            rel="next"
          >
            <span className="ast-post-nav flex items-center">
              <span className="text-base font-medium uppercase">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 ml-2"
                fill="currentColor"
              >
                <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"></path>
              </svg>
            </span>
            <p className="ml-2 line-clamp-1">{postNext.title}</p>
          </Link>
        )}
      </div>
    </div>
  </nav>
);

export default PostNavigation;
