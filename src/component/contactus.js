import React from "react";
import {Link} from "react-router-dom"



const ContactUs = () => {

    return (

        <>
            <div className="comingSoon">
                <div className="row">
                    <div className="col-12 col-md-6 comingSoonOne">
                        <div className="comingHover">
                        </div>
                    </div>

                    <div className="col-12 col-md-6 comingSoonTwo">

                        <h3>Hey, We are still in the works, <br/>
                        But you can send us a message</h3>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="firstName" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="lastName" placeholder="name@example.com"/>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
                        </div>

                        <p className="text-white mt-5">Tell Us What You Need Help With</p>
                           <Link to="/"> 
                                <div id="navigateHome">
                                        <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </Link>
                    </div>

                </div>  
            </div>
        </>
    )
}

export default ContactUs