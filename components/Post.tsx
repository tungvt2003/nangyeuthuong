import { PostType } from "../types/Data";
import Link from "next/link";
import React from "react";

interface PostProps {
  data: PostType[];
}

const Post: React.FC<PostProps> = ({ data }) => {
  return (
    <div>
      <section className="post">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.id} className="md:p-4 bg-white rounded">
              {item.url_image !== "" ? (
                <Link href={`/${item.url_detail}`}>
                  <div className="h-[240px] cursor-pointer  relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)] z-10 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={item.url_image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              ) : (
                <></>
              )}
              <div>
                <h2 className="text-lg font-semibold line-clamp-2 cursor-pointer">
                  <Link href={`/${item.url_detail}`}>{item.title}</Link>
                </h2>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  <span>{item.createdAt}</span> /{" "}
                  <span className="hover:text-blue-700 underline cursor-pointer">
                    {" "}
                    {item.comment.length === 0
                      ? "No Comments"
                      : `${item.comment.length} Comments`}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 line-clamp-2">{item.descripton}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Post;
