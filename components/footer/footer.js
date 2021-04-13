import styles from './footer.module.css';
import React from 'react';
import Icon from '@mdi/react';
import {mdiGithub, mdiLinkedin, mdiInstagram} from "@mdi/js";
import Link from "next/link";


const FooterCards = (props) => {
    return (<Icon path={props.path}
                  size={props.size}
                  color={props.color}
    />);
}

const Footer = ({}) => {

    let gitHub = <FooterCards path={mdiGithub} size={1.5} color={"#ffff"}/>
    let instagram = <FooterCards path={mdiInstagram} size={1.5} color={"#ffff"}/>
    let linkedin = <FooterCards path={mdiLinkedin} size={1.5} color={"#ffff"}/>

    return (<div className={styles.footer}>
            <footer>
                <div className={styles.title}>
                    <h2>Hecho por</h2>
                </div>
                <div className={styles.developers}>
                    <div>
                        <p className={styles.text}>Daniel Lagos</p>
                        <div className={styles.elements}>
                            <div className={styles.git}>
                                <Link href={"https://github.com/Daniel-Lagos01"}><a title={'GitHub'}>{gitHub}</a></Link>
                            </div>
                            <div className={styles.instagram}>
                                <Link href={"https://www.instagram.com/s_alejandro_15/"}><a
                                    title={'Instagram'}>{instagram}</a></Link>
                            </div>
                            <div className={styles.linkedin}>
                                <Link href={"https://www.linkedin.com/in/sergio-quintana-926566207/"}><a
                                    title={'LinkedIn'}>{linkedin}</a></Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className={styles.text}>Sergio Quintana</p>
                        <div className={styles.elements}>
                            <div className={styles.git}>
                                <Link href={"https://github.com/sergio1599"}><a title={'GitHub'}>{gitHub}</a></Link>
                            </div>
                            <div className={styles.instagram}>
                                <Link href={"https://www.instagram.com/s_alejandro_15/"}><a
                                    title={'Instagram'}>{instagram}</a></Link>
                            </div>
                            <div className={styles.linkedin}>
                                <Link href={"https://www.linkedin.com/in/sergio-quintana-926566207/"}><a
                                    title={'LinkedIn'}>{linkedin}</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;