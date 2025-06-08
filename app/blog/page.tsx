import ComingSoon from "../_comp/_ui/ComingSoon";
import BlogList from "../_comp/BlogList";
import { client } from "../_lib/client";

export default async function BlogsPage() {
  try {
    const data = await client.getList({
      endpoint: "blog",
    });

    console.log(data); // 確認用：後で消してOK

    // ここで data.contents などを使って一覧表示する処理を書くとよい
    return <BlogList blogs={data.contents} />;
  } catch (err) {
    throw new Error();
  }
}
