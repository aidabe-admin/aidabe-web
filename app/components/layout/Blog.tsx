import Link from 'next/link';

import SectionTitle from '@/app/ui/sectionTitle';
import BlogLayout from '@/app/ui/BlogLayout';
import Button from '@/app/ui/button';

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
        <section className="main-blog">
            <header className="title-header">
                <SectionTitle title="Actualidad" color={true} />
                <p className="section-subtitle">Nuevos modelos de negocio, innovación, sostenibilidad y las tendencias del sector.</p>
            </header>
            <BlogLayout posts={posts} /> 
            <Link href="/actualidad">
                <Button text='ver más' style='default' />
            </Link>
        </section>
    )
}