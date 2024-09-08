"use client";

import Post from "@components/Post";
import { CATEGORY_MOCK, POSTS_MOCK } from "@data/Data";
import Link from "next/link";
import { useState } from "react";

export default function ActivatePage() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
  };

  const filteredPosts =
    selectedCategory === null
      ? POSTS_MOCK
      : POSTS_MOCK.filter((post) =>
          CATEGORY_MOCK.some(
            (category) =>
              category.id === selectedCategory &&
              category.name === post.categories
          )
        );

  return (
    <div className="md:container py-10">
      <ul className="hidden md:flex justify-center items-center flex-wrap space-x-2">
        <li
          className={`py-2 px-3 ${
            selectedCategory === null
              ? "bg-[#E7A249] text-white"
              : "bg-transparent text-[#7A7A7A]"
          } hover:text-white hover:bg-[#E7A249] duration-300 rounded-md`}
          onClick={() => handleCategoryClick(null)}
        >
          <Link href="">All Posts</Link>
        </li>
        {CATEGORY_MOCK.map((category) => (
          <li
            key={category.id}
            className={`py-2 px-3 ${
              selectedCategory === category.id
                ? "bg-[#E7A249] text-white"
                : "bg-transparent text-[#7A7A7A]"
            } hover:text-white hover:bg-[#E7A249] duration-300 uppercase rounded-md`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <a href="#">{category.name}</a>
          </li>
        ))}
      </ul>
      <Post data={filteredPosts} />
    </div>
  );
}
