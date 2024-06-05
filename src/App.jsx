import { BrowserRouter,Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Login } from "./pages/Login";
import { Registeration } from "./pages/Registeration";
import { ProfileComponent } from "./pages/profileComp";
import { Preferences } from "./pages/preference";
import { Navbar } from "./component/Navbar";
import { Logout } from "./pages/Logout";
import Matches from "./pages/Matches";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <div className="margintop">

    <Navbar	/>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/registeration" element={<Registeration/>} />
        <Route path="/completeprofile" element={<ProfileComponent/>} />
        <Route path="/preferences" element={<Preferences/>} />
        <Route path="/matches" element={<Matches />} />
        

       </Routes>
    </div>
      </BrowserRouter>
    </>
  ) 
};
export default App;
