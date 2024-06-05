import { useState } from "react";

import "./Dropdown.css";
useState
const Dropdown = ({name, phNO, whatsapp}) => {
    const[isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

return (
<div className="dropdown">
    <div className="profile" onClick={toggleDropdown}>
        <img src="image/employee_9124738.png" alt="" className="profile-image"/>
    </div>
    {isOpen && (
        <div className="contact-info">
            <h2>{name}</h2>
            <a className="phNO" href={`tel:${phNO}`} target="_blank" rel="noopener noreferrer"> <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FD7E14/phone.png" alt="phone"/></a>
            <a className="WAlink" href={whatsapp} target="_blank" rel="noopener noreferrer"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/FD7E14/whatsapp--v1.png" alt="whatsapp--v1"/></a>
        </div>
    )}
</div>
) 

};
export default Dropdown;