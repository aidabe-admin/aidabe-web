import styles from '@/app/(secciones)/actualidad/[articles]/post.module.scss'

import Link from 'next/link';
import Image from 'next/image';

import NotFound from "@/app/not-found";
import posts from "@/data/blog-posts.json";
import Post from "@/app/content/post-1.mdx";

export default function Page({ params }: { params: { articles: string } }) {
  const getPost = posts.find((post) => post.link === `/${params.articles}`);

  return (
    <main className="blog-post-wrapper">
      {getPost ? (
        <>
          <div className="blog-post">
            <Post />
          </div>
          <div className="latest-posts-cont">
            <div className="latest-layout">
              <h3 className='section-subtitle'>Últimas noticias</h3>
              <div className={styles.blogLayout_cont}>
                <div className={styles.blogLayout}>
                    {posts.slice(0,3).map((post) => (
                        <Link className={styles.blogPost} key={post.title} href={post.link}>
                            <div className={styles.blogPost_imgContainer}>
                                <Image
                                    alt={post.alt}
                                    src={post.image}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.blogPost_mask}>
                                <p className={styles.blogPost_link}>leer más</p>
                            </div>
                            <div className={styles.blogPost_dataCont}>
                                <h4 className={styles.blogPost_title}>
                                    {post.title}
                                </h4>
                                <p className={styles.blogPost_text}>{post.text}</p>
                            </div>
                        </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </main>
  );
}