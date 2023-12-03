import React from 'react'
import './skills.css';
import UIDesign from '../assets/ui-design.png';
import WebDesign from '../assets/website-design.png';
import AppDesign from '../assets/app-design.png'
function Skills () {;
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I'm pursuing BTech in Computer Science and Engineering. 
        I am a person who loves to take up new challenges and learn new skills. I love meeting 
        new people, exchanging ideas, and spreading knowledge and positivity. I've been an active
        contributor to Open-Source projects.I am Skilled in C, C++, JavaScript, React js.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='sillBarImg'/>
                <div className='skillBarText'>
                <h2>Ui/UX Design</h2>
                <p>This is demo text you can write your own content here.</p>
                </div>
                
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='sillBarImg'/>
                <div className='skillBarText'>
                <h2>WebDesign</h2>
                <p></p>
                </div>
                
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='sillBarImg'/>
                <div className='skillBarText'>
                <h2>AppDesign</h2>
                <p></p>
                </div>
                
            </div>
        </div>
    </section>
  );
}

export default Skills;