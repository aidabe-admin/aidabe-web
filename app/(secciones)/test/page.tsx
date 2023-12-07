import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
 
export default async function Blog() {
  const sortedPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
 
  return (
    <>
      <h1>Blog posts</h1>
      <div>
        {sortedPosts.map((post) => (
          <div key={post._id}>{post.name}</div>
        ))}
      </div>
    </>
  );
}