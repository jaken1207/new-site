import React from "react";

type Blog = {
  id: string | number;
  title: string;
  body: string;
};

type BlogListProps = {
  blogs: Blog[];
};

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="text-gray-700">{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
