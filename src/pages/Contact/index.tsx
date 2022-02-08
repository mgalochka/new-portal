import React from "react";
import routMain from "./routes";

import ChristopherJpg from 'assets/img/christopher.jpg';

import './styles.scss';

const Contact = () => (
    <div className="contactPage">
        <div className="info">
            <div className="phone">
                <a href="tel:+79991234576" >+38 (095) 000 00 00</a>
            </div>
            <div className="name"> 
                Галина <br/> Козак
            </div>
            <div className="mail">
                <a href="mailto:mgalochka5@gmail.com" >mg5555@gmail.com</a>
            </div>
            <div className="position"> 
                Frontend Developer
            </div>
            <div className="technologies"> 
                HTML CSS JS
            </div>
        </div>
        <div className="image">
            <img src={ChristopherJpg} alt={ChristopherJpg} />
        </div>
    </div>
)


export {routMain};
export default Contact;