'use client'

import { Container, Row } from "react-bootstrap"
import style from './page.module.css'
import image from '../../../public/photo_cloves_resume.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Sidebar() {
    return (
        <Container fluid className={style.container}>
            <Row>
                <div className={style.containerPhoto}>
                    <Image src={image} alt='Cloves José' width={180} height={180} style={{ borderRadius: "100%", margin: "0px", padding: "0px" }}/>
                </div>
                <div className={style.containerInfo}>
                    <p className={style.name}>Cloves Duarte</p>
                </div>
                <div className={style.containerInfo}>
                    <p className={style.subTitle}>Front-end Developer</p>
                </div>
                <div className={style.containerInfo}>
                    <a target='_blank' href="https://www.linkedin.com/in/cloves-duarte-silva/" style={{ marginRight: "5px" }}>
                        <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                    <a target='_blank' href="https://github.com/Cloves-Jose" style={{ marginLeft: "5px" }}>
                        <FontAwesomeIcon icon={faGithub} size='2x'/>
                    </a>
                </div>
            </Row>
        </Container>
    )
}