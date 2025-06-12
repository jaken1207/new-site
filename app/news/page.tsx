import { Metadata } from "next";
import BlogPage from "../_comp/(blog)/BlogPage";
import { client } from "../_lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

export const metadata: Metadata = {
  title: "お知らせ一覧",
};
type BlogItem = {
  id: string;
  title: string;
  excerpt: string;
  category: string[];
  author: string[];
  publishedAt: string;
  heroImage?: {
    url: string;
  };
};
export default async function Page() {
  try {
    const data: MicroCMSListResponse<BlogItem> = await client.getList<BlogItem>(
      {
        endpoint: "news",
      }
    );
    const formattedBlogs = data.contents.map((item) => ({
      // item.idをページを識別するためのslugとして使用
      slug: item.id,
      title: item.title,
      excerpt: item.excerpt,
      category: item.category[0],
      author:
        Array.isArray(item.author) && item.author.length > 0
          ? item.author[0]
          : "",
      date: item.publishedAt?.split("T")[0],
      // heroImageが存在しない場合はデフォルト画像を使用
      // ここでは、item.heroImage?.urlが存在しない場合に"/NoImage.png"を使用
      image: item.heroImage?.url || "/NoImage.png",
    }));

    return (
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">お知らせ</h1>
            <p className="text-gray-600 text-lg">
              営業時間の変更や休診日のお知らせ、ブログなど、最新の情報をこちらで随時発信してまいります。
            </p>
          </div>
          <BlogPage blogs={formattedBlogs} />
        </div>
      </div>
    );
  } catch (err) {
    console.error("データ取得に失敗しました", err);
    throw new Error("ブログデータの取得に失敗しました。");
  }
}
