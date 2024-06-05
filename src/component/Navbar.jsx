import { NavLink } from "react-router-dom"
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();

return (
<>
<header className="navbar-fixed">
<div className="container01">
<div className="logo-brand">
<NavLink to="/">Seconding Inning Matrimonial</NavLink>
</div>
<nav>
<ul>
<li>
<NavLink to="/" className="nav-link">Home</NavLink>
</li>
<li>
<NavLink to="/about" className="nav-link">About Us</NavLink>
</li>
<li>
<NavLink to="/services" className="nav-link">Services</NavLink>
</li>
<li>
<NavLink to="/contact" className="nav-link">Contact Us</NavLink>
</li>

{isLoggedIn ? (

    <li>
<NavLink to="/logout" className="nav-link">Logout</NavLink>
</li>
) : (
    <>
<li>
<NavLink to="/registeration" className="nav-link">Register</NavLink>
</li>
<li>
<NavLink to="/login" className="nav-link">Login</NavLink>
</li>
</>
)}
{/* <li>
<NavLink to="/" className="nav-link">Home</NavLink>
</li> */}
</ul>
</nav>
</div>
</header>
</>
)
}


// import { NavLink } from "react-router-dom"
// import "./Navbar.css";

// export const Navbar = () => {
//     return (
//     <>
//     <header className="navbar-fixed">
//         <div className="container">
//             <div className="logo-brand">
//                 <NavLink to="/">Seconding Inning Matrimonial</NavLink>
//             </div>
//         <nav>
//             <ul><li> 
//                 <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/about">About Us</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/services">Services</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/contact">Contact Us</NavLink>
//                 </li>
//                 {/* <li>
//                 <NavLink to="/registeration">register</NavLink>
//                 </li>
//                 <li>
//                 <NavLink to="/login">Login</NavLink>
//                 </li><li>
//                 <NavLink to="/">Home</NavLink>
//                 </li> */}
//                 </ul>
//         </nav>
//         </div>
//     </header>
//     </>
//     )
// }

// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// export const Navbar = () => {
//     return (
//         <>
//             <header className="navbar-fixed">
//                 <div className="container01">
//                     <div className="logo-brand">
//                         <NavLink to="/">Seconding Inning Matrimonial</NavLink>
//                     </div>
//                     <nav>
//                         <ul>
//                             <li>
//                                 <NavLink to="/" className="nav-link">Home</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/about" className="nav-link">About Us</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/services" className="nav-link">Services</NavLink>
//                             </li>
//                             <li>
//                                 <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </header>
//         </>
//     );
// };

