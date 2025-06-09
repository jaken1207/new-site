import React from "react";
import { Badge } from "./_ui/Badge";

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
const CategoryFilter = ({ blogs }: BlogListProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {blogs.map((blog) => (
        <Badge
          key={blog.category}
          variant={blog.category === "すべて" ? "default" : "secondary"}
          className="cursor-pointer hover:bg-green-600 hover:text-white border border-gray-200 shadow-sm"
        >
          {blog.category}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryFilter;
