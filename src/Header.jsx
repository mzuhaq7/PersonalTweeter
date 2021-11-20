import React from "react";
// import {avatar} from "./"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-custom">
                <div className="container-fluid myNav">
                    <a className="navbar-brand ztitle" href="#">Tweet-er</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item navbar znav-item">
                                <form className="d-flex">
                                    <input className="form-control me-2 sbar zsrh" type="search" placeholder="Enter Trend to Search" aria-label="Search" />
                                    <button class="btn btn-outline-success zsbtn" type="submit">Search</button>
                                </form>
                            </li>
                            <li className="nav-item navbar znav-item">
                                <Link to="/index" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item navbar znav-item">
                                <Link className="nav-link" to="/history">History</Link>
                            </li>

                            <li className="nav-item navbar znav-item">
                                <Link className="nav-link " to="/about">About us</Link>
                            </li>
                            <li className="nav-item navbar">
                                <Link to="/login">
                                <button type="button" className="btn btn-default btn-sm zlgout-btn">
                                    <span className="glyphicon glyphicon-log-out"></span> Log out
                                </button>
                                </Link>
                            </li>
                            {/* <li className="nav-item navbar navbar-img">
                                <div className="nav-img">
                                <img src="./download.png" alt="Avatar" className=""/>
                                </div>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </>

    );
}


export default Navbar;