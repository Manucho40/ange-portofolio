import { URL } from "url";
import introBg from "../../assets/img/intro-bg.jpg" 


const Accueil = () => {
 
    return ( 
        <div id="accueil">
            <div className="accueil" style={{backgroundImage: `url(${introBg})`}}>
                
            </div>
            <div className="accueil-content">
                <div className="intro-info">
                    <h3>Welcome</h3>
                    <p>Je suis Ange Emmanuel</p>
                    <button>Contactez moi</button>
                </div>
            </div>
        </div>
     );
}
 
export default Accueil;