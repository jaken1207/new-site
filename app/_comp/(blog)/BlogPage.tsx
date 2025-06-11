"use client";
import React, { useState } from "react";
import BlogCategory from "./BlogCategory";
import BlogList from "./BlogList";

type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
};

type BlogListProps = {
  blogs: Blog[];
};

const BlogPage = ({ blogs }: BlogListProps) => {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const filteredBlogs =
    selectedCategory === "すべて"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);
  return (
    <div>
      {/* Category Filter */}
      <BlogCategory
        blogs={blogs}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {/* BlogList */}
      <BlogList blogs={filteredBlogs} />
    </div>
  );
};

export default BlogPage;
