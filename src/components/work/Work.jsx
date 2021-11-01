import React, {useState} from 'react'
import './work.css'
import totalmedic from '../../assets/work/totalmedic.jpg'
import crud from '../../assets/work/crud.jpg'
import movie from '../../assets/work/movie.jpg'
import memes from '../../assets/work/meme.jpg'
import 'animate.css/animate.min.css'

const Work = () => {
    const [animationTitle, setAnimationTitle] = useState(false);
    const [animationWork2, setAnimationWork2] = useState(false);
    const [animationWork3, setAnimationWork3] = useState(false);
    const [animationWork4, setAnimationWork4] = useState(false);



    const ChangeTitleWork = () => {
        if(window.scrollY >= 2300) {
            setAnimationTitle(true);
        } else if(window.scrollY <= 2650) {
            setAnimationTitle(false);
        }
    }

    const ChangeWork2 = () => {
        if(window.scrollY >= 2550) {
            setAnimationWork2(true);
        } else if(window.scrollY <= 4050) {
            setAnimationWork2(false);
        }
    }

    const ChangeWork3 = () => {
        if(window.scrollY >= 3150) {
            setAnimationWork3(true);
        } else if(window.scrollY <= 4200) {
            setAnimationWork3(false);
        }
    }

    const ChangeWork4 = () => {
        if(window.scrollY >= 3550) {
            setAnimationWork4(true);
        } else if(window.scrollY <= 4500) {
            setAnimationWork4(false);
        }
    }

    window.addEventListener("scroll", ChangeTitleWork);
    window.addEventListener("scroll", ChangeWork2);
    window.addEventListener("scroll", ChangeWork3);
    window.addEventListener("scroll", ChangeWork4);

    return (
        <>
            <section className="container-work">
                <div className={animationTitle ? "title-work animate__animated animate__fadeInUp" : "title-work animate__animated animate__fadeOutDown"}>

                    <h1>WORKS</h1>
                </div>
                <div className="work">
                    <div className={animationTitle ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
                        <a href="https:www.totalmedic.com.ar"><img src={totalmedic} alt="" /></a>
                    </div>
                    
                    <p className={animationTitle ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>
                        Total Medic is a company dedicated to providing a comprehensive solution in medical supplies
                    </p>
                </div>
                
                <div className="work">
                    <p className={animationWork2 ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>
                        Movie template migrated to react
                    </p>
                    <div className={animationWork2 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
                        <a href="https://github.com/lautarodriguez7/CRUD-APP"><img src={movie} alt="" /></a>
                    </div>
                </div>

                <div className="work">
                    <div className={animationWork3 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
                        <a href="https:www.totalmedic.com.ar"><img src={memes} alt="" /></a>
                    </div>
                    <p className={animationWork3 ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>
                        In this project we generate our own meme by choosing the favorite photo and its text
                    </p>
                </div>

                <div className="work">
                    <p className={animationWork4 ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>
                        CRUD made with react
                    </p>
                    <div className={animationWork4 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
                        <a href="https://github.com/lautarodriguez7/CRUD-APP"><img src={crud} alt="" /></a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Work
