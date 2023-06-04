import React from 'react'
import './Footer.css'
import {  AiFillMail, AiFillPhone, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const activeLink  = (isActive)=>(isActive)?{
        color:'var(--textCol)'
    }:{};
  return (
    <footer>
        <div className="top">
            <div className="about">
                <div className="title">
                    <h3>About Us</h3>
                </div>
                <p>Bubbl Social is a social media start-up, looking to change the social media landscape across colleges, by providing a platform for students to interact and connect with each other.</p>
                <div className="links">
                    <a href="#"><FaFacebookF/></a>
                    <a href="#"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/bubblsocial?igshid=MzNlNGNkZWQ4Mg==" target='_blank'><AiOutlineInstagram/></a>
                    <a href="https://www.linkedin.com/company/bubbl-socialmedia/" target='_blank'><AiOutlineLinkedin/></a>
                </div>
            </div>
            <div className="support">
                <div className="title">
                    <h3>Support</h3>
                </div>
                <ul>
                    <NavLink className={'link'} style={({isActive})=>activeLink(isActive)} to={'/faq'}>FAQ</NavLink>
                    <NavLink className={'link'} style={({isActive})=>activeLink(isActive)} to={'/privacy-policy'}>Privacy Policy</NavLink>
                    <NavLink className={'link'} style={({isActive})=>activeLink(isActive)} to={'/help'}>Help</NavLink>
                    <NavLink className={'link'} style={({isActive})=>activeLink(isActive)} to={'/contact'}>Contact</NavLink>
                </ul>
            </div>
            <div className="support">
                <div className="title">
                    <h3>Links</h3>
                </div>
                <ul>
                <li><NavLink  className={'link'} style={({isActive})=>activeLink(isActive)} to={'/'}>Home</NavLink></li>
            <li><NavLink  className={'link'} style={({isActive})=>activeLink(isActive)} to={'/features'}>Features</NavLink></li>
            <li><NavLink  className={'link'} style={({isActive})=>activeLink(isActive)} to={'/about'}>About</NavLink></li>
            <li><NavLink  className={'link'} style={({isActive})=>activeLink(isActive)} to={'/ui'}>UI SS</NavLink></li>
            <li><NavLink  className={'link'} style={({isActive})=>activeLink(isActive)} to={'/download'}>Download</NavLink></li>
                </ul>
            </div>
            <div className="support">
                <div className="title">
                    <h3>Contact Us</h3>
                </div>
                <ul>
                    <li><a href="tel:+1234567890"><AiFillPhone/>+1234567890</a></li>
                    <li><a href="mailto:knowmore@gmail.com"><AiFillMail/>knowmore@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <div className="bottom">
            <p>Copyright &copy; 2023 BUBBL SOCIAL. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer