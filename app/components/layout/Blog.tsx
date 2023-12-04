import styles from '@/app/components/layout/styles/blog-layout.module.scss'

import SectionTitle from '@/app/ui/sectionTitle';
import Link from 'next/link';

import Button from '@/app/ui/button';
import BlogLayout from '@/app/ui/BlogLayout';

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

export default function Blog({posts}: PostDetail){
    return(
        <section className={styles.blogLayout_cont}>
            <div className={styles.title_container}>
                <SectionTitle title="Actualidad" color={true} />
                <p className={styles.section_subtitle}>Nuevos modelos de negocio, innovación, sostenibilidad y las tendencias del sector.</p>
            </div>
            <BlogLayout posts={posts} /> 
            <Link href="/actualidad">
                <Button text='ver más' style='default' />
            </Link>
        </section>
    )
}