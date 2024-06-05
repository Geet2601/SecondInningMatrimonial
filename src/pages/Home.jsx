import Card from "../component/Card";
import { About } from "./About";
import {Services} from "./Services";
import { Contact } from "./Contact";

export const Home = () => {
    return (
    <>
       <section>


        <div className="left01">
    <div className="container-home">

       <main>
    <h1 className="h1wan">Second Inning matrimonial 
    </h1>    
    <p>A Second Chance to Happiness</p>
       <Card/>
    {/* <main>
        <section className="section-hero">
        <div className="container grid grid-two-cols">
        <div className="hero-content">
        <p> </p>
        </div>
        </div>
        </section>
    </main> */}

            </main> 
        </div>
        </div>
    </section>
    <About/>
    <Services/>
    <Contact/>
    </>

    )
    
};

