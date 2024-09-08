"use client";

import React, { useState } from "react";
import FormComment from "./FormComment";
import FormReply from "./FormReply";
import { PostType } from "../types/Data";

interface PostCommentProps {
  post: PostType | null | undefined;
}

const CommentSection: React.FC<PostCommentProps> = ({ post }) => {
  const [replyingTo, setReplyingTo] = useState<number | null>(null); // ID của comment đang được reply

  const handleReply = (commentId: number) => setReplyingTo(commentId);
  const handleCancelReply = () => setReplyingTo(null);

  return (
    <div id="comments" className="comments-area comment-form-position-below">
      {post && post.comment.length > 0 ? (
        <div className="p-10">
          <h3 className="comments-title text-4xl font-semibold mb-4">
            {post.comment.length} thought on "{post.title}"
          </h3>
          {post.comment.map((item) => (
            <ul key={item.id} className="ast-comment-list space-y-4">
              <li className="comment even thread-even depth-1">
                <article className="bg-white p-4 rounded shadow-sm">
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="mr-3 flex items-center justify-center">
                        <img
                          alt="User Avatar"
                          src={item.avatar}
                          className="avatar avatar-50 photo rounded-full"
                          height="50"
                          width="50"
                          decoding="async"
                        />
                      </div>
                      <header className="flex justify-between items-center w-full">
                        <span className="text-lg font-bold">
                          <a
                            href={item.url_author}
                            className="url text-blue-800 hover:text-[#c10fff] duration-300"
                            rel="ugc external nofollow"
                          >
                            {item.author}
                          </a>
                        </span>
                        <div className="text-sm text-blue-600 hover:text-[#c10fff] duration-300">
                          <span className="timendate">
                            <a href={`${post.url_detail}/${item.author}`}>
                              <time dateTime="2024-05-22T07:00:46+00:00">
                                {item.time}
                              </time>
                            </a>
                          </span>
                        </div>
                      </header>
                    </div>
                    <section className="ast-comment-content comment entry-contents mt-2">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.content as string,
                        }}
                      />
                      <div className="mt-4">
                        <span>
                          <a
                            className="comment-reply-link py-1 px-3 rounded-md text-blue-600 hover:text-white hover:bg-[#060097] duration-300"
                            onClick={() => handleReply(item.id)}
                          >
                            Reply
                          </a>
                        </span>
                      </div>
                    </section>
                  </div>
                </article>
              </li>
              {replyingTo === item.id && (
                <FormReply handleCancelReply={handleCancelReply} item={item} />
              )}
            </ul>
          ))}
        </div>
      ) : null}

      {!replyingTo && <FormComment />}
    </div>
  );
};

export default CommentSection;
