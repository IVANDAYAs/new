import React from "react";
import "./products.css";
import r1 from "./images/1r.png"
import r2 from "./images/2r.png"
import r3 from "./images/3r.png"
import r4 from "./images/4r.png"
import r5 from "./images/5r.png"

export default function () {
    return (
        <div id="foodproducts" className="products">
        <h1>TESTIMONIALS</h1>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src={r1} class="d-block w-100" alt="..." />
                        <div class="carousel-caption-custom ">
                            <h5>Fitness on a budget has never been easier.</h5>
                            <p>I am so happy that their promises and my experience aligned</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={r2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption-custom ">
                            <h5>We have transformed people from all walks of life.</h5>
                            <p>Being a freelancer,I had an unregulated schedule,FHD helped me get back on track</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={r3} class="d-block w-100" alt="..." />
                        <div class="carousel-caption-custom ">
                            <h5>We have catered to professionals in their early days.</h5>
                            <p>I am a professional kickboxer now.FDH served as a stepping stone towards my professional career</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={r4} class="d-block w-100" alt="..." />
                        <div class="carousel-caption-custom ">
                            <h5>Even doctors are in all praises,always.</h5>
                            <p>I am a doctor myself and I can proudly say that FDH helped me achieve results in the most organic way</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={r5} class="d-block w-100" alt="..."  data-bs-interval="2000"/>
                        <div class="carousel-caption-custom ">
                            <h5>We have gone global and acclaimed recoginition in no time.</h5>
                            <p>I have always been a fitness conscious person.I am currently staying at Hong Kong and FDH has helped me to stay fit and run a marathon at 50.Couldn't be any happier</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}