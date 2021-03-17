// Literals file 
import Literals from '../literals';
// functional Component for About
const About = () =>{
    return(
        <div className="root-container">
            <h2>{Literals.pageHeadings.aboutPage}</h2>
            <h6>{Literals.labels.aboutContent}</h6>

            <ul className="aboutContent">
                <li><p>ghfgfg</p></li>
            </ul>
        </div>
    );
}
export default About;