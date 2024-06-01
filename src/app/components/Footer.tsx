
import React from 'react'
import { Row } from 'react-bootstrap';
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
    return (
        <div className='footer-down'>
            <Row>
                <footer className="footer">
                    <div className="waves">
                        <div className="wave" id="wave1"></div>
                        <div className="wave" id="wave2"></div>
                        <div className="wave" id="wave3"></div>
                        <div className="wave" id="wave4"></div>
                    </div>
                    <ul className="social-icon">
                        <li className="social-icon__item"><Link className="social-icon__link" href="#">
                            <i ><CiInstagram /></i>
                        </Link></li>
                        <li className="social-icon__item"><Link className="social-icon__link" href="#">
                            <i><FaLinkedin /></i>
                        </Link></li>
                        <li className="social-icon__item"><Link className="social-icon__link" href="#">
                            <i><FaTelegram /></i>
                        </Link></li>
                        <li className="social-icon__item"><Link className="social-icon__link" href="#">
                            <i><FaWhatsapp /></i>
                        </Link></li>
                    </ul>
                    <ul className="menu">
                        <li className="menu__item"><Link className="menu__link" href="/">Home</Link></li>
                        <li className="menu__item"><Link className="menu__link" href="about">About</Link></li>
                        <li className="menu__item"><Link className="menu__link" href="/service">Services</Link></li>
                        <li className="menu__item"><Link className="menu__link" href="#">Team</Link></li>
                        <li className="menu__item"><Link className="menu__link" href="/callus">Contact</Link></li>

                    </ul>
                    <p>&copy;2024 |Jassim Dev</p>
                </footer>
            </Row>
        </div>

    )
}

export default Footer
