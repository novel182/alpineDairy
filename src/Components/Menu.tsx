import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
    <div className="">
        <div className="dn-s dib-ns">
            <Link to="/" className="no-underline mh3 white-90">Home</Link>
            <Link to="/about" className="no-underline mh3 white-90">About us</Link>
            <Link to="/contact" className="no-underline mh3 white-90">Contact</Link>
        </div>
        <div className="dn-ns">

        </div>
    </div>
)

export default Menu