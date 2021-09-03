import React from 'react'
import './footer.css'
import Facebook from '../../assets/footer/facebook.png'
import Twitter from '../../assets/footer/twitter.png'
import Instagram from '../../assets/footer/instagram.png'
import Linkedin from '../../assets/footer/linkedin.png'

const Footer = () => {
    return (
        <>
            <div className="container-footer">
                <div className="address">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg> 
                       +54 9 236 154223348
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16"><path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/></svg>
                        Rosario, Santa Fe (Argentina)
                    </span>
                </div>  
                <div className="social-networks">
                    <div className="network"><a href="https://www.instagram.com/Lautarodriguez17/"><img src={Linkedin} alt="" /></a></div>
                    <div className="network"><a href="https://www.facebook.com/Lautarodriguez17/"><img src={Facebook} alt="" /></a></div>
                    <div className="network"><a href="https://www.facebook.com/Lautarodriguez17/"><img src={Twitter} alt="" /></a></div>
                    <div className="network"><a href="https://www.facebook.com/Lautarodriguez17/"><img src={Instagram} alt="" /></a></div>
                </div>  
            </div>  
        </>
    )
}

export default Footer
