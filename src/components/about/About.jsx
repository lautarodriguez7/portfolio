import React, { useState } from 'react'
import './about.css'
import Imagen from '../../assets/about/im2.png'
import about from '../../assets/about/about.png'
import Skills from '../../assets/about/code.png'
import 'animate.css/animate.min.css'

const About = () => {
    const [animation, setAnimation] = useState(false);

    const changeAnimation = () => {
        if(window.scrollY >= 500) {
            setAnimation(true);
        } else if(window.scrollY <= 550) {
            setAnimation(false);
        }
    }

    const [animationSkill, setAnimationSkills] = useState(false);

    const changeAnimationSkill = () => {
        if(window.scrollY >= 810) {
            setAnimationSkills(true);
        } else if(window.scrollY <= 850) {
            setAnimationSkills(false);
        }
    }

    window.addEventListener("scroll", changeAnimation);
    window.addEventListener("scroll", changeAnimationSkill);

    return (
        <>
        <div className="container-about">
            <div className="title-about">
                <img src={about} alt="" />
                <h1 id='title-h1' className={animation ? "animate__animated animate__zoomInUp" : "animate__animated animate__zoomOutDown"}>ABOUT ME</h1>
            </div>            
            <div className='me'>
                <div className='me-image'><img src={Imagen} alt=''/></div>
                <div className={animation ? "animate__animated animate__bounceInUp" : "animate__animated animate__backOutDown"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur tenetur laborum voluptas excepturi sed explicabo deleniti deserunt autem fuga, impedit magnam at molestias, illo rem ullam soluta velit ex.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum non recusandae deleniti distinctio quisquam illum perspiciatis adipisci tempora delectus illo obcaecati, ad minima id repudiandae reprehenderit repellendus saepe fugit rerum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptatem quis ab fugiat repellendus odit aut ipsum aliquid quos in ullam, incidunt cumque nisi eum similique, veritatis dicta commodi ex.</p>
                </div>
                <div className="container-skills">
                </div>
            </div>
        </div>
        <div className='container-skills'>
        <div className="title-skills">
            <h1 className={animationSkill ? "animate__animated animate__zoomInUp" : "animate__animated animate__zoomOutDown"}>SKILLS</h1>
        </div>
            <img src={Skills} id='img-skills' alt="" />
        </div>

        </>
    )
}

export default About
