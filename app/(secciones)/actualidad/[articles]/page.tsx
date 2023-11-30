import NotFound from "@/app/not-found";
import posts from "@/data/blog-posts.json";
import Post from "@/app/content/post-1.mdx";

export default function Page({ params }: { params: { articles: string } }) {
  const getPost = posts.find((post) => post.link === `/${params.articles}`);

  return (
    <main className="blog-post-wrapper">
      {getPost ? (
          <Post />
      ) : (
        <NotFound />
      )}
    </main>
  );
}