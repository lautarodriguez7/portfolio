import React, { useState } from 'react'
import './skills.css'
import skills from '../../assets/skills/code.png'
import html from '../../assets/skills/html.png'
import bootstrap from '../../assets/skills/bootstrap.png'
import css from '../../assets/skills/css.png'
import js from '../../assets/skills/js.png'
import react from '../../assets/skills/reactjs.png'
import git from '../../assets/skills/git.png'
import laravel from '../../assets/skills/laravel.png'
import php from '../../assets/skills/php.png'
import jquery from '../../assets/skills/jquery.png'
import firebase from '../../assets/skills/firebase.png'



const Skills = () => {

    const [animationSkill, setAnimationSkills] = useState(false);

    const changeAnimationSkill = () => {
        if(window.scrollY >= 1000) {
            setAnimationSkills(true);
        } else if(window.scrollY <= 1200) {
            setAnimationSkills(false);
        }
    }
    window.addEventListener("scroll", changeAnimationSkill);
    return (
        <div>
            <div className='container-skills'>
                <div className="title-skills">
                    <h1 className={animationSkill ? "animate__animated animate__zoomInUp animate__delay-1s" : "animate__animated animate__zoomOutDown"}>SKILLS</h1>
                    <img src={skills} id='img-skills' alt="" />
                </div>
                <div className='c-skills'>
                    <div className='group-skills'>
                        <div className='skills'><img className='img-skills' src={html} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={css} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={js} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={react} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={git} alt="" /></div>
                    </div>
                    <div className='group-skills'>
                        <div className='skills'><img className='img-skills' src={laravel} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={php} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={bootstrap} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={jquery} alt="" /></div>
                        <div className='skills'><img className='img-skills' src={firebase} alt="" /></div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Skills
