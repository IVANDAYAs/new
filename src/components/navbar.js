import React from "react";
import "./navbar.css";

function Navbar() {

    return (

        <div className="lnav">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <a class="navbar-brand" href=".">LIVECO</a>

                <div className="icon">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Program</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Free-trial</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sustainablity</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Food-products</a>
                        </li>
                    </ul>
                    <form class="form-inline">
                        <a href="/register"><button type="button" class="btn  logbtn"><b>Sign up</b></button></a>
                        <a href="/login"><button type="button" class="btn  logbtn" ><b>Login</b></button></a>                        
                    </form>
                </div>
            </nav>
        </div>
    );

}

export default Navbar



{/* <div className="lnav">
    <nav class="navbar navbar-dark fixed-top navbar-expand-lg " >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">LIVECO</a>
            <div className="icon">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#fourl">Features</a>
                    <a class="nav-link" href="#pricing">Pricing</a>
                    <div className="credbtn">
                        <button type="button" class="btn  logbtn "><b>Login</b></button>
                        <button type="button" class="btn  logbtn"><b>Register</b></button>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</div> */}
