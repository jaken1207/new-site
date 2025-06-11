import React from "react";
import { Badge } from "../_ui/Badge";

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
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const BlogCategory = ({
  blogs,
  selectedCategory,
  onCategoryChange,
}: BlogListProps) => {
  // 重複を除去してユニークなカテゴリのみを取得
  const uniqueCategories = Array.from(
    new Set(blogs.map((blog) => blog.category))
  );
  const allCategories = ["すべて", ...uniqueCategories];
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {allCategories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "secondary"}
          className={
            `cursor-pointer border border-gray-200 shadow-sm hover:bg-green-600 hover:text-white ` +
            (selectedCategory === category ? "bg-green-600 text-white" : "")
          }
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
};

export default BlogCategory;
