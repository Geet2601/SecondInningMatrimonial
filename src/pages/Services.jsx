import { Link } from "react-router-dom";
export const Services = () => {
    return(
        <>
        <section className="service-section">
        <Link to="/services" href="">
            <div className="serviceHeading"> Services We Provide </div>
            </Link>
           <Link to="/contact">

            <div className="servicesContainer">
        <div className="verificationH">
            In-person document verification   
    <p className="verificationP">Experience hassle-free verification as our agents conduct in-person document authentication right at your doorstep. We provide services like verification of government  documents to give your a boost at finding a partner. </p></div>
        <div className="verificationH">
        Personalized Matchmaking Service            
    <p className="verificationP">Utilizing our staff's comprehensive database of diverse users, we meticulously select the ideal match tailored to your specific preferences and needs, ensuring a perfect alignment with your requirements.</p></div>
        <div className="verificationH">
        Secure and Confidential User Data Protection  
    <p className="verificationP">We prioritize the privacy and security of user data on our matrimonial website. Information is shared only after thorough verification and mutual interest, ensuring confidentiality and trust between parties.</p></div>
        <div className="verificationH">
        Personalized Consultation Service   
    <p className="verificationP">Connect directly with our service agents via call to discuss your preferences and requirements. We tailor our services to your specific needs, providing customized solutions and assistance every step of the way.</p></div>
        </div>
           </Link>
        </section>
        </>
        )
};

//mantion services we provide, services like physical verification of documents,privacy of user data, finding the best matches using our staff, 
//getting users connected with great people and helping people get a second chance