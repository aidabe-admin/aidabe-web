"use client"

import styles from '@/app/components/layout/styles/board.module.scss';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import SectionTitle from '@/app/ui/sectionTitle'
import Button from '@/app/ui/button';
import Modal from '@/app/ui/modal';
import Link from 'next/link';

interface Members {
    pic: string;
    name: string;
    bio: string;
    linkedin: string;
}

interface Board {
    board: Members[];
}

interface MemberData {
    name?: string;
    position?: string;
    pic?: string;
    bio?: string;
    linkedin?: string;
}

export default function Board({board} : Board) {
    const [selectedMember, setSelectedMember] = useState<MemberData | null>(board[0]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [modal]);

    const handleMemberClick = (member: MemberData) => {
        setSelectedMember(member);
        setModal(true);
    };

    return(
        <section className={styles.board_cont}>
            <SectionTitle title='La asociación' />
            <div className={styles.boardDetails_cont}>
                <p className={styles.boardDetails}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
            </div>
            <div className={styles.boardLayout_cont}>
                <h3 className={styles.boardSubtitle}>Conoce a quienes impulsan a AIDABE</h3>
                <div className={styles.boardLayout}>
                    {board.map((member, index) => (
                        <div className={styles.boardMember} key={index} onClick={() => handleMemberClick(member)}>
                            <div className={styles.boardMember_imageCont}>
                                <div className={styles.boardMember_imageCont}>
                                    <Image
                                        alt={`Foto de perfil de ${member.name}`}
                                        src={member.pic}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className={styles.seeMore_cont}>
                                    <p className={styles.seeMore_member}>Ver más</p>
                                </div>
                            </div>
                            <div className={styles.boardMember_cont}>
                                <h4 className={styles.boardMember_name}>{member.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/asociacion" className={styles.linkBtn}>
                    <Button style='danger' text='Conocé más' />
                </Link>
            </div>
            <Modal
                className={modal ? " active-modal" : ""}
                handleModal={() => setModal(false)}
                name={selectedMember?.name}
                position={selectedMember?.position}
                bio={selectedMember?.bio}
                image={selectedMember?.pic}
                link={selectedMember?.linkedin}
            />
        </section>
    )
}