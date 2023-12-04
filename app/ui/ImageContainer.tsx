import Image from "next/image";

export default function ImageContainer({className, image, alt} : {
    className: string,
    image: string,
    alt: string
}) {
    return(
        <div className={className}>
            <Image src={image} alt={alt} fill sizes="100vw" />
        </div>
    )
}