import React, { useRef } from 'react'
import './Header.css'
import logo from '../../Assets/bubble-removebg-preview.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    const activeLink  = (isActive)=>(isActive)?{
        color:'white',
        backgroundColor:'var(--textCol)'
    }:{};
    const top = useRef();
    document.addEventListener('scroll',()=>{
        if(window.scrollY>20){
            if(top.current)top.current.classList.add('sticky');
        }
        if(window.scrollY<20){
            if(top.current)top.current.classList.remove('sticky');
        }
    })
    const menuClick = (header)=>{
        header.classList.toggle('active');
    }

  return (
    <header ref = {top} className=''>
        <Link to={'/'} className="logo">
            <img src={logo} alt="" />
            <h2><span>Bu</span>bbl</h2>
        </Link>
        <ul className="nav">
            <li><NavLink onClick={(e)=>menuClick(e.currentTarget.parentElement.parentElement.parentElement)} className={'link'} style={({isActive})=>activeLink(isActive)} to={'/'}>Home</NavLink></li>
            <li><NavLink onClick={(e)=>menuClick(e.currentTarget.parentElement.parentElement.parentElement)} className={'link'} style={({isActive})=>activeLink(isActive)} to={'/features'}>Features</NavLink></li>
            <li><NavLink onClick={(e)=>menuClick(e.currentTarget.parentElement.parentElement.parentElement)} className={'link'} style={({isActive})=>activeLink(isActive)} to={'/about'}>About</NavLink></li>
            <li><NavLink onClick={(e)=>menuClick(e.currentTarget.parentElement.parentElement.parentElement)} className={'link'} style={({isActive})=>activeLink(isActive)} to={'/ui'}>UI SS</NavLink></li>
            <li><NavLink onClick={(e)=>menuClick(e.currentTarget.parentElement.parentElement.parentElement)} className={'link'} style={({isActive})=>activeLink(isActive)} to={'/download'}>Download</NavLink></li>
        </ul>
        <div className="menu" onClick={(e)=>menuClick(e.currentTarget.parentElement)}>
            <div className="line"></div>
        </div>

    </header>
  )
}

export default Header