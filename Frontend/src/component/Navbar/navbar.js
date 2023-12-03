import React from 'react'
import './navbar.css';
import Logo from '../assets/logo.png';
import ContactImg from '../assets/contact.png';
import {Link} from 'react-scroll';
const Navbar= () => {
  return (
    <div>
      <nav className='navbar'> { /*parent*/}
        <img src={Logo} alt='Logo' className='logo'/>{ /*child*/}
        <div className='desktopMenu'>
          <Link className='desktopMenuListItem'>Home</Link>
          <Link className='desktopMenuListItem'>About</Link>
          <Link className='desktopMenuListItem'>Portfolio</Link>
          <Link className='desktopMenuListItem'>Client</Link>
        </div>
        <button className='desktopMenubtn'>
          <img src={ContactImg} alt='ContactImg' className='desktopMenuImg' />Contact Me</button>
      </nav>
    </div>
  )
}

export default Navbar