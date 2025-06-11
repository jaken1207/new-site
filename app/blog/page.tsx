import BlogList from "../_comp/BlogList";
import CategoryFilter from "../_comp/CategoryFilter";
import { client } from "../_lib/client";

export default async function BlogPage() {
  try {
    const data = await client.getList({
      endpoint: "blog",
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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">ブログ</h1>
            <p className="text-gray-600 text-lg">
              健康に関する情報や治療について、専門スタッフが分かりやすく解説します
            </p>
          </div>
          {/* Category Filter */}
          <CategoryFilter blogs={formattedBlogs} />
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
