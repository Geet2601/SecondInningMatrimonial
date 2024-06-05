import { Link } from "react-router-dom";
import Dropdown from "../component/Dropdown";
export const Contact =()=> {
    return <>
  <section className="contactSec">
      <div className="contactIMG"/>
      <div className="infocontact">
    <h1 className="h1contact">Contact Us</h1>
    <p>For more details about the services we provide, contact our team</p>
    {/* <img src="image/employee_9124738.png" alt="" className=""/> */}
    <Dropdown name="Mr. Abhishek Mishra" phNO="9140036901" whatsapp={'https://wa.me/919140036901'}/>
    <Dropdown name="Mr. Mani Sachan" phNO="97928 66141" whatsapp="https://wa.me/+919792866141"/>
      </div>
    
    </section>
    </>
};