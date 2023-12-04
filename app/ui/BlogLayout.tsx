import styles from '@/app/components/layout/styles/blog-layout.module.scss'

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
    title: string;
    image: string;
    text: string;
    link: string;
    alt: string;
}

interface BlogLayoutProps {
    posts: BlogPost[];
}

export default function BlogLayout({ posts }: BlogLayoutProps) {
    return (
        <div className={styles.blogLayout}>
                {posts.map((post) => (
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
    )
}