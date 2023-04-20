import Accueil from "./componentsBody/Accueil";
import Apropos from "./componentsBody/Apropos";
import CV from "./componentsBody/CV";
import Contact from "./componentsBody/Contact";
import Projets from "./componentsBody/Projets";
import WhtatIDo from "./componentsBody/WhtatIDo";

const Body = () => {
    return ( 
        <main className="body">
            <Accueil />
            <Apropos />
            <WhtatIDo />
            <CV />
            <Projets />
            <Contact />
        </main>
     );
}
 
export default Body;