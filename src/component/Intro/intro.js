import React from 'react'
import './intro.css';
import bg from '../MyImage/image.png';
import btnImg from '../assets/hireme.png';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
      <div id='introContent'>
        <span className='hello'>Hello,</span>{/*span is very similar to the div tag, but div is a block-level tag and span is an inline tag. */ }
        <span className='introText'>I'm <span className='introName'>Karishma</span><br/>Frontend Developer</span>
        <p className='introPara'>I'm 3rd year undergraduate in Computer Science and Engineering,in ABES.<br/>
        I'm in With a 1 year Experience at Google.</p>
        <Link>
          <button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg'/>Hire Me</button>
        </Link>
      </div>
      <div className='imgDiv'><img src={bg} alt='selfImage' className='bg' /></div>
      

    </section>
 
   
  )
}

export default Intro;