import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { HomeRounded, Telegram } from '@material-ui/icons'
import { NavLink, withRouter } from 'react-router-dom'
import data from '../../utils/resumeData'
import CustomButton from '../Button/Button'

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'


const Header = (props) => {
    const pathName = props?.location?.pathName;


    return (
        <Navbar expand="lg" sticky='top' className='header'>
            <Nav.Link as={NavLink} to="/" className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>
                    {/* Resume Link */}
                    <Nav.Link as={NavLink} to="/" className={pathName === "/" ? "header_link_active" : "header_link"}>
                        Curriculum
                    </Nav.Link>
                    {/* Portfolio */}
                    <Nav.Link as={NavLink} to="/portfolio" className={pathName === "/portfolio" ? "header_link_active" : "header_link"}>
                        Portafolio
                    </Nav.Link>
                    {/* Contacto */}
                    <Nav.Link as={NavLink} to="/contacto" className={pathName === "/contacto" ? "header_link_active" : "header_link"}>
                        Contacto
                    </Nav.Link>
                </Nav>

                <div className="header_right">
                    {Object.keys(data.socials).map((Key, index) => (
                        <a href={data.socials[Key].link} key={index} target="blank">
                            {data.socials[Key].icon}
                        </a>
                    ))}
                    <Nav.Link as={NavLink} to="/contacto">
                        <CustomButton text={'Contactame'} icon={<Telegram />} />
                    </Nav.Link>
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
