import React, { useState } from 'react'
import './about.css'
import Imagen from '../../assets/about/im2.png'
import about from '../../assets/about/about.png'
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
    const [animation2, setAnimation2] = useState(false);

    const changeAnimation2 = () => {
        if(window.scrollY >= 700) {
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
                            <p className={animation2 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur tenetur laborum voluptas excepturi sed explicabo deleniti deserunt autem fuga, impedit magnam at molestias, illo rem ullam soluta velit ex.</p>
                            <p className={animation2 ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum non recusandae deleniti distinctio quisquam illum perspiciatis adipisci tempora delectus illo obcaecati, ad minima id repudiandae reprehenderit repellendus saepe fugit rerum.</p>
                            <p className={animation2 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptatem quis ab fugiat repellendus odit aut ipsum aliquid quos in ullam, incidunt cumque nisi eum similique, veritatis dicta commodi ex.</p>
                        </div>
                    </div>
                </div>
            </div>           
        </>
    )
}

export default About
