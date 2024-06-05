import { Link } from "react-router-dom";
export const About = () => {
    return <>
    
        <div className="homebg2">
<section className="aboutHome">
    <Link className="content" to="/about" href="">
    <div >
    <h1 className="ourMission">Our Mission</h1>
    <h1 className="about-para">
        <br />     
        At Second Inning Matrimonial, our mission is to create a supportive and inclusive community where individuals who have experienced setbacks or challenges in their previous relationships can come together to embark o n a new chapter of their lives. We understand that everyone deserves a chance at happiness, regardless of their past experiences, and we are committed to helping our members find meaningful connections and lasting relationships.
    </h1>
    </div>
    </Link>
    <Link to="/about">
    <div>
        <img className="weddingring" src="image/wedding-ring_9124716.png"/>
    </div>
    </Link>
    </section>    
        </div>
    
    </>
};