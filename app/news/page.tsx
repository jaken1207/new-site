import BlogCategory from "../_comp/(blog)/BlogCategory";
import BlogList from "../_comp/(blog)/BlogList";
import { client } from "../_lib/client";

export default async function BlogPage() {
  try {
    const data = await client.getList({
      endpoint: "news",
    });
    const formattedBlogs = data.contents.map((item) => ({
      slug: item.id,
      title: item.title,
      excerpt: item.excerpt,
      category:
        Array.isArray(item.category) && item.category.length > 0
          ? item.category[0]
          : "未分類",
      author:
        Array.isArray(item.author) && item.author.length > 0
          ? item.author[0]
          : "",
      date: item.publishedAt?.split("T")[0],
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
          {/* Category Filter */}
          <BlogCategory blogs={formattedBlogs} />
          {/* BlogList */}
          <BlogList blogs={formattedBlogs} />
        </div>
      </div>
    );
  } catch (err) {
    console.error("データ取得に失敗しました", err);
    throw new Error("ブログデータの取得に失敗しました。");
  }
}
