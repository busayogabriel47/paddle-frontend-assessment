import React from "react";
import CountDown from "./countDown";
import InputField from "./inputField";
import Navbar from "./navbar";


const Comingsoon = () => {

    return (

        <>
            <Navbar/>
            <div className="row comingSoon text-center">
                <div className="col-12 mt-5 text-white">
                    <h1 className="headingOne">SOMETHING AWESOME IS <br/> COMING SOON </h1>

                    <p className="mt-3">Your all-in-one-affiliate marketing tracking software track, automate and optimize your campaigns</p>

                    <CountDown/>

                </div>

                <div className="col-12 mt-5 marginUp">
                    <InputField/>
                </div>

            </div>
        </>
    )
}

export default Comingsoon