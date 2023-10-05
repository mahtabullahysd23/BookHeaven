import "./Navbar.style.scss"
import { SlBasket } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlMagnifier } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar_logo">
            {/* <img style={{
                height: '50px',
            }} src ="../../../../public/logo.png"></img> */}
            <h1>BookHeaven</h1>
        </div>
        <div className="navbar_links">
            <ul>
                <li><NavLink activeClassName="active" to="/">HOME</NavLink></li>
                <li><NavLink activeClassName="active" to="/books">BOOKS</NavLink></li>
                <li><NavLink activeClassName="active" to="/about">ABOUT</NavLink></li>
                <li><NavLink activeClassName="active" to="/contact">CONTACT</NavLink></li>
            </ul>
        </div>
        <div className="nav_icons">
            <ul>
            <li><NavLink activeClassName="active" to="/signin">SIGN IN</NavLink></li>
            <li><NavLink activeClassName="active" to="/signup">SIGN UP</NavLink></li>
            <li><NavLink activeClassName="active" to="/search"><SlMagnifier/></NavLink></li>
            <li><NavLink activeClassName="active" to="/wishlist"><SlHeart/></NavLink></li>
            <li><NavLink activeClassName="active" to="/cart"><SlBasket/></NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
