import React from 'react'
import './about.css'
import Imagen from '../../assets/about/im2.png'


const about = () => {
    return (
        <>
        <div className="container-about">
            <div className="title-about"><h1>ABOUT ME</h1></div>
            <div className='me'>
                <div className='me-image'><img src={Imagen} alt=''/></div>
                <div className='description-me'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat consequuntur tenetur laborum voluptas excepturi sed explicabo deleniti deserunt autem fuga, impedit magnam at molestias, illo rem ullam soluta velit ex.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum non recusandae deleniti distinctio quisquam illum perspiciatis adipisci tempora delectus illo obcaecati, ad minima id repudiandae reprehenderit repellendus saepe fugit rerum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptatem quis ab fugiat repellendus odit aut ipsum aliquid quos in ullam, incidunt cumque nisi eum similique, veritatis dicta commodi ex.</p>
                </div>
                <div className="container-skills">
                </div>
            </div>
        </div>
        <div className='container-skills'>
        <div className="title-skills"><h1>SKILLS</h1></div>
        </div>

        </>
    )
}

export default about
