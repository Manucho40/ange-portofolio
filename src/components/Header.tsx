import React from "react";
import photo from "../assets/img/photo_Ange-Emmanuel_KOUASSI.jpeg"




const Header = () => {
    return ( 
        <div className="header">
            <div>
                <img src={photo} alt="" />
                <h5>Ange-Emmanuel KOUASSI</h5>
            </div>
            <ul className="header-list">
                <a href="#accueil"><li>Accueil</li></a>               
                <a href="#apropos"><li>Apropos</li></a>
                <a href="#what"><li>Ce que je fais!</li></a>
                <a href="#cv"><li>CV</li></a>
                <a href="#projets"><li>Projets</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
            <div className="reso">
                <p>facebook</p>
                <p>linkedin</p>
                <p>github</p>
            </div>
        </div>

     );
}
 
export default Header;