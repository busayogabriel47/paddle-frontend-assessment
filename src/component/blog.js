import React from "react";
import Navbar from "./navbar";
import NavbarBlog from "./navbar-blog";
import developer1 from '../asset/developer1.jpg'
import developer2 from '../asset/developer2.jpg'
import developer3 from '../asset/developer3.jpg'


const Blog = () => {


    return (
        <>
        <NavbarBlog/>
            <div className="blogPage">
                <div className="row text-center">
                    <div className="col-12 col-md-4 blogBg">
                        <div id="blogArticle" className="text-white">
                            <h6>----------- Blog</h6>
                            <h2>Articles and News</h2>
                        </div>                                
                    </div>
                </div>
            </div>


            <div style={{backgroundColor: "#fafafa"}}>
            <div className="container" style={{backgroundColor: "#fafafa"}}>
                <div className="row">
                    <div className="col-12 col-md-6 latest">
                        <h2>Latest From The Blog</h2>
                        <p>Lorem ipsum dolor sit Amet, Conseteur Lorem ipsum dolor sit Amet, Conseteur
                        Lorem ipsum dolor sit Amet, Conseteur
                        </p>
                    </div>

                    <div className="col-12 col-md-6 blogSearch">
                            
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>

                    </div>
                </div>

                <div className="row cardSection">
                    <div className="col-12 col-md-4 col p-3">
                            <img src={developer1} width="100%" height="200px"/>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritat</p>
                    </div>

                    <div className="col-12 col-md-4 col p-3">
                            <img src={developer3} width="100%" height="200px"/>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritat</p>
                    </div>

                    <div className="col-12 col-md-4 col p-3">
                            <img src={developer2} width="100%" height="200px"/>
                            <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritat</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}


export default Blog;