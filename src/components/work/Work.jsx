import React, {useState} from 'react'
import './work.css'
import totalmedic from '../../assets/work/totalmedic.jpg'
import crud from '../../assets/work/crud.jpg'
import 'animate.css/animate.min.css'

const Work = () => {
    const [animationTitle, setAnimationTitle] = useState(false);
    const [animationWork2, setAnimationWork2] = useState(false);
    const [animationWork3, setAnimationWork3] = useState(false);


    const ChangeTitleWork = () => {
        if(window.scrollY >= 2300) {
            setAnimationTitle(true);
        } else if(window.scrollY <= 2650) {
            setAnimationTitle(false);
        }
    }

    const ChangeWork2 = () => {
        if(window.scrollY >= 3250) {
            setAnimationWork2(true);
        } else if(window.scrollY <= 3750) {
            setAnimationWork2(false);
        }
    }

    const ChangeWork3 = () => {
        if(window.scrollY >= 3750) {
            setAnimationWork3(true);
        } else if(window.scrollY <= 4500) {
            setAnimationWork3(false);
        }
    }

    window.addEventListener("scroll", ChangeTitleWork);
    window.addEventListener("scroll", ChangeWork2);
    window.addEventListener("scroll", ChangeWork3);

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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ullam illum deleniti natus maxime hic quod rem sint iure ipsa ipsam numquam cum, consequatur nobis delectus nesciunt, exercitationem aut dolorem!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid molestiae atque itaque harum similique natus consequuntur, nihil obcaecati, suscipit quam quasi, est dolorem quibusdam asperiores doloribus non error laboriosam.
                    </p>
                    <div className={animationWork2 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
                        <a href="https://github.com/lautarodriguez7/CRUD-APP"><img src={crud} alt="" /></a>
                    </div>

                </div>

                <div className="work">
                    <div className={animationWork3 ? "animate__animated animate__fadeInUp" : "animate__animated animate__fadeOutDown"}>
                        <a href="https:www.totalmedic.com.ar"><img src={crud} alt="" /></a>
                    </div>
                    
                    <p className={animationWork3 ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutDown"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus aliquid molestiae atque itaque harum similique natus consequuntur, nihil obcaecati, suscipit quam quasi, est dolorem quibusdam asperiores doloribus non error laboriosam.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt provident voluptatem, error, expedita veniam laboriosam quibusdam blanditiis similique numquam repellat quas excepturi! Delectus, iure repellendus ipsam unde tempore aut inventore.
                    </p>
                </div>

            </section>
        </>
    )
}

export default Work
