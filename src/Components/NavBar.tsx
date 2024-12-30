import React from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu"

const NavBar = () => (
    <div className="w-100 bg-black-80">
        <Link className="left no-underline white-90" to="/">
            <img
                src="https://alpinedairynp.com/wp-content/uploads/2020/12/web-agency-logo-3.png"
                width={32}
            />
            <span className="mb2 fw7 f4">Alpine Dairy</span>
        </Link>
        <div className="tr">
            <Menu/>
        </div>
    </div>
)

export default NavBar