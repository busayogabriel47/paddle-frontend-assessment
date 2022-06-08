import react from 'react'
import { Link, Router } from 'react-router-dom'
import ecommerce from '../asset/ecommerce.png'



const Navbar = () => {

    return (
    <header className="header">
        <div className='container'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid p-2">
                <Link class="navbar-brand" to="#"><img src={ecommerce} width="100px"/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                         <li class="nav-item">
                            <Link exact to="/contact" class="nav-link">CONTACT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about" class="nav-link">ABOUT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blog" class="nav-link">BLOG</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    </header>
    )
}

export default Navbar;