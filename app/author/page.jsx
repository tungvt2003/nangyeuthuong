import { POSTS_MOCK } from "@data/Data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Author = () => {
  return (
    <div className="md:container">
      <div>
        <div
          className="md:flex space-y-8 md:space-y-0 justify-between items-center"
          style={{ padding: "3rem" }}
        >
          <h2 className="text-4xl font-semibold">Author Name: Admin</h2>
          <Image
            src="/assets/images/logoAdmin.png"
            height={100}
            width={100}
            className="rounded-[50px]"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {POSTS_MOCK.map((item) => (
              <div key={item.id} className="md:p-4 bg-white space-y-4">
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
                  <p className="text-blue-800 uppercase font-bold">
                    {item.categories}
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold line-clamp-2 cursor-pointer">
                    <Link href={`/${item.url_detail}`}>{item.title}</Link>
                  </h2>
                </div>

                <div>
                  <p className="text-sm text-blue-800 font-bold ">
                    <span className="hover:text-[#c10fff] cursor-pointer">
                      <Link href={`${item.url_detail}/#respond`}>
                        Leave a Comment
                      </Link>
                    </span>{" "}
                    /{" "}
                    <span className="text-blue-700 cursor-pointer hover:text-[#c10fff] uppercase">
                      {" "}
                      {item.categories}{" "}
                    </span>
                    /{" "}
                    <span className="hover:text-[#c10fff]">
                      <Link href="/author">admin</Link>
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 line-clamp-2">
                    {item.descripton}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
