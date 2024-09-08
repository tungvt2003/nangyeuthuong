"use client";

import CommentSection from "@components/PostComment";
import PostNavigation from "@components/PostNavigation";
import { POSTS_MOCK } from "@data/Data";
import "@styles/postDetail.css";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const { postDetail } = useParams();

  const post = POSTS_MOCK.find(
    (post) => post.url_detail.toString() === postDetail
  );

  if (!post) {
    return <p>Post not found</p>; // Handle case where post is not found
  }

  const currentIndex = POSTS_MOCK.findIndex((p) => p.id === post.id);
  const postNext = POSTS_MOCK[currentIndex + 1] || null;
  const postPre = POSTS_MOCK[currentIndex - 1] || null;

  return (
    <div className="w-full max-w-4xl mx-auto my-10 space-y-5">
      <div className="bg-[#f5f5f58c]">
        <div className="space-y-4 mb-4">
          <h2 className="text-4xl font-semibold">{post.title}</h2>
          <p className="text-blue-700 text-sm font-medium">
            By{" "}
            <span className="cursor-pointer hover:text-[#c10fff] duration-300">
              <Link href="/author">{post.createdBy}</Link>
            </span>{" "}
            / <span>{post.createdAt}</span>
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.detail }} />
      </div>
      <PostNavigation postNext={postNext} postPre={postPre} />
      <div className="bg-[#f5f5f58c] py-5 flex items-center justify-center">
        <CommentSection post={post} />
      </div>
    </div>
  );
};

export default Page;
