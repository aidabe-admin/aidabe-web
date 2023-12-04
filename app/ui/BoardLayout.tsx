"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '@/app/components/layout/styles/board.module.scss';

import Modal from '@/app/ui/modal';

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

export default function BoardLayout({board} : Board) {
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
        <>
            <div className={styles.board_cont}>
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
                </div>
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
        </>
    )
}