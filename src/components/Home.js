import React from "react";
import Navbar from "./navbar.js";
import Landing from "./landing.js";
import Fourl from "./fourl.js";
import Pricing from "./pricing.js";
import Lsus from "./lsus.js";
import Sbw from "./sbw.js"
import Contact from "./contact.js";
import Footer from "./footer.js";
import Trial from "./trial.js";
import Testimonials from "./products.js";
import "./Home.css";


export default function Home(){
    return(
        <div className="home">
            <Navbar />
            <Landing />
            <Trial />
            <Lsus />
            {/* <Fourl /> */}
            <Pricing />
            <Testimonials />
            {/* <Sbw />  */}
            <Contact />
            <Footer />
        </div>
    );
}