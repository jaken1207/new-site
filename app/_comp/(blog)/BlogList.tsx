"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, User, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_ui/card";
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
};

export default function BlogList({ blogs }: BlogListProps) {
  // 記事が一件もない場合の空の状態を表示
  if (blogs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            記事がありません
          </h3>
          <p className="text-gray-500 max-w-md">
            まだブログ記事が投稿されていません。最初の記事が投稿されるまでお待ちください。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 shadow-sm">
            <div className="relative h-48 w-full">
              <Image
                src={post.image || "/NoImage.png"}
                alt={post.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge
                  variant="secondary"
                  className="border border-gray-200 shadow-sm"
                >
                  {post.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
              </div>
              <CardTitle className="text-xl hover:text-green-600 transition-colors line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </CardDescription>
              <div className="flex items-center text-sm text-gray-500">
                {post.author && (
                  <>
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
