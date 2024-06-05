import "./Card.css" ;
// import "./Navbar.jsx"
import {Link} from 'react-router-dom';

function Card() {
    return (
    <>
        
        <div className="container">
        <Link to="/" className="card" >  
            <h2>First Inning</h2>
            <br/><br/>
            <p>A place for singles to find their perfect match for a lifetime journey together. <br />
            First Inning, Where love begins and forever starts for those taking their first steps towards marriage</p>
        </Link>
        <Link to="/login" className="card">  
        <h2>Second Inning</h2>
        <br/><br/>
        <p>Entering the second inning of matrimony. Seasoned hearts deepen their connection on the path of enduring love.</p>
    </Link>
    </div>
    </>)
}
export default Card;