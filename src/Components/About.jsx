// Literals file 
import Literals from '../literals';
// functional Component for About
const About = () =>{
    return(
        <div className="root-container">
            <h2>{Literals.pageHeadings.aboutPage}</h2>
            <h6>{Literals.labels.aboutContent}</h6>

            <ul className="aboutContent">
                <li><p>Here I used 'Users' API - 'http://jsonplaceholder.typicode.com/users'</p></li>
                <li><p>Use Bootstrap just to beautify the table and try to showcase it's all features like - sorting etc.</p></li>
                <li><p>Used SASS(css Preprocessor) instead of plain CSS</p></li>
                <li><p>Used 'color.scss' where we store our all colors to be used in application</p></li>
                <li><p>Used 'React-Router' to show the navigation between the components</p></li>
                <li><p>Filter out the Search Results based upon 'name' of user in dropdown</p></li>
                <li><p>Used Smart Dropdown - 'React-Select' where you can search options by typing in dropdown</p></li>
                <li><p>Used 'Literal' file where we store our all constants or text at one place </p></li>
            </ul>
        </div>
    );
}
export default About;