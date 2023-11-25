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
                {posts.map((post) => (
                    <div className={styles.blogPost} key={post.title}>
                        <div className={styles.blogPost_imgContainer}>
                            <Image
                                alt={post.alt}
                                src={post.image}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <Link className={styles.blogPost_mask} href={post.link}>
                            <p className={styles.blogPost_link}>Ver más</p>
                        </Link>
                        <div className={styles.blogPost_dataCont}>
                            <h4 className={styles.blogPost_title}>
                                {post.title}
                            </h4>
                            <p className={styles.blogPost_text}>{post.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/actualidad">
                <Button text='ver más' style='default' />
            </Link>
        </section>
    )
}