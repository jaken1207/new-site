// import BlogList from "../_comp/BlogList";
// import { client } from "../_lib/client";

// export default async function BlogsPage() {
//   try {
//     const data = await client.getList({
//       endpoint: "blog",
//     });

//     console.log(data); // 確認用：後で消してOK

//     // ここで data.contents などを使って一覧表示する処理を書くとよい
//     return <BlogList blogs={data.contents} />;
//   } catch (err) {
//     throw new Error();
//   }
// }
import Link from "next/link";
import Image from "next/image";

import { Calendar, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_comp/_ui/card";
import { Badge } from "../_comp/_ui/Badge";

export default function BlogPage() {
  const blogPosts = [
    {
      slug: "shoulder-pain-causes",
      title: "肩こりの原因と効果的な対処法",
      excerpt:
        "デスクワークが増える現代において、肩こりは多くの方が抱える悩みです。今回は肩こりの主な原因と、日常でできる対処法について詳しく解説します。",
      category: "症状解説",
      author: "田中院長",
      date: "2024-01-15",
      image: "/treat1.jpg",
    },
    {
      slug: "sports-injury-prevention",
      title: "スポーツ外傷を予防するためのストレッチ方法",
      excerpt:
        "スポーツを楽しむ上で怪我の予防は非常に重要です。適切なウォーミングアップとストレッチで、スポーツ外傷のリスクを大幅に減らすことができます。",
      category: "スポーツ",
      author: "佐藤副院長",
      date: "2024-01-10",
      image: "/treat1.jpg",
    },
    {
      slug: "lower-back-pain-exercises",
      title: "腰痛改善のための簡単エクササイズ",
      excerpt:
        "腰痛に悩む方必見！自宅で簡単にできる腰痛改善エクササイズをご紹介します。継続することで腰痛の予防と改善が期待できます。",
      category: "運動療法",
      author: "山田スタッフ",
      date: "2024-01-05",
      image: "/treat1.jpg",
    },
    {
      slug: "traffic-accident-treatment",
      title: "交通事故後の治療について知っておくべきこと",
      excerpt:
        "交通事故に遭われた際の治療の流れや、自賠責保険の適用について詳しく説明します。早期の適切な治療が重要です。",
      category: "交通事故",
      author: "田中院長",
      date: "2023-12-28",
      image: "/treat1.jpg",
    },
  ];

  const categories = ["すべて", "症状解説", "スポーツ", "運動療法", "交通事故"];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ブログ</h1>
          <p className="text-gray-600 text-lg">
            健康に関する情報や治療について、専門スタッフが分かりやすく解説します
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "すべて" ? "default" : "secondary"}
              className="cursor-pointer hover:bg-green-600 hover:text-white"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl hover:text-green-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
