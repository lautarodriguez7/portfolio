import React, { useState } from 'react'
import './about.css'
import Imagen from '../../assets/about/im2.png'
import about from '../../assets/about/about.png'
import 'animate.css/animate.min.css'

const About = () => {
    const [animation, setAnimation] = useState(false);

    const changeAnimation = () => {
        if(window.scrollY >= 350) {
            setAnimation(true);
        } else if(window.scrollY <= 550) {
            setAnimation(false);
        }
    }
    const [animation2, setAnimation2] = useState(false);

    const changeAnimation2 = () => {
        if(window.scrollY >= 400) {
            setAnimation2(true);
        } else if(window.scrollY <= 1200) {
            setAnimation2(false);
        }
    }

    window.addEventListener("scroll", changeAnimation);
    window.addEventListener("scroll", changeAnimation2);
    return (
        <>
            <div className="container-about">
                <div className="title-about">
                    <h1 id='title-h1' className={animation ? "animate__animated animate__fadeInUp animate__fast	" : "animate__animated animate__fadeOutDown"}>ABOUT ME</h1>
                </div>            
                <div className='me'>
                    <div className='container-me-image'>
                        <img src={about} alt="" />
                    </div>
                    <div className='me-image'>
                        <img src={Imagen} alt=''/>
                        <div id='container-title'>
                        <p className={animation2 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>Hello, my name is Lautaro Rodriguez and I am a Web Developer!</p>
                            <p className={animation2 ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>Front end development lover, in which I try to improve my skills every day. I am an active, sociable and introverted person.</p>
                            <p className={animation2 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>I like soccer and play it daily, it is my passion in addition to programming. If there is a phrase that identifies me, it is: "Trying to be my best version every day of my life"</p>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    )
}

export default About
