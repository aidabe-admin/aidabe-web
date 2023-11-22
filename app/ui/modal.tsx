import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({className, handleModal, name, position, bio, image, link } : {
    className: string,
    handleModal: () => void,
    name?: string,
    position?: string,
    bio?: string,
    image?: string,
    link?: string
}) {
    return(
        <div className={`modal${className}`}>
            <button id="close-modal" onClick={handleModal}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <div id="member-info">
                <div id="selected-member-pp">
                    <Image
                        src={image || "/aidabe-logo.png"}
                        alt={`Foto de perfil de ${name}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        fill
                    />
                </div>
                <div id="sel-member-link">
                    <Link id="link-blob" href={link || "/"}>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </div>
                <h2 id="member-name">{name}</h2>
                <h3 id="member-position">{position}</h3>
                <div id="member-bio">
                    <p className="member-bio-string">
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    )
}