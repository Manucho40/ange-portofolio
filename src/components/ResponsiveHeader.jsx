import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Reseaux from "./Reseaux";

const ResponsiveHeader = () => {
    return ( 
        <div className="responsiveHeader">
            <div>
                <h3>Ange-Emmanuel</h3>
            </div>
            <div className="respoRight">
                <Reseaux />
                <div>
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
            </div>
        </div>
     );
}
 
export default ResponsiveHeader;