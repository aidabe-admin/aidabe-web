import Image from "next/image";

export default function ImageContainer({ className, image, alt, priority }: {
    className: string,
    image: string,
    alt: string,
    priority: boolean
}) {
    return (
        <>
            {priority ? (
                <div className={className}>
                    <Image src={image} alt={alt} fill sizes="100vw" priority />
                </div>
            ) : (
                <div className={className}>
                    <Image src={image} alt={alt} fill sizes="100vw" />
                </div>
            )}
        </>
    );
}
