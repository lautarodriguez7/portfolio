import React, { useState } from 'react'
import './skills.css'
import skills from '../../assets/skills/skills.png'
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
import mysql from '../../assets/skills/mysql.png'
import wave from '../../assets/skills/wave.png'

const Skills = () => {

    const [animationSkill, setAnimationSkills] = useState(false);

    const changeAnimationSkill = () => {
        if(window.scrollY >= 1200) {
            setAnimationSkills(true);
        } else if(window.scrollY <= 1150) {
            setAnimationSkills(false);
        }
    }
    const [animationSkill2, setAnimationSkills2] = useState(false);

    const changeAnimationSkill2 = () => {
        if(window.scrollY >= 1700) {
            setAnimationSkills2(true);
        } else if(window.scrollY <= 2750) {
            setAnimationSkills2(false);
        }
    }

    window.addEventListener("scroll", changeAnimationSkill2);
    window.addEventListener("scroll", changeAnimationSkill);
    
    return (
        <div>
            <div className='container-skills'>
                <div className="title-skills">
                    <h1 className={animationSkill ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>SKILLS</h1>
                    <img className={animationSkill ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"} src={skills} id='img-skills' alt="" />
                </div>
                <img src={wave} className='wave' alt="" />

                <div className='c-skills'>
                <div className={animationSkill2 ? "group-skills animate__animated animate__fadeInUp" : "group-skills animate__animated animate__fadeOutDown"}>
                        <div className='skills'><img className='img-skills' src={html} alt="" /><h2 className='name-skills'>HTML</h2></div>
                        <div className='skills'><img className='img-skills' src={css} alt="" /><h2 className='name-skills'>CSS</h2></div>
                        <div className='skills'><img className='img-skills' src={js} alt="" /><h2 className='name-skills'>Javascript</h2></div>
                        <div className='skills'><img className='img-skills' src={firebase} alt="" /><h2 className='name-skills'>Firebase</h2></div>
                        <div className='skills'><img className='img-skills' src={react} alt="" /><h2 className='name-skills'>ReactJS</h2></div>
                        <div className='skills'><img className='img-skills' src={git} alt="" /><h2 className='name-skills'>Git</h2></div>
                    </div>
                    <div className={animationSkill2 ? "group-skills animate__animated animate__fadeInDown" : "group-skills animate__animated animate__fadeOutDown"}>
                        <div className='skills'><img className='img-skills' src={laravel} alt="" /><h2 className='name-skills'>Laravel</h2></div>
                        <div className='skills'><img className='img-skills' src={php} alt="" /><h2 className='name-skills'>PHP</h2></div>
                        <div className='skills'><img className='img-skills' src={bootstrap} alt="" /><h2 className='name-skills'>Bootstrap</h2></div>
                        <div className='skills'><img className='img-skills' src={jquery} alt="" /><h2 className='name-skills'>Jquery</h2></div>
                        <div className='skills'><img className='img-skills' src={mysql} alt="" /><h2 className='name-skills'>MySql</h2></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills