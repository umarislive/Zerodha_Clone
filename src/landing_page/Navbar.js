import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white"}}>
            <div class="container p-2">
                <Link class="navbar-brand" to={"/"}>
                    <img src='media/images/logo.svg' alt='Logo' style={{width: "25%"}}/>
                </Link>
                <div>
                    <form class="d-flex" role="search">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to={"/signup"}>Signup</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={"/about"}>About</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={"/product"}>Products</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={"/pricing"}>Pricing</Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to={"/support"}>Support</Link>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;