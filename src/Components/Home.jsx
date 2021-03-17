// Literals file 
import Literals from '../literals';
// functional Component for Home
const Home = () =>{
    return(
        <div className="root-container">
            <h2>{Literals.pageHeadings.homePage}</h2>
        </div>
    );
}
export default Home;