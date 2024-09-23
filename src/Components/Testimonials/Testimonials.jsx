// import React from 'react'
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
    const slider = useRef()
    let transitionX= 0
    const slideForward = () =>{
        if(transitionX > -50){
            transitionX -= 25
        }
        slider.current.style.transform = `translateX(${transitionX}%)`
    }
    const slideBackward = () =>{
        if(transitionX < 0){
            transitionX += 25
        }
        slider.current.style.transform = `translateX(${transitionX}%)`
    }
    return (
        <div className="testimonials">
            <img src={next_icon} alt="" onClick={slideForward} className="next-btn" />
            <img src={back_icon} alt="" onClick={slideBackward} className="back-btn" />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Emma Johnson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tempora vitae, dolor repellat error quia libero eligendi veniam
                                quibusdam? Iusto ex nihil asperiores minus ullam, sequi labore
                                fugit veniam consequatur. Hic!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tempora vitae, dolor repellat error quia libero eligendi veniam
                                quibusdam? Iusto ex nihil asperiores minus ullam, sequi labore
                                fugit veniam consequatur. Hic!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>WSophia Mille</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tempora vitae, dolor repellat error quia libero eligendi veniam
                                quibusdam? Iusto ex nihil asperiores minus ullam, sequi labore
                                fugit veniam consequatur. Hic!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>James Harrison</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Tempora vitae, dolor repellat error quia libero eligendi veniam
                                quibusdam? Iusto ex nihil asperiores minus ullam, sequi labore
                                fugit veniam consequatur. Hic!
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
