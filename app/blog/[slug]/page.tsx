import Image from "next/image";
import Link from "next/link";

import { Calendar, User, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/app/_comp/_ui/Button";
import { Badge } from "@/app/_comp/_ui/Badge";
import { client } from "@/app/_lib/client";

// APIから記事を取得
async function getBlogData(slug: string) {
  try {
    const data = await client.getListDetail({
      endpoint: "blog",
      contentId: slug,
    });

    return {
      slug: data.id,
      title: data.title,
      content: data.body,
      category:
        Array.isArray(data.category) && data.category.length > 0
          ? data.category[0]
          : "未分類",
      author:
        Array.isArray(data.author) && data.author.length > 0
          ? data.author[0]
          : "匿名",
      date: data.publishedAt?.split("T")[0],
      image: data.heroImage?.url || "/NoImage.png",
    };
  } catch (error) {
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              ブログ一覧に戻る
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="relative h-64 md:h-96 w-full mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

// 静的生成用に slug 一覧を取得
export async function generateStaticParams() {
  const data = await client.getList({
    endpoint: "blog",
  });

  return data.contents.map((item: any) => ({
    slug: item.id,
  }));
}

export const dynamicParams = false;
