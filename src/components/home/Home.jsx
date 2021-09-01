import React from 'react'
import './home.css'
import { Typewriter } from 'react-simple-typewriter'
import 'animate.css/animate.min.css'


const presentation = () => {
    return (
        <div className='presentation animate__animated animate__bounceInDown'>
            <div className='container-presentation'>
                <div className='container-title'>
                    <div className='title'>
                        <h2 className='hello animate__animated animate__hinge animate__delay-2s'>Hello!</h2>
                        <h2>I´M </h2>
                        <h2 className='typewriter' style = { {  color : '#FC6D6D' ,  fontWeight : 'bold'  } }> 
                            <Typewriter
                                loop
                                cursor
                                cursorStyle='|'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                                words={['LAUTARO RODRIGUEZ', 'A DEVELOPER WEB']}
                            />
                        </h2>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default presentation
