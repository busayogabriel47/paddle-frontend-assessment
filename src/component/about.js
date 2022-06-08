import React from "react";
import images from "../asset/images.png"
import Navbar from "./navbar";


const Aboutus = () => {


    return (
        <>
            <Navbar/>
            <div className="aboutUs">
                <div className="row text-center">
                    <div className="col-12 col-md-6 text-white mt-5 about-one">
                        <img src={images} width="30%" />
                        <div className="aboutHeading">
                            <small>_________________ ABOUT US </small>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 text-white about-two">
                        <h2>Built for SaaS <br/> and E-commerce</h2>

                        <p>Our tools are easy to up and use with a user <br/>
                        friendly dashboard that enables you to set up, <br/>
                        launch, automate and manage multi-affiliate <br/>
                        campaigns in 5 minutes
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Aboutus