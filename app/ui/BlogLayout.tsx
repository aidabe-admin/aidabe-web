"use client"

import styles from "@/app/ui/styles/blogLayout.module.scss";

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
        <div className={styles.blog_Layout}>
                {posts.map((post) => (
                    <Link className={styles.post} key={post.title} href={post.link}>
                        <div className={styles.postimg_container}>
                            <Image
                                alt={post.alt}
                                src={post.image}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className={styles.postimg_mask}>
                            <p className={styles.post_link}>leer más</p>
                        </div>
                        <div className={styles.postdata_container}>
                            <h4 className={styles.post_title}>
                                {post.title}
                            </h4>
                            <p className={styles.post_text}>{post.text}</p>
                        </div>
                    </Link>
                ))}
        </div>
    )
}