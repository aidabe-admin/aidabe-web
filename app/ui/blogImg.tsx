import Image from "next/image";

export default function BlogImg({ src, alt} : {
    src: string,
    alt: string
}) {
    return(
        <div className="blog-post-img">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
            />
        </div>
    )
}