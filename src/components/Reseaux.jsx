import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



const Reseaux = () => {
    return ( 
        <div className="reso">
            <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faGithub} /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
     );
}
 
export default Reseaux;
