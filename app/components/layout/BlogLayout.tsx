import styles from '@/app/components/layout/styles/blog-layout.module.scss'
import Button from '@/app/ui/button';
import SectionTitle from '@/app/ui/sectionTitle';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPosts {
    title: string;
    image: string;
    text: string;
    link: string;
    alt: string;
}

interface PostDetail {
    posts: BlogPosts[];
}

export default function BlogLayout({posts}: PostDetail){
    return(
        <section className={styles.blogLayout_cont}>
            <SectionTitle title="Actualidad" color={true} />
            <div className={styles.blogLayout}>
            <div className={`${styles.blogPost} ${styles.firstBlogPost}`} key={posts[0].title}>
                <div className={styles.blogPost_imgContainer}>
                    <Image
                        alt={posts[0].alt}
                        src={posts[0].image}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    </div>
                    <h4 className={styles.blogPost_title}>
                        {posts[0].title}
                    </h4>
                    <p className={styles.blogPost_text}>{posts[0].text}</p>
                    <Link href={posts[0].link}>
                        <Button text='Leer más' style='danger' />
                    </Link>
                </div>
                {posts.slice(1, 3).map((post) => (
                    <div className={styles.blogPost} key={post.title}>
                        <div className={styles.blogPost_imgContainer}>
                            <Image
                                alt={post.alt}
                                src={post.image}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h4 className={styles.blogPost_title}>
                            {post.title}
                        </h4>
                        <p className={styles.blogPost_text}>{post.text}</p>
                        <Link href={post.link}>
                            <Button text='Leer más' style='danger' />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}